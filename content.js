chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.storage.sync.get('imageLink', function(customBackground){
    if(customBackground.imageLink){
        let body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = `url(${customBackground.imageLink})`;
        body.style.backgroundSize = "cover";
        body.style.backgroundAttachment = "fixed";
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.todo === "changeBg"){
        let imageUrl = request.imageLink;

        chrome.storage.sync.set({'imageLink': imageUrl}, function(){
            let body = document.getElementsByTagName('body')[0];
            body.style.backgroundImage = `url(${imageUrl})`;
            body.style.backgroundSize = "cover";
            body.style.backgroundAttachment = "fixed";
        })
    }
})