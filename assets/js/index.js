import { chatting } from "./chat/chat.js";
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    chatting();
});