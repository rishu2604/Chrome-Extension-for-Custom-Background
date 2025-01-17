### `manifest.json`
- `manifest.json` is the most important file in our repository as we can read it as an entry point for the interpreation or understanding of our extension to the browser.
- Now, let's add the key-value pairs into this JSON object

```json
{
    "manifest_version": 3, 
    "name": "Custom Background", // name of the extension
    "version": "0.1.0",
    "description": "Tutorial extension",
    "icons": {
        "128": "./images/icon128.png", //128, 48 and 16 specifies the pixels here
        "48": "./images/icon48.png",
        "16": "./images/icon16.png"
    }, // these are the icons to be displayed on the extension bar
    "action": {
        "default_popup": "popup.html", // it is the page which will be popping up when you will click on the icon
        "default_icon": "./images/icon16.png",
        "default_title": "Custom Background" // it will be show when you will hover over the icon
    }, // These are some default browser actions
    "background": {
        "service_worker": "background.js" // service_worker is supposed to run in the background
    },
    "content_scripts": [
        {
            "matches": [ "https://google.com/*" ],
            "js": [ "content.js" ]
        }
    ], // It is an array, it is like giving relevant JS and CSS files for fixed URLs.
    // This means that, this content.js is running only for the given URL i.e. google.com
    "permissions": [
        "tabs", // This basically means, I need this extension to be visible or displayed on every tab
        "storage" // This is the memory which is used or accessed by the chrome browser
    ] // It is an array
}
```
<br />
<br />

```json
{
    "manifest_version": 2, 
    "name": "Custom Background", // name of the extension
    "version": "0.1.0",
    "description": "Tutorial extension",
    "icons": {
        "128": "./images/icon128.png", //128, 48 and 16 specifies the pixels here
        "48": "./images/icon48.png",
        "16": "./images/icon16.png"
    }, // these are the icons to be displayed on the extension bar
    "browser_action": {
        "default_popup": "popup.html", // it is the page which will be popping up when you will click on the icon
        "default_icon": "./images/icon16.png",
        "default_title": "Custom Background" // it will be show when you will hover over the icon
    }, // These are some default browser actions
    "background": {
        "scripts": [
            "eventPage.js" // Scripts are supposed to run in the background
        ],
        "persistent": false // This means that I want this eventPage.js to run only once and not more than that.
    },
    "content-scripts": [
        {
            "matches": [ "https://google.com/*" ],
            "js": [ "content.js" ]
        }
    ], // It is an array, it is like giving relevant JS and CSS files for fixed URLs.
    "permissions": [
        "tabs", // This basically means, I need this extension to be visible or displayed on every tab
        "storage" // This is the memory which is used or accessed by the chrome browser
    ] // It is an array
}
```

