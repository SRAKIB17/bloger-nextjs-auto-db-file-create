// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { openSync, readFileSync, writeFileSync } from 'node:fs';

const path = require('path')
const fs = require('fs')

export default async function handler(req, res) {
    const file = readFileSync('post.json');

    const data = JSON.parse(file);
    const method = req.method;
    if (method === "POST") {
        if (data.length === 0) {
            data[0] = req.body;
        }
        else {
            data[data.length] = req.body
        }
        fs.writeFile("post.json", JSON.stringify(data),
            {
                encoding: "utf8",
                flag: "w+",
                mode: 0o666
            },
            (err, data) => {
                if (err)
                    console.log(err);
                else {
                    console.log(data)
                    console.log("File written successfully\n");
                    console.log("The written has the following contents:");
                    // console.log(fs.readFileSync("database/rakib.json", "utf8"));
                }
            });
        res.send({ m: 'success' })
    }
    else if(method === 'GET'){
        res.send(data)
        console.log(data)
    }
    // // console.log( req.body)
    // // data[data?.length] = { 'post': new Date() }
    // // const dd = fs.mkdirSync('database/rakibulssc5@gamail.com')
    // // console.log(dd)
    // const fss = fs.openSync('postjslfjs.json','w+')



    // const dir = fs.readdirSync('database');
    // dir?.forEach(d=>{
    //     fs.readFile('database/'+d,(err,data)=>{
    //         console.log(JSON.parse(data))
    //     })
    // })
    // res.writeHead(200, { 'Content-type': 'text/html' })
    // fs.readFile('test.html', function (err, data) {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     return res.end();
    // });
    // res.json(file)

}
