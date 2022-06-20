// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readFileSync, writeFileSync } from 'node:fs';
import {
    open,
} from 'node:fs/promises';
const path = require('path')

export default async function handler(req, res) {
    const file = readFileSync('post.json');

    // const data = JSON.parse(file);
    // console.log( req.body)
    // data[data?.length] = { 'post': new Date() }
    // const dd = fs.mkdirSync('database/rakibulssc5@gamail.com')
    // console.log(dd)

    if (req.method === "POST") {
        const save = writeFileSync('post.json', JSON.stringify(req.body));
    }
    // fs.writeFile("database/raki.json", JSON.stringify(data),
    //     {
    //         encoding: "utf8",
    //         flag: "w+",
    //         mode: 0o666
    //     },
    //     (err,data) => {
    //         if (err)
    //             console.log(err);
    //         else {
    //             console.log(data)
    //             console.log("File written successfully\n");
    //             console.log("The written has the following contents:");
    //             // console.log(fs.readFileSync("database/rakib.json", "utf8"));
    //         }
    //     });

    // const dir = fs.readdirSync('database');
    // dir?.forEach(d=>{
    //     fs.readFile('database/'+d,(err,data)=>{
    //         console.log(JSON.parse(data))
    //     })
    // })
    res.json((JSON.parse(file)))

}
