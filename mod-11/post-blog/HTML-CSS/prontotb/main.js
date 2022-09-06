let btnM = document.querySelector("#btn-M");
let ulLincks = document.querySelector(".lincks");
btnM.onclick = () => {
    btnM.classList.toggle('fa-times');
    ulLincks.classList.toggle('active');
}