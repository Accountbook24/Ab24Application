using Android.App;
using Android.Content.PM;
using Android.OS;

namespace Ab24HybridBalzorApplication
{
    [Activity(Theme = "@style/Maui.SplashTheme", MainLauncher = true, ConfigurationChanges = ConfigChanges.ScreenSize | ConfigChanges.Orientation | ConfigChanges.UiMode | ConfigChanges.ScreenLayout | ConfigChanges.SmallestScreenSize | ConfigChanges.Density)]
    public class MainActivity : MauiAppCompatActivity
    {
        public override void OnBackPressed()
        {
            // Show an alert instead of going back
            RunOnUiThread(async () =>
            {
                var result = await DisplayAlert("Alert", "Do you really want to exit?", "Yes", "No");
                if (result)
                {
                    FinishAffinity();
                }
            });
        }

        private Task<bool> DisplayAlert(string title, string message, string accept, string cancel)
        {
            var tcs = new TaskCompletionSource<bool>();

            var alert = new AlertDialog.Builder(this);
            alert.SetTitle(title);
            alert.SetMessage(message);
            alert.SetPositiveButton(accept, (sender, args) => { tcs.SetResult(true); });
            alert.SetNegativeButton(cancel, (sender, args) => { tcs.SetResult(false); });

            alert.Create().Show();

            return tcs.Task;
        }
    }
}
