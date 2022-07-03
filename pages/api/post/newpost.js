// Next.js API route support: https://nextjs.org/docs/api-routes/introduction




export default function handler(req, res) {
    const dbUser = 'social-blogdb'
    const dbPass = 'JdYT4aERpw0oqpjc'
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = `mongodb+srv://social-blogdb:${dbPass}@cluster0.wad1r.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    const run = async () => {

        await client.connect()
        const postDb = client.db('SocialBlog').collection('Posts');

        try {
            const postCollections = await postDb.find({}).toArray();
            // console.log(postCollections)
            const PostIdGenerate = async (length) => {
                let result = '';
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

                const charactersLength = characters.length;
                for (let i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                const postIdGet = postCollections.map(postId => postId?.post_id?.split('-')?.[1]);

                if (!postIdGet.includes(result)) {
                    return result;
                }
                else {
                    return PostIdGenerate();
                }
            }

            const getPostId = await PostIdGenerate(15);

            const method = req.method;
            const body = req.body;
            switch (method) {

                case 'POST':

                    body.post_id = body.userID + "-" + getPostId
                    const post = await postDb.insertOne(body);
                    res.status(200).json({ success: 'true', result: post, postBody: body })

                    break;


                case 'GET':
                    const { cat } = req.query;
                    const { show } = req.query;
                    console.log(show)
                    if (cat === 'undefined' || !Boolean(cat)) {
                        const postGet = await postDb.find({}).skip(0).limit(parseInt(show)).toArray();
                        res.send({ success: 'true', result: postGet })
                    }
                    else {
                        const postGet = await postDb.find({}).toArray()
                        const result = postGet.filter(post => post?.category?.name === cat);
                        res.status(200).json({ success: 'true', result: result })
                    }
                    // body.post_id = body.userID + "-" + getPostId


                    break;

                default:
                    break;
            }

        }
        finally {

        }
    }
    run().catch(console.dir)



}
