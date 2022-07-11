const post = () => {
    const dbUser = 'social-blogdb'
    const dbPass = 'JdYT4aERpw0oqpjc'
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = `mongodb+srv://social-blogdb:${dbPass}@cluster0.wad1r.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
   
    return { client }
};

export default post;