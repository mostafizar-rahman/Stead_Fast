const menuIcon = document.querySelector(".menu_icon")
const mobileMenu = document.querySelector(".mobile_menu")
menuIcon.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("active")
})