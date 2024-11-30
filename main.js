document.addEventListener("DOMContentLoaded", () => {
    console.log("Website is fully loaded and operational.");
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburgericon i");

    if (menu && icon) {
        menu.classList.toggle("open");

        // Toggle between hamburger and close icons
        if (menu.classList.contains("open")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    } else {
        console.error("Menu or Icon element is missing!");
    }
}

function sendToWhatsapp() {
    let number = "+923456870976";

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    var url = "https://wa.me/" + number + "?text="
        + "Name :" + name + "%0a"
        + "Email :" + email + "%0a"
        + "Message :" + name + "%0a%0a";

    window.open(url, '_blank').focus();
}