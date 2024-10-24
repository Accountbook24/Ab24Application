﻿using Ab24HybridBalzorApplication;
using Microsoft.Maui.Controls.Compatibility;
using Newtonsoft.Json;
using static Microsoft.Maui.ApplicationModel.Permissions;
using Microsoft.Maui.Controls;
using Microsoft.Maui.ApplicationModel;
using System;
using System.IO;
using System.Threading.Tasks;
using System.Collections;
using Microsoft.Maui.Controls.PlatformConfiguration;



namespace Ab24HybridBalzorApplication
{
    public partial class MainPage : ContentPage
    {
        static readonly HttpClient client = new HttpClient();
        public MainPage()
         {
            InitializeComponent();
#if DEBUG
            myHybridWebView.EnableWebDevTools = true;
#endif
        }
        private async void OnHybridWebViewRawMessageReceived(object sender, HybridWebView.HybridWebViewRawMessageReceivedEventArgs e)
        {
            dynamic json = JsonConvert.DeserializeObject(e.Message);

            if (json["Type"] == "CameraPicker")
            {
                if (MediaPicker.Default.IsCaptureSupported)
                {
                    var status = await PermissionsHelper.CheckAndRequestPermissionAsync<Permissions.Camera>();
                    if (status == PermissionStatus.Granted)
                    {
                        await MainThread.InvokeOnMainThreadAsync(async () =>
                        {
                            //whatever you like 

                            FileResult photo = await MediaPicker.Default.CapturePhotoAsync();

                            if (photo != null)
                            {
                                // save the file into local storage
                                string localFilePath = Path.Combine(FileSystem.CacheDirectory, photo.FileName);

                                using Stream sourceStream = await photo.OpenReadAsync();
                                using var memoryStream = new MemoryStream();

                                sourceStream.CopyTo(memoryStream);
                                string base64 = Convert.ToBase64String(memoryStream.ToArray());

                                await myHybridWebView.InvokeJsMethodAsync("callBackFilePicked", base64);
                            }

                        });
                    }
                }
            }
            else if (json["Type"] == "Share" || json["Type"] == "Print" || json["Type"] == "Launch")
            {
                string Title = json.ContainsKey("Title") ? json["Title"] : string.Empty;
                string SubType = json.ContainsKey("SubType") ? json["SubType"] : string.Empty;
                string Filename = json.ContainsKey("Filename") ? json["Filename"] : string.Empty;
                string FileData = json.ContainsKey("Content") ? json["Content"] : string.Empty;
                string localFilePath = Path.Combine(FileSystem.CacheDirectory, Filename);
                HttpClient client = new HttpClient();

                System.Byte[] byteArray = null;

                if (IsBase64String(FileData))
                {
                    byteArray = System.Convert.FromBase64String(FileData);
                }

                if (!string.IsNullOrEmpty(SubType) && SubType == "Data")
                {


                    await MainThread.InvokeOnMainThreadAsync(async () =>
                    {
                        //using (var fs = new FileStream(localFilePath, FileMode.CreateNew))
                        //{
                        //    fs.Write(byteArray);
                        //}

                        if (json["Type"] == "Share")
                        {
                            await Share.Default.RequestAsync(new ShareTextRequest
                            {
                                Text = string.Empty,
                                Uri = FileData,
                                Title = Title
                            });
                        }

                        else if (json["Type"] == "Launch")
                        {
                            await Launcher.Default.OpenAsync(new OpenFileRequest(Filename, new ReadOnlyFile(localFilePath)));
                        }
                        else if (json["Type"] == "Print")
                        {
                            // Handle Print logic here
                            MemoryStream stream = new MemoryStream(byteArray);
                            await PrintStream(stream);
                        }
                    });
                }
                else if (!string.IsNullOrEmpty(SubType) && SubType == "URL")
                {
                    await MainThread.InvokeOnMainThreadAsync(async () =>
                    {
                        if (json["Type"] == "Share")
                        {
                            await Share.Default.RequestAsync(new ShareTextRequest
                            {
                                Text = string.Empty,
                                Uri = FileData,
                                Title = Title
                            });
                        }
                        else if (json["Type"] == "Launch" || json["Type"] == "Print")
                        {
                            var response = await client.GetAsync(FileData);
                            using (var fs = new FileStream(localFilePath, FileMode.CreateNew))
                            {
                                await response.Content.CopyToAsync(fs);
                            }

                            if (json["Type"] == "Launch")
                            {
                                await Launcher.Default.OpenAsync(new OpenFileRequest(Filename, new ReadOnlyFile(localFilePath)));
                            }
                            else if (json["Type"] == "Print")
                            {
                                //Handle Print logic here
                                MemoryStream stream = new MemoryStream(byteArray);
                                await PrintStream(stream);
                            }
                        }
                    });
                }
                else if (!string.IsNullOrEmpty(SubType) && SubType == "Text")
                {
                    await MainThread.InvokeOnMainThreadAsync(async () =>
                    {
                        await Share.Default.RequestAsync(new ShareTextRequest
                        {
                            Text = json.ContainsKey("Text") ? json["Text"] : string.Empty,
                            Title = Title
                        });
                    });
                }
            }
            else if (json["Type"] == "Browser")
            {
                Uri uri = null;
                if (json.ContainsKey("Url") && Uri.TryCreate((string)json["Url"], UriKind.Absolute, out uri))
                {
                    await MainThread.InvokeOnMainThreadAsync(async () =>
                    {
                        await Browser.Default.OpenAsync(uri, BrowserLaunchMode.SystemPreferred);
                    });
                }
            }
            else if (json["Type"] == "WhatsAppShare")
            {
                await MainThread.InvokeOnMainThreadAsync(async () =>
                {
                    string url = json["Url"];
                    try
                    {
                        await Launcher.Default.OpenAsync(url);
                    }
                    catch (Exception ex)
                    {
                        await App.Current.MainPage.DisplayAlert("Error", "Unable to open WhatsApp. " + ex.Message, "OK");
                    }
                });
            }
            else if (json["Type"] == "Dialer")
            {
                string phoneNumber = json["PhoneNumber"];

                var callPhoneStatus = await PermissionsHelper.CheckAndRequestPermissionAsync<Permissions.Phone>();

                if (callPhoneStatus == PermissionStatus.Granted)
                {
                    Uri phoneUri = new Uri($"tel:{phoneNumber}");
                    await Launcher.OpenAsync(phoneUri);
                }
                else
                {
                    Console.WriteLine("Required permissions not granted.");
                }
            }
            else if (json["Type"] == "LeadNotification")
            {
                // Extract relevant lead information from the JSON
                string leadName = json["LeadData"]["SrcNm"];
                string customerFirstName = json["LeadData"]["CusFN"];
                string customerContact = json["LeadData"]["CusCNo"];

                // Construct a notification message using the lead information
                string message = $"Lead from: {leadName}\nCustomer: {customerFirstName}\nContact: {customerContact}";

                // Send the notification to the Android notification drawer
                //SendNotification("New Lead Received", message);
            }
        }

       

        private async Task PrintStream(Stream stream)
        {
            PrintService printService = new PrintService();

            //Added this method to add additional checks before you can start printing
            if (printService.CanPrint())
            {

#if WINDOWS
                await printService.PrintFile(stream, "pdfTestFile.pdf", this.Window.Handler.PlatformView as Microsoft.UI.Xaml.Window);

#elif __IOS__ || MACCATALYST || ANDROID
                await printService.PrintFile(stream, "pdfTestFile.pdf", null);

#endif
            }
        }


        public static bool IsBase64String(string base64)
        {
            // Remove any white spaces and check if the string is null or empty.
            if (string.IsNullOrEmpty(base64))
                return false;

            // Check if the string's length is a multiple of 4.
            if (base64.Length % 4 != 0)
                return false;

            try
            {
                // Attempt to convert the string from Base64. If it fails, it's not a valid Base64 string.
                Convert.FromBase64String(base64);
                return true;
            }
            catch (FormatException)
            {
                return false;
            }
        }
    }
    public static class PermissionsHelper
    {
        public static async Task<PermissionStatus> CheckAndRequestPermissionAsync<TPermission>()
            where TPermission : BasePermission, new()
        {
            return await MainThread.InvokeOnMainThreadAsync(async () =>
            {
                TPermission permission = new TPermission();
                var status = await permission.CheckStatusAsync();
                if (status != PermissionStatus.Granted)
                {
                    status = await permission.RequestAsync();
                }

                return status;
            });
        }
    }
  

}
