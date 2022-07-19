import SocialPostBlog from "../../../components/hooks/api/social/post_blog_videos_post";

export default async function handler(req, res) {
    const { client } = SocialPostBlog();
    await client.connect();
    const postCollection = client.db("postBlogs").collection("postBlog");

    // VERIFY USER

    // console.log(process.env.GUEST_CHECK_ACCESS_TOKEN)

    const method = req.method;
    if (method === "GET") {
        const getPosts = await postCollection.find({}).toArray()
        res.status(200).json(getPosts)
    }
    // if (method === 'POST') {
    //     message.push(req.body)
    // }

}
