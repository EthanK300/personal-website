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
        page_size: 100,
    });
    const blockSize = 15;
    const distToFirst = 15;
    const data = 0;

    console.log("A");
    for(let i = 1; (i * blockSize) + distToFirst < 100; i++){
        console.log(distToFirst + (15 * i));
        console.log(i + ", " + response.results[distToFirst + (blockSize * i)].type);
        const response2 = await notion.blocks.retrieve({
            block_id:response.results[distToFirst + (blockSize * i)].id,
        });
        console.log(response2);
    }
    console.log("B");

    res.status(200).send({
        success:true,
        message:"ok",
        body:data,
    });
});