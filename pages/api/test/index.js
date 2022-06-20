// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { openSync, readFileSync, writeFileSync } from 'node:fs';

const path = require('path')
const fs = require('fs')

export default async function handler(req, res) {
    // const file = readFileSync('post.json');

    // // const data = JSON.parse(file);
    // // console.log( req.body)
    // // data[data?.length] = { 'post': new Date() }
    // // const dd = fs.mkdirSync('database/rakibulssc5@gamail.com')
    // // console.log(dd)
    // const fss = fs.openSync('postjslfjs.json','w+')

    if (req.method === "POST") {
        const save = writeFileSync('post.json', JSON.stringify(req.body), {
            encoding: "utf8",
            flag: "w+",
            mode: 0o666
        });
        res.send({ m: 'success' })
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
    // res.json((JSON.parse(file)))

}
