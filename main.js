let button = document.querySelector(".complainBtn");
let tram = document.querySelector(".tram");

button.addEventListener('click', (e) => {

    tram.classList.toggle("glide");
    tram.style.display = "block";

})