const logo = document.getElementById("logo");
const contact = document.getElementById("contact");

logo.addEventListener("mouseenter", (event) => {
    logo.style.backgroundColor = "white";
    logo.style.color = "black";
});

logo.addEventListener("mouseleave", (event) => {
    logo.style.backgroundColor = "black";
    logo.style.color = "white";
});

contact.addEventListener("mouseenter", (event) => {
    contact.style.backgroundColor = "black";
    contact.style.color = "white";
    contact.style.border = "2px solid white"
});

contact.addEventListener("mouseleave", (event) => {
    contact.style.backgroundColor = "white";
    contact.style.color = "black";
    contact.style.border = "2px solid black"
});
