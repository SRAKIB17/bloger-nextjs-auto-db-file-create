import SocialPostBlog from "../../../components/hooks/api/social/post_blog_videos_post";



export default async function handler(req, res) {
  const { post_id } = req.query;
  const { client } = SocialPostBlog();
  await client.connect();
  const postCollection = client.db("postBlogs").collection("postBlog");


  const run = async () => {
    const findPost = await postCollection.findOne({ post_id: post_id });
    console.log(findPost)
    const iframePostFullBody = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/api/styleIframe.css" rel="stylesheet" type="text/css">
        <link href="/api/styleIframe.css?video=video" rel="stylesheet" type="text/css">
        <title>${findPost?.post_title}</title>
        <style>
        ${findPost?.postBodyCss} 
        </style>
    </head>
    <body>
        ${findPost?.postBody}
        <script>
            ${findPost?.postBodyJs}
        </script>
        <script src="/api/styleIframe.js?js=code-copy"></script>
    </body>
    </html>
    `
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(findPost ? iframePostFullBody : '<h1>Sorry Can\'t load document</h1>');
    res.end();
  }
  run()

}

