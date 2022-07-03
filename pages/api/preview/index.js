
export default async function handler(req, res) {
  const { post_id } = req.query;
  const { postBody } = req.body

  try {
    // const postDb = client.db('SocialBlog').collection('Posts');
    // const postCollections = await postDb.find({}).toArray();
    // const postBody = await postCollections.find(post => post?.post_id === post_id);
    // console.log(postBody)

    res.writeHead(200, { 'Content-Type': 'text/html' });

    // res.write('<h1>Sorry Can\'t load document</h1>');
    const aa = `
    <iframe srcDoc="slfslfsdflsdfldsfldfldsfsd" frameborder="0"></iframe>
    
    `
    res.write(aa);
    res.end();
  }
  finally {

  }
}
