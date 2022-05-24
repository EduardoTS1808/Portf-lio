let menu = document.querySelector("#btn");
let ulLinks = document.querySelector("#links");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    ulLinks.classList.toggle('active');
}