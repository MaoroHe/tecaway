import { chatting } from "./chat/chat.js";
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    chatting();
});

document.querySelector("#inputChat").addEventListener("keyup", (f) => {
    if(f.key === "Enter"){
        chatting();
    }
})