const content = document.getElementById("content");
const subject = document.getElementById("subject");
const lname = document.getElementById("lname");
const fname = document.getElementById("fname");
const ctrl = document.querySelectorAll(".cbuttons");

async function submit(formObj){
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
    if(alertText != ""){
        console.log("submitting form");
        let data = formObj;
        const response = await fetch("/contactForm", {
            method: "POST",
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        await response.json().then(obj => {
            data = obj;
        });
        console.log(data);
    }else{
        alert(alertText);
        return;
    }
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
