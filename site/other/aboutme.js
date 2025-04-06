$(document).ready(async function () {
    console.log("acquiring data");
    const response = await fetch("/status", {
        method: "GET",
    });
    let data;
    await response.json().then(obj => {
        data = obj;
    })
    const status = data.body;
    //the data is the content of the message (res.send content) in JSON format
    $("#daystatus").html("My week is going " + status + "% well. How about yours?");
});