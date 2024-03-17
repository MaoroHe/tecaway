let button = document.querySelector(".complainBtn");
let tram = document.querySelector(".tram");

button.addEventListener('click', (e) => {

    tram.style.display = "block";

    setTimeout(disappearMap, 1000);

    function disappearMap(){
        let map = document.querySelector("body");
        map.classList.toggle("prestidigitation");
        
        setTimeout(blank, 2000);

        function blank(){
            map.classList.toggle("prestige");
        }
    }

    setTimeout(delText, 2700);
    
    function delText(){
        let home = document.querySelector(".home");
        home.style.display = "none";

        setTimeout(launchChat, 800);

        function launchChat(){
            window.location.replace("chat.html");
        }
    }
});