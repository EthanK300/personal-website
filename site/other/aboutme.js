$(document).ready(async function () {
    console.log("acquiring data");
    const response = await fetch("/status", {
        method: "GET",
    });
    let data;
    await response.json().then(obj => {
        data = obj;
    })
    const status = data.body.paragraph.rich_text[0].plain_text.slice(14, 17);
    console.log(status);
    //the data is the content of the message (res.send content) in JSON format
    $("#daystatus").html("My week is going " + status + "% well. How about yours?");
});