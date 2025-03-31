const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_KEY });

app.use(express.static("site"));
app.use(express.json());

const PORT = process.env.PORT;
const IP = process.env.IP;

const listener = app.listen(PORT, IP, () => {
    console.log(`server running on port ${PORT} on ip ${IP}`);
});

app.get("/status", async function(req, res) {
    console.log("notion reflection page data:");
    const blockId = process.env.NOTION_REFLECT_ID;
    const response = await notion.blocks.children.list({
        block_id: blockId,
        page_size: 50,
    });
    //each block right now is 14 size
    const blockSize = 15;
    const numToTop = 3;
    const data = 0;

    const response2 = await notion.blocks.retrieve({
        block_id:response.results[numToTop + 12].id,
    });

    console.log("AA");
    console.log(response2);
    console.log("AA");

    for(let i = numToTop; i < response.results.length; i+=blockSize){
        console.log(response.results[i].type);
    }
    res.status(200).send({
        success:true,
        message:"ok",
        body:response2,
    });
});