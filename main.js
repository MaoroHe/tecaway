let button = document.querySelector(".complainBtn");
let tram = document.querySelector(".tram");

button.addEventListener('click', (e) => {

    tram.style.display = "block";

    setTimeout(delText, 2700);
    
    function delText(){
        let home = document.querySelector(".home");
        home.style.display = "none";

        setTimeout(launchChat, 2000);

        function launchChat(){
            window.location.replace("chat.html");
        }
    }
});