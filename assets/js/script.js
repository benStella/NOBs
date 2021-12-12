const about = document.getElementById("About")
const menu = document.getElementById("Menu")
const locate = document.getElementById("Locate")
const contact = document.getElementById("Contact-us")
const footer = document.getElementById("Links")

const scrollRight = document.getElementById("scroll-right")
const scrollLeft =document.getElementById("scroll-left")
const aboutBtn = document.getElementById("about-a")
const menuBtn = document.getElementById("menu-a")
const locateBtn = document.getElementById("locate-a")
const contactBtn = document.getElementById("contact-us-a")

document.addEventListener('DOMContentLoaded', function() {
    about.style.display = "block"
    menu.style.display = "none"
    locate.style.display = "none"
    contact.style.display = "none"
})

aboutBtn.onclick = function() {
    about.style.display = "block"
    menu.style.display = "none"
    locate.style.display = "none"
    contact.style.display = "none"

    footer.setAttribute('style', 'display: flex; justify-content: center;')
}

menuBtn.onclick = function() {
    about.style.display = "none"
    menu.style.display = "block"
    locate.style.display = "none"
    contact.style.display = "none"
}

locateBtn.onclick = function() {
    about.style.display = "none"
    menu.style.display = "none"
    locate.style.display = "block"
    contact.style.display = "none"
}

contactBtn.onclick = function() {
    about.style.display = "none"
    menu.style.display = "none"
    locate.style.display = "none"
    contact.style.display = "block"
}

scrollRight.addEventListener("click", function() {
    scrollLeft.style.display = "block"
    scrollRight.style.display = "none"
    aboutBtn.style.display = "none"
    menuBtn.style.display = "none"
    locateBtn.style.display = "block"
    contactBtn.style.display = "block"
})

scrollLeft.addEventListener("click", function() {
    scrollLeft.style.display = "none"
    scrollRight.style.display = "block"
    aboutBtn.style.display = "block"
    menuBtn.style.display = "block"
    locateBtn.style.display = "none"
    contactBtn.style.display = "none"
})