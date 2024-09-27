const nav= document.querySelector("nav");
const menuIcon= document.querySelector("menu-icon");

window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 60) {
        nav.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled");
    }
});

