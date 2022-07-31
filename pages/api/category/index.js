import SocialPostBlog from "../../../components/hooks/api/social/post_blog_videos_post";
import jwtTokenVerifyServer from "../../../components/hooks/api/verifyUser/jwtTokenVerifyServer";

 
export default async function handler(req, res) {


    const { client } = SocialPostBlog();
    await client.connect();
    const postCollection = client.db("postBlogs").collection("postBlog");
    const method = req.method;

    const token = req.headers?.access_token;
    const tokenDetails = jwtTokenVerifyServer(token, process.env.AUTO_JWT_TOKEN_GENERATE_FOR_USER_OR_GUEST)?.access;
    const accessToken = tokenDetails?.token;
    const roll = tokenDetails?.roll;

    if (accessToken === process.env.GUEST_CHECK_ACCESS_TOKEN || accessToken === process.env.USER_CHECK_ACCESS_FEATURE) {
        const getPosts = await postCollection.find({}).toArray();
        const getCategory = await getPosts.map(post => {
            const category = {
                category: post.category,
                tags: (typeof post?.tags?.split === 'function') ? post?.tags?.split(',') : post?.tags
            }
            return category;
        })
        return res.status(200).json(getCategory)
    }
    // if (method === 'POST') {
    //     return category.push(req.body)
    // }

}
