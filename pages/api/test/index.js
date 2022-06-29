// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { openSync, readFileSync, writeFileSync } from 'node:fs';

// const path = require('path')
// const fs = require('fs')

export default async function handler(req, res) {
    const database = [
        {
            _id: 5435,
            userID: '54fsdlj53',
            post_id: '1',
            post_title: 'Song Meshup',
            thumbnail: 'https://api.lorem.space/image/shoes?w=400&h=225',
            image: '',
            time: 'dec 15, 2021',
            short_description: 'গিয়েছিলাম খিচুড়ি নিয়ে, সবাই আনন্দ করে খাইলো কিন্তু ৫০ টির মতো হিন্দু ধর্মাবলম্বী পরিবার খিচুড়ি গ্রহন কর         রেনি। কারণ তাদের ধর্মের বিধানানুযায়ী আজকের জন্য তা গ্রহন করতে নিষেধ করা হয়েছে। তাই তড়িঘড়ি করে এ ৫০ টি পরিবারের জন্য ফল-ফ্রুটসের        ব্যবস্থা করলাম।  আহা তাদের খুশি কে দেখে! কিছু কিছু সময় নিজেকে বিলিয়ে দিতে ইচ্ছে করে।',
            category: {
                name: 'Vegetables',
                tags: ['html'],
            },
            postBody: '<iframe  height="315" src="https://www.youtube.com/embed/ANSWToElgjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n',
            sort: '5345345345',
            postRefMode: 'video'
        },

        {
            _id: 55635435,
            userID: '54fsdlj53',
            post_id: '2',
            post_title: 'StackOverFlow',
            thumbnail: 'https://api.lorem.space/image/shoes?w=400&h=225',
            image: '',
            time: 'dec 15, 2021',
            short_description: 'গিয়েছিলাম খিচুড়ি নিয়ে, সবাই আনন্দ করে খাইলো কিন্তু ৫০ টির মতো হিন্দু ধর্মাবলম্বী পরিবার খিচুড়ি গ্রহন কর         রেনি। কারণ তাদের ধর্মের বিধানানুযায়ী আজকের জন্য তা গ্রহন করতে নিষেধ করা হয়েছে। তাই তড়িঘড়ি করে এ ৫০ টি পরিবারের জন্য ফল-ফ্রুটসের        ব্যবস্থা করলাম।  আহা তাদের খুশি কে দেখে! কিছু কিছু সময় নিজেকে বিলিয়ে দিতে ইচ্ছে করে।',

            postBody: "So, as has been mentioned, that really isn't possible. However, there are some ways you can still be smart about it.\n" +
                '\n' +
                'Three of the five major browsers all allow you to see the zoom level of the browser, furthermore, should the browser be zoomed a window.onresize event is fired.\n' +
                '\n' +
                'IE:      event.view.devicePixelRatio           OR window.view.devicePixelRatio\n' +
                'Chrome:  event.currentTarget.devicePixelRatio  OR window.devicePixelRatio\n' +
                'Firefox: event.originalTarget.devicePixelRatio OR window.devicePixelRatio\n' +
                'Safari:  /* Not possible */\n' +
                'Opera:   /* Not possible */\n' +
                "I think the stuff after OR works based on something I noticed as I was messing around. The first ones I know work in at least the latest version of each one. Note that Safari and Opera both have the devicePixelRatio, however both never change. It's always just 1.\n" +
                '\n' +
                "The above is your easy way if you don't care that much. If you do, then you could try out the detect-zoom script, which I came across while looking for solutions to Safari and Opera.\n" +
                '\n' +
                "So what you can now do is get the zoom level, and then offset your zoom to where it doesn't do anything. So if I force my browser to 50% zoom, you just go to 200%. Thus, no change. Of course it will be a bit more complicated, you'll have to store the last browser zoom, the new browser zoom, and do some slightly more complicated math, but based on what you already have, that should be a breeze.\n" +
                '\n' +
                'Another idea might be to just listen for a resize event, and calculate based off the new visible size, but that might cause issues if the window is just resized. I think the above is going to be your best option, with perhaps a fallback alert to warn the user not to zoom if necessary.',
            sort: '5345345345',

            category: {
                name: 'Vegetables',
                tags: ['html'],
            },
            postRefMode: 'video'
        },



    ]

    // const file = readFileSync('post.json');

    // const data = JSON.parse(file);
    const method = req.method;
    const { cat } = req.query
    // console.log(cat)
    // if (method === "POST") {
    //     if (data.length === 0) {
    //         data[0] = req.body;
    //     }
    //     else {
    //         data[data.length] = req.body
    //     }
    //     fs.writeFile("post.json", JSON.stringify(data),
    //         {
    //             encoding: "utf8",
    //             flag: "w+",`
    //             mode: 0o666
    //         },
    //         (err, data) => {
    //             if (err)
    //                 console.log(err);
    //             else {
    //                 console.log(data)
    //                 console.log("File written successfully\n");
    //                 console.log("The written has the following contents:");
    //                 // console.log(fs.readFileSync("database/rakib.json", "utf8"));
    //             }
    //         });
    //     res.send({ m: 'success' })
    // }
    // else 
    console.log(Boolean(cat))

    if (method === 'GET') {
        if (cat === 'undefined' || !cat) {
            res.send(database)
        }
        else {
            const getPost = database.filter(data => data.category === cat)
            res.send(getPost)
        }

        // console.log(database)
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
