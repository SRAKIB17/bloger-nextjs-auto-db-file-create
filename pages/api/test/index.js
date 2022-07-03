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
            post_title: 'gdfgfdg Meshup',
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
            postRefMode: 'text'
        },

        {
            _id: 55635435,
            userID: '54fsdlj53',
            post_id: '24',
            post_title: 'StackOverFlow',
            thumbnail: 'https://api.lorem.space/image/shoes?w=400&h=225',
            image: '',
            time: 'dec 15, 2021',
            short_description: 'গিয়েছিলাম খিচুড়ি নিয়ে, সবাই আনন্দ করে খাইলো কিন্তু ৫০ টির মতো হিন্দু ধর্মাবলম্বী পরিবার খিচুড়ি গ্রহন কর         রেনি। কারণ তাদের ধর্মের বিধানানুযায়ী আজকের জন্য তা গ্রহন করতে নিষেধ করা হয়েছে। তাই তড়িঘড়ি করে এ ৫০ টি পরিবারের জন্য ফল-ফ্রুটসের        ব্যবস্থা করলাম।  আহা তাদের খুশি কে দেখে! কিছু কিছু সময় নিজেকে বিলিয়ে দিতে ইচ্ছে করে।',

            postBody: '',
            sort: '5345345345',

            category: {
                name: 'Vegetables',
                tags: ['html'],
            },
            postRefMode: 'text'
        },
        {
            _id: 55635435,
            userID: '54fsdlj53',
            post_id: '25434',
            post_title: 'StackOverFlow',
            thumbnail: 'https://api.lorem.space/image/shoes?w=400&h=225',
            image: '',
            time: 'dec 15, 2021',
            short_description: 'গিয়েছিলাম খিচুড়ি নিয়ে, সবাই আনন্দ করে খাইলো কিন্তু ৫০ টির মতো হিন্দু ধর্মাবলম্বী পরিবার খিচুড়ি গ্রহন কর         রেনি। কারণ তাদের ধর্মের বিধানানুযায়ী আজকের জন্য তা গ্রহন করতে নিষেধ করা হয়েছে। তাই তড়িঘড়ি করে এ ৫০ টি পরিবারের জন্য ফল-ফ্রুটসের        ব্যবস্থা করলাম।  আহা তাদের খুশি কে দেখে! কিছু কিছু সময় নিজেকে বিলিয়ে দিতে ইচ্ছে করে।',

            postBody: '',
            sort: '5345345345',

            category: {
                name: 'Vegetables',
                tags: ['html'],
            },
            postRefMode: 'text'
        },
        {
            _id: 55635435,
            userID: '54fsdlj53',
            post_id: '255643543434',
            post_title: 'StackOverFlow',
            thumbnail: 'https://api.lorem.space/image/shoes?w=400&h=225',
            image: '',
            time: 'dec 15, 2021',
            short_description: 'গিয়েছিলাম খিচুড়ি নিয়ে, সবাই আনন্দ করে খাইলো কিন্তু ৫০ টির মতো হিন্দু ধর্মাবলম্বী পরিবার খিচুড়ি গ্রহন কর         রেনি। কারণ তাদের ধর্মের বিধানানুযায়ী আজকের জন্য তা গ্রহন করতে নিষেধ করা হয়েছে। তাই তড়িঘড়ি করে এ ৫০ টি পরিবারের জন্য ফল-ফ্রুটসের        ব্যবস্থা করলাম।  আহা তাদের খুশি কে দেখে! কিছু কিছু সময় নিজেকে বিলিয়ে দিতে ইচ্ছে করে।',

            postBody: `
            <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body data-scroll="[gold,red,40]">
    <div data-scroll="[red,white,4]">
        <div ></div>
        <p style="padding:30px;margin:20px">
        culpa animi optio saepe at voluptates repellendus consectetur eos ex? Consequatur illum corrupti alias
        magnam magni atque?
        Sequi rem repudiandae doloremque molestiae aperiam aut atque consequatur cumque iure magnam voluptates
        officiis architecto ipsa tenetur labore nam id, quaerat deserunt obcaecati minus non earum? Molestiae
        similique dicta sequi.
        Culpa, laborum ipsum accusamus magnam id officiis accusantium labore pariatur nemo voluptates animi sunt
        autem quo non sapiente molestias quis reprehenderit qui consequuntur esse, ratione possimus quisquam
        veritatis? Voluptates, odio.
        Repudiandae nisi veniam iure cumque, reprehenderit voluptates ut nemo nostrum id porro totam numquam facilis
        voluptatibus neque tenetur soluta libero impedit perferendis architecto laboriosam nam cum doloribus!
        Incidunt, exercitationem laudantium?
        Voluptate repellat sint, saepe vitae aliquid exercitationem quo deleniti quaerat repellendus ea commodi
        voluptas delectus ipsum unde accusantium corrupti itaque, cupiditate adipisci distinctio ipsam, velit
        dignissimos sunt? Delectus, pariatur eligendi.
        Quam, dolor! Nihil, sapiente exercitationem magnam sunt voluptas ullam eius, minima delectus laboriosam iste
        impedit aspernatur, dignissimos molestiae maxime necessitatibus dolores ducimus cumque? Iusto expedita
        sequi, itaque magnam nihil iure.
        Dolorum exercitationem dolores voluptates quia omnis sapiente, tempora ipsam maiores, vitae reprehenderit
        consectetur sequi blanditiis nam ab temporibus eius quidem ipsa et! Rem dolore doloremque nobis pariatur
        nemo exercitationem ullam?
        Enim, doloremque eum adipisci, fuga ratione dolor a aspernatur blanditiis provident voluptatum soluta! Porro
        suscipit rerum quibusdam, numquam praesentium perferendis voluptatum, voluptatem officia dolor dolorum
        maiores nulla, voluptatibus alias unde!
        Eum consequatur unde consequuntur ipsam quasi voluptatibus molestiae dolorum eveniet, fugit similique quis
        quas vitae libero praesentium laborum accusantium inventore ut velit sapiente. Consequuntur reprehenderit
        earum quidem eaque adipisci nulla.
        Similique quae error aperiam repellat quis officia, ipsam aspernatur et doloribus itaque commodi recusandae!
        Rerum molestias, reprehenderit pariatur adipisci ex, iure neque quidem, sequi sit minus quam laudantium illo
        maxime!
        Esse ex sapiente magnam pariatur voluptates perspiciatis, unde debitis. Ipsum maxime animi neque praesentium
        minima exercitationem. Laudantium, magnam pariatur, officiis atque quia voluptatibus amet nesciunt nostrum
        quam totam neque eos?
        Sint labore temporibus voluptas vero! Nulla repellat unde voluptate magni, quis sed, voluptates
        exercitationem, repellendus accusantium delectus libero tempore quaerat nesciunt hic. Illo porro excepturi,
        iste dolore laboriosam placeat rem!
        Quas aspernatur exercitationem voluptatum doloremque voluptas beatae accusamus, praesentium adipisci eveniet
        aliquid possimus et sint earum cupiditate? Consectetur optio quaerat vero cum a eius consequatur dignissimos
        nisi. Impedit, numquam sapiente!
        Ipsum doloremque quo officia excepturi nisi minima consectetur quia voluptas incidunt, distinctio, saepe
        velit non adipisci quae eveniet unde, rerum laudantium eum. Voluptates, aspernatur voluptas. Natus
        perspiciatis deserunt ex accusantium?
        Cupiditate at possimus inventore tempore. Eligendi iusto incidunt doloremque. Sed earum quia natus nobis
        recusandae commodi numquam delectus unde. Accusamus quisquam quaerat libero unde, maiores aut sapiente
        exercitationem ratione dolorum.
        Porro, non facilis. Voluptatem quia ab distinctio repudiandae sit porro quod odio quo. Impedit ipsa maiores
        voluptatibus pariatur culpa corrupti quis saepe dolorem sapiente quod, quibusdam ea nisi soluta delectus.
        Dolorum doloribus atque, aut cupiditate assumenda explicabo suscipit neque veniam voluptates alias ad rem
        minima in numquam expedita et sit? Repellendus quod nisi quia quas impedit voluptatum numquam! Consectetur,
        minus!
        Blanditiis facere itaque necessitatibus tempore asperiores eveniet officia reprehenderit adipisci aut rerum
        quasi expedita voluptate velit quae voluptatum possimus quo, molestias maiores iure. Vero accusantium atque
        est. Perspiciatis, suscipit dicta!
        Corporis quo molestias quibusdam autem nesciunt nemo ut neque sint, dicta impedit. Illum, accusantium!
        Autem, aliquam iusto maxime repellat eaque ducimus magnam quae, nesciunt aliquid delectus rem voluptate hic
        alias.
        Iure voluptate vel quibusdam incidunt omnis expedita iusto eum molestias atque quisquam deleniti aspernatur
        alias voluptatibus ex, explicabo exercitationem ipsam! Expedita quis cumque obcaecati explicabo voluptates
        perferendis eligendi optio velit.
        Porro minus blanditiis, fugiat, sapiente quisquam eveniet magnam ipsa culpa doloremque ut incidunt
        reiciendis accusamus asperiores at est nihil dolorum? Ea officiis amet et nemo nobis magni officia iusto
        enim.
        Quas, molestiae aspernatur excepturi sit neque dicta corporis eius et quae consectetur molestias, deleniti
        autem repellendus officiis natus fugit minus impedit aliquam maxime dolorum nobis. Distinctio doloremque
        officia soluta corporis!
        Eligendi delectus reprehenderit, neque nobis repellendus, quam eum adipisci fugiat tenetur expedita
        molestias architecto error saepe fuga vitae illum soluta. Officia dolorum deleniti nesciunt labore
        distinctio rem consequuntur similique adipisci!
        Soluta quas minima consequatur. Reprehenderit sint, error, inventore voluptate amet beatae illo eum delectus
        illum eius veniam fugiat laboriosam eveniet qui? Quia dolorem modi doloremque. Id pariatur non totam quos.
        Voluptatem, in harum dignissimos sit totam saepe odit unde vitae beatae voluptatum omnis laborum quos
        dolorum, esse animi iusto? Nostrum alias placeat nisi numquam, maxime dolorem recusandae libero quam
        deserunt!
        Nesciunt deleniti inventore dolor eveniet saepe, exercitationem voluptates mollitia excepturi quas. Ullam
        iste eum, nesciunt distinctio recusandae minus. Ipsa ipsam unde voluptatum voluptas aspernatur deleniti rem
        quod tenetur dolor eos.
        Assumenda consequatur, ab, quae ex quasi, cum nesciunt odit odio quis quaerat corrupti. Veritatis porro quo
        sapiente laborum! Earum ullam in officia minima adipisci laboriosam et. Illum cum consectetur possimus.
        Nulla nostrum libero numquam distinctio animi, sint fugiat, vel, dolorum cupiditate voluptate commodi
        molestias iure sit. Sapiente, laborum! Unde, distinctio et natus architecto exercitationem explicabo quas
        quibusdam facere deserunt quod.
        Totam cumque ea tempora, aut obcaecati saepe consequuntur delectus vel, animi, laborum quisquam voluptate
        recusandae ad quasi eaque ipsa aspernatur. A adipisci aliquam nisi vel libero nobis quod, temporibus
        tempora?
        Eum porro id, iusto, vero, laboriosam aliquam blanditiis aut officia quam quibusdam rerum ex minima aperiam
        ratione. Eius, a laboriosam alias sed iusto reiciendis et reprehenderit nisi iure omnis perspiciatis!
        Deserunt atque quidem blanditiis deleniti nemo dignissimos! Rem ratione in nam possimus consectetur
        consequuntur exercitationem quia repellendus modi provident, deserunt quo aut tempore commodi harum
        repudiandae illo reprehenderit ducimus cumque?
        Dolor repudiandae laborum beatae cumque animi nisi earum eligendi. Dolor atque impedit reprehenderit
        suscipit repellendus cum incidunt, quia iusto laboriosam quae corrupti quisquam vero odio ut doloribus autem
        consectetur similique?
        Commodi nihil pers
        mollitia.
        </p>
    </div>
    <script>
    window.onscroll = () => {
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const getTotalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
        const widthParentage = (windowScroll * 100) / getTotalHeight;
    
        const getChild = document.getElementById('topScrollView');
    
        let height = 5;
        let color = 'red';
        let defaultBgColor = ''
        console.log(document.documentElement.scrollHeight,getTotalHeight)
        console.log(document.documentElement.clientHeight)
    
        const divScroll = document.getElementsByTagName('div');
        for (const div of divScroll) {
            const scroll = div.getAttribute('data-scroll') || document.body.getAttribute('data-scroll');
            if (scroll) {
                const scrArr = scroll.slice(1, scroll.length - 1).split(',');
                color = scrArr[0] != 0 ? scrArr[0] : color;
                defaultBgColor = scrArr[1] != 0 ? scrArr[1] : defaultBgColor;
                height = scrArr[2] != 0 ? scrArr[2] : height;
            }
        }
    
    
    
        if (getChild) {
            const getParent = document.getElementById('topScrollViewParent');
            getParent.style.position = 'fixed';
            getParent.style.top = 0;
            getParent.style.left = 0;
            getParent.style.backgroundColor = defaultBgColor;
            getParent.style.width = '100%'
            getParent.style.height = height + 'px'
    
            getChild.style.width = widthParentage + '%';
            getChild.style.height = height + 'px'
            getChild.style.backgroundColor = color;
    
        }
        else {
            const divChild = document.createElement('div');
            divChild.id = 'topScrollView'
            const divParent = document.createElement('div');
            divParent.id = 'topScrollViewParent'
    
            divParent.appendChild(divChild)
            document.body.appendChild(divParent)
        }
    }
    </script>


</body>

</html>
            `,
            sort: '5345345345',

            category: {
                name: 'Vegetables',
                tags: ['html'],
            },
            postRefMode: 'text'
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
