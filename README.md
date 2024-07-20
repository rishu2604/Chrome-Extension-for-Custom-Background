### `manifest.json`
- `manifest.json` is the most important file in our repository as we can read it as an entry point for the interpreation or understanding of our extension to the browser.\
- Now, let's add the key-value pairs into this JSON object

```json
{
    "manifest_version": 3, 
    "name": "Rishu's Extension", // name of the extension
    "version": 1.0,
    "description": "Tutorial extension",
    "icons": {
        "128": "./images/icon128.png", //128, 48 and 16 specifies the pixels here
        "48": "./images/icon48.png",
        "16": "./images/icon16.png"
    }, // these are the icons to be displayed on the extension bar
    "action": {
        "default_popup": "popup.html", // it is the page which will be popping up when you will click on the icon
        "default_icon": "./images/icon16.png",
        "default_title": "Rishu's Extension" // it will be show when you will hover over the icon
    }, // These are some default browser actions
    "permissions": [
        "tabs" // This basically means, I need this extension to be visible or displayed on every tab
    ] // It is an array
}
```


