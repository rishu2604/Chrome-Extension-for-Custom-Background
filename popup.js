document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the username from chrome storage and display it
    chrome.storage.sync.get('username', function(greetings){
        if(greetings.username){
            let name = document.getElementById('name');
            name.innerHTML = greetings.username;
        }
    })

    let aliasInput = document.getElementById('alias');
    let nameDisplay = document.getElementById('name');
    let addNameButton = document.getElementById('addNameButton');
    let imageUrl = document.getElementById('imgLink');
    let changeBgButton = document.getElementById('changeBgButton');

    if (aliasInput && nameDisplay) {
        aliasInput.addEventListener('keyup', () => {
            nameDisplay.innerHTML = aliasInput.value;
        });
    }

    if (addNameButton) {
        // Save the username to chrome storage when the button is clicked
        addNameButton.addEventListener("click", () => {
            let username = aliasInput.value;
            chrome.storage.sync.set({'username': username}); // We have to send value in json format or as a key-value pair
        })
    }

    if(changeBgButton){
        changeBgButton.addEventListener('click', () => {
            let imageLink = imageUrl.value;
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, {todo: "changeBg", imageLink: imageLink});
            })
        })
    }

});
