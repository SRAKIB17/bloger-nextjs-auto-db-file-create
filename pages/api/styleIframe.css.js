
export default async function handler(req, res) {
  const { post_id } = req.query;
  const { postBody } = req.body

  try {
    const aa = `
    
    
    @tailwind base;
@tailwind components;
@tailwind utilities;


@import url('https://fonts.googleapis.com/css2?family=Coming+Soon&family=Fira+Code&family=Hind+Siliguri:wght@500&family=Lateef&family=Open+Sans:wght@300;500&family=Orbitron&family=Poppins:wght@500&display=swap');
/* font-family: 'Coming Soon', cursive;
font-family: 'Fira Code', monospace;
font-family: 'Hind Siliguri', sans-serif;
font-family: 'Lateef', cursive;
font-family: 'Open Sans', sans-serif;
font-family: 'Orbitron', sans-serif;
font-family: 'Poppins', sans-serif; */

html,
body {

  background-color: red;
}


  
    `
    // const postDb = client.db('SocialBlog').collection('Posts');
    // const postCollections = await postDb.find({}).toArray();
    // const postBody = await postCollections.find(post => post?.post_id === post_id);
    // console.log(postBody)

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write(aa);
    // const aa = `
    // <iframe srcDoc="slfslfsdflsdfldsfldfldsfsd" frameborder="0"></iframe>

    // `
    // res.write(aa);
    res.end();
  }
  finally {

  }
}
