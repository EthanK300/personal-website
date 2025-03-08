const content = document.getElementById("content");
const subject = document.getElementById("subject");
const lname = document.getElementById("lname");
const fname = document.getElementById("fname");
const ctrl = document.querySelectorAll(".cbuttons");

content.addEventListener("focus", (event) => {
    if (content.value == "Enter your message") {
        content.value = "";
    }
});

content.addEventListener("blur", (event) => {
    if (content.value == "") {
        content.value = "Enter your message";
    }
});

subject.addEventListener("focus", (event) => {
    if (subject.value == "eg. Work") {
        subject.value = "";
    }
});

subject.addEventListener("blur", (event) => {
    if (subject.value == "") {
        subject.value = "eg. Work";
    }
});

lname.addEventListener("focus", (event) => {
    if (lname.value == "eg. Doe") {
        lname.value = "";
    }
});

lname.addEventListener("blur", (event) => {
    if (lname.value == "") {
        lname.value = "eg. Doe";
    }
});

fname.addEventListener("focus", (event) => {
    if (fname.value == "eg. John") {
        fname.value = "";
    }
});

fname.addEventListener("blur", (event) => {
    if (fname.value == "") {
        fname.value = "eg. John";
    }
});

ctrl.forEach((a) => {
    a.addEventListener("mouseenter", (event) => {
        a.style.backgroundColor = "white";
        a.style.color = "black";
    });

    a.addEventListener("mouseleave", (event) => {
        a.style.backgroundColor = "black";
        a.style.color = "white";
    });
});
