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

document.querySelector("#inputChat").addEventListener("keyup", (f) => {
    if(f.key === "a"){
        document.querySelector("#inputChat").value="Quels sont les horaires de la ligne 123 ?";
    }
})

document.querySelector("#inputChat").addEventListener("keyup", (f) => {
    if(f.key === "z"){
        document.querySelector("#inputChat").value="J'aimerais me rendre à dampremy vers 17h15";
    }
})

document.querySelector("#inputChat").addEventListener("keyup", (f) => {
    if(f.key === "e"){
        document.querySelector("#inputChat").value="J'ai un souci récurrent, ça fait plusieurs semaines qu'il y a des travaux sur la ligne 456";
    }
})