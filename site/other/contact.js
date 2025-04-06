const content = document.getElementById("content");
const subject = document.getElementById("subject");
const lname = document.getElementById("lname");
const fname = document.getElementById("fname");
const ctrl = document.querySelectorAll(".cbuttons");

function validate(formObj){
    event.preventDefault();
    console.log("parsing form");
    let alertText = "";
    if(fname.value == "" || fname.value == "eg. John"){
        alertText += "First name must not be empty \n";
    }
    if(lname.value == "" || lname.value == "eg. Doe"){
        alertText += "Last name must not be empty \n";
    }
    if(subject.value == "" || subject.value == "eg. Work"){
        alertText += "Subject must not be empty \n";
    }
    if(content.value == "" || content.value == "Enter your message"){
        alertText += "Message content must not be empty";
    }
    if(alertText == ""){
        console.log("form validated");
        submit(formObj);
    }else{
        alert(alertText);
        return;
    }
}

async function submit(formObj){
    console.log("sending form");
    let data = JSON.stringify(Object.fromEntries(new FormData(formObj)));
    console.log(data);
    const response = await fetch("/contactForm", {
        method: "POST",
        headers: {
        'Content-Type': 'application/json'
        },
        body: data
    });
    await response.json().then(obj => {
        data = obj;
    });
    console.log(data);
}

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
