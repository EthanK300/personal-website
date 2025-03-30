$(document).ready(async function () {
    console.log("acquiring data");
    const response = await fetch("/status", {
        method: "GET",
    });
    let data;
    await response.json().then(obj => {
        data = obj;
    })
    console.log(data);
    //the data is the content of the message (res.send content) in JSON format

});