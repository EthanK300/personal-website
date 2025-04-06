const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const app = express();
const fs = require("fs");
dotenv.config();

const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_KEY });

app.use(express.static("site"));
app.use(express.json());

const PORT = process.env.PORT;
const IP = process.env.IP;
const ACCEPT = process.env.ACCEPT;

const listener = app.listen(PORT, IP, () => {
    console.log(`server running on port ${PORT} on ip ${IP}`);
});

app.get("/status", async function(req, res) {
    console.log("acquiring notion data");
    const blockId = process.env.NOTION_REFLECT_ID;
    const response = await notion.blocks.children.list({
        block_id: blockId,
        page_size: 100,
    });

    const blockSize = 15;
    const distToFirst = 15;
    let data = 0;
    let times = 0;

    for(let i = 1; (i * blockSize) + distToFirst < 100; i++){
        times++;
        // console.log(distToFirst + (15 * i));
        // console.log(i + ", " + response.results[distToFirst + (blockSize * i)].type);
        //request notion api for each block
        const response2 = await notion.blocks.retrieve({
            block_id:response.results[distToFirst + (blockSize * i)].id,
        });
        // console.log(response2);
        data += Number(response2.paragraph.rich_text[0].plain_text.slice(15, 17));
    }

    data /= times;
    console.log("Sending average: " + data);

    res.status(200).send({
        success:true,
        message:"ok",
        body:data,
    });
});

app.post("/contactForm", async function(req, res) {
    let content = "";
    console.log("receiving contact form submission data");
    console.log(req.body);
    content = "New message from " + req.body.fname + ", " + req.body.lname + "\n\n" + "Subject: " + req.body.subject + "\n\n" + req.body.content + "\n\n"; 
    console.log(content);
    if(ACCEPT == "yes"){
        console.log("writing message to file");
        fs.writeFile('./tempFormSubmissions.txt', content, { flag: 'a+' }, err => {});
        res.status(200).send({
            success:true,
            message:"ok",
            body: "Message recieved.",
        });
    }else{
        console.log("message rejected");
        res.status(200).send({
            success:true,
            message:"ok",
            body: "Sorry, I'm not accepting messages right now!"
        });
    }

});