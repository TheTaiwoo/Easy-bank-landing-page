const btn = document.querySelector(".container .nav-bar .wrapper .flex .nav-hamburger");
const navbar = document.querySelector(".container .nav-bar .wrapper .flex .navigation");

btn.addEventListener('click',()=>{
    btn.classList.toggle('open');
    navbar.classList.toggle('open');
    document.querySelector(".container").classList.toggle('open');
})