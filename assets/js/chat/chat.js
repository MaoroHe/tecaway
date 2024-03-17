let randomIndex = (max) => {
    return Math.floor(Math.random() * max);
};

let DisplayChat = (data, txt) => {
    let chatDiv = document.createElement('div');
    let main = document.getElementById('mainChat');
    chatDiv.className = 'chatAi';
    let state = '';

    if (txt.includes('retard')) {
        state = 'retard';
    } else if (txt.includes('encombrement')) {
        state = 'encombrement';
    }

    console.log(state)

    switch (state) {
        case 'retard':
            chatDiv.innerHTML = data[state][randomIndex(5)]['justification'];
            break;
        case 'encombrement':
            chatDiv.innerHTML = data[state][randomIndex(4)]['justification'];
            break;
        default:
            chatDiv.innerHTML = 'ok';
    }

    main.appendChild(chatDiv);
}

export let chatting = () => {
    let chat = document.getElementById('inputChat');
    console.log('sended!');

        // Display the request message

        const inputQuestion = document.getElementById('inputChat').value;
        const chatDiv = document.createElement('div');
        chatDiv.className = 'chatUser';
        chatDiv.innerHTML = inputQuestion;
        const main = document.getElementById('mainChat');
        main.appendChild(chatDiv);

    // Fetch the chat message

    fetch('./assets/js/chat/plainte-excuse.json')
        .then(response => response.json())
        .then(data => {
            // Process the chat message data

            console.log(data);

            // Display the chat message

            setTimeout(DisplayChat, 1500, data, inputQuestion);
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });
    chat.value = '';
}