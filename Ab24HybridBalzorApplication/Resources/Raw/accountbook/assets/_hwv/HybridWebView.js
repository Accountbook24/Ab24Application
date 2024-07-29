// HybridWebView.js

// Example function to communicate with the native app
function postMessage(message) {
    if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(message);
    } else {
        console.log('ReactNativeWebView is not defined');
    }
}

// Example function to handle messages from the native app
window.onMessage = function(callback) {
    if (window.ReactNativeWebView) {
        document.addEventListener('message', function(event) {
            callback(event.data);
        });
    } else {
        console.log('ReactNativeWebView is not defined');
    }
}
