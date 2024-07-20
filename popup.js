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
    let button = document.getElementById('button');

    if (aliasInput && nameDisplay) {
        aliasInput.addEventListener('keyup', () => {
            nameDisplay.innerHTML = aliasInput.value;
        });
    }

    if (button) {
        // Save the username to chrome storage when the button is clicked
        button.addEventListener("click", () => {
            let username = aliasInput.value;
            chrome.storage.sync.set({'username': username}); // We have to send value in json format or as a key-value pair
        })
    }
});
