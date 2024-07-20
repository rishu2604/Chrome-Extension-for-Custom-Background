chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.todo === "showPageAction"){
        // This means that if the current window and the active tab matches the given URL in the manifest.json, then go ahead and show that google chrome extension and enable it for this tab
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.action.show(tabs[0].id);
            // chrome.pageAction.show(tabs[0].id); 
            // Use this if you are working with manifest version 2 
        });
    }
});