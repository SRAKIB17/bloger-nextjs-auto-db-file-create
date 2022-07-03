
export default function handler(req, res) {
  const { post_id } = req.query;
  const codePreview = req.body

  const dbUser = 'social-blogdb'
  const dbPass = 'JdYT4aERpw0oqpjc'
  const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = `mongodb+srv://social-blogdb:${dbPass}@cluster0.wad1r.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  const run = async () => {

    await client.connect()

    try {
      const postDb = client.db('SocialBlog').collection('Posts');
      const postCollections = await postDb.find({}).toArray();
      const postBody = await postCollections.find(post => post?.post_id === post_id)
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(postBody?.postBody);
      res.end();
    }
    finally {

    }
  }
  run().catch(console.dir)

}

