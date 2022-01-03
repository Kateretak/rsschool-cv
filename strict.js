'use strict';

function displayMenu(event) {
    if (document.getElementById("navbarList").classList.contains("show")) {
        document.getElementById("navbarList").classList.remove("show")
    } else {
        document.getElementById("navbarList").classList.add("show")
    }
    if (document.getElementById("page").classList.contains("nav-active")) {
        document.getElementById("page").classList.remove("nav-active")
    } else {
        document.getElementById("page").classList.add("nav-active")
    }
}

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
}
