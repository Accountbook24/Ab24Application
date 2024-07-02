using Ab24HybridBalzorApplication;
using Microsoft.Maui.Controls.Compatibility;
using Newtonsoft.Json;
using static Microsoft.Maui.ApplicationModel.Permissions;


namespace Ab24HybridBalzorApplication
{
    public partial class MainPage : ContentPage
    {
        static readonly HttpClient client = new HttpClient();
        public MainPage() 
        {
            InitializeComponent();
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

                               // await myHybridWebView.InvokeJsMethodAsync("callBackFilePicked", base64);
                            }

                        });
                    }
                }
            }
            else if (json["Type"] == "Share" || json["Type"] == "Print" || json["Type"] == "Launch")
            {
                string Title = json["Title"];
                string Text = json["Text"];
                string SubType = json["SubType"];
                string Filename = json["Filename"];
                string FileData = json["Content"];
                string localFilePath = Path.Combine(FileSystem.CacheDirectory, Filename);
                if (SubType != null && SubType != string.Empty && SubType == "Data")
                {
                    System.Byte[] byteArray = System.Convert.FromBase64String(FileData);

                    await MainThread.InvokeOnMainThreadAsync(async () =>
                    {


                        if (json["Type"] == "Share" || json["Type"] == "Launch" || json["Type"] == "Print")
                        {
                            using (var fs = new FileStream(
                           localFilePath,
                           FileMode.CreateNew))
                            {
                                fs.Write(byteArray);
                            }
                            if (json["Type"] == "Share")
                            {
                                await Share.Default.RequestAsync(new ShareFileRequest
                                {
                                    Title = Title,
                                    File = new ShareFile(localFilePath)
                                });
                            }
                            else
                            {
                                await Launcher.Default.OpenAsync(new OpenFileRequest(Filename, new ReadOnlyFile(localFilePath)));

                            }
                        }
                        //else if (json["Type"] == "Print")
                        //{

                        //    MemoryStream stream = new MemoryStream();
                        //    stream.Write(byteArray, 0, byteArray.Length);
                        //    await PrintStream(stream);
                        //}
                    });
                }
                else if (SubType != null && SubType != string.Empty && SubType == "URL")
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
                        else if (json["Type"] == "Print" || json["Type"] == "Launch")
                        {
                            var response = await client.GetAsync(FileData);
                            //using (var fs = new FileStream(
                            //    localFilePath,
                            //    FileMode.CreateNew))
                            //{
                            //    await response.Content.CopyToAsync(fs);
                            //    if (json["Type"] == "Print")
                            //    {
                            //        await PrintStream(fs);
                            //    }
                            //}
                            //if (json["Type"] == "Launch")
                            {
                                await Launcher.Default.OpenAsync(new OpenFileRequest(Filename, new ReadOnlyFile(localFilePath)));
                            }

                        }
                    });
                }
                else if (SubType != null && SubType != string.Empty && SubType == "Text")
                {
                    await MainThread.InvokeOnMainThreadAsync(async () =>
                    {
                        await Share.Default.RequestAsync(new ShareTextRequest
                        {
                            Text = string.Empty,
                            Title = Title
                        });
                    });
                }
            }
            else if (json["Type"] == "Browser")
            {
                Uri uri = new Uri(json["Url"]);
                await MainThread.InvokeOnMainThreadAsync(async () =>
                {
                    await Browser.Default.OpenAsync(uri, BrowserLaunchMode.SystemPreferred);
                });
            }
            else if (json["Type"] == "WhatsAppShare")
            {
                await MainThread.InvokeOnMainThreadAsync(async () =>
                {
                    bool supportsUri = await Launcher.Default.CanOpenAsync("whatsapp://");
                    if (supportsUri)
                        await Launcher.Default.OpenAsync("whatsapp://send?phone=+" + json["Number"] + "&text=" + json["Message"]);

                    else
                        await App.Current.MainPage.DisplayAlert("Error", "Unable to open WhatsApp.", "OK");
                });

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
