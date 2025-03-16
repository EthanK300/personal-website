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

const elementList = document.querySelectorAll(".card");
elementList.forEach((a) => {
    a.addEventListener("mouseenter", (event) => {
        mouseover(a);
    });
    a.addEventListener("mouseleave", (event) => {
        mouseleave(a);
    });
});

function mouseover(hoverObj) {
    const elements = document.querySelectorAll(".card");
    hoverObj.classList.add("hover-object");
    elements.forEach((b) => {
        if(hoverObj != b){
            b.classList.add("other-object");
        }
    });
}

function mouseleave(hoverObj) {
    hoverObj.classList.remove("hover-object");
    const elements = document.querySelectorAll(".card");
    elements.forEach((b) => {
        if(hoverObj != b){
            b.classList.remove("other-object");
        }
    });
}