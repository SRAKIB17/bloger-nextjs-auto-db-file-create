import SocialPostBlog from "../../../components/hooks/api/social/post_blog_videos_post";
import jwtTokenVerifyServer from "../../../components/hooks/api/verifyUser/jwtTokenVerifyServer";

export default async function handler(req, res) {
    const { client } = SocialPostBlog();
    await client.connect();
    const postCollection = client.db("postBlogs").collection("postBlog");

    // VERIFY USER
    const token = req.headers?.access_token;

    const tokenDetails = jwtTokenVerifyServer(token, process.env.AUTO_JWT_TOKEN_GENERATE_FOR_USER_OR_GUEST)?.access;
    const accessToken = tokenDetails?.token;
    const roll = tokenDetails?.roll;
    if (accessToken === process.env.GUEST_CHECK_ACCESS_TOKEN || accessToken === process.env.USER_CHECK_ACCESS_FEATURE) {
        const { cat } = await req.query;
        const { show } = req.query;
        const { tag } = req.query;

        if (cat === 'undefined' || !cat) {
            const getPosts = await postCollection.find({ postBy: "admin" }).sort({ _id: -1 }).skip(0).limit(parseInt(show)).toArray();
            return res.status(200).json(getPosts)
        }
        //************************************************ */

        // ONLY CATEGORY
        else if (cat != 'undefined' && tag === 'undefined') {
            const getPosts = await postCollection.find({
                "$and":
                    [
                        { category: cat },
                        { postBy: 'admin' }
                    ]
            }).sort({ _id: -1 }).skip(0).limit(parseInt(show)).toArray();
            return res.status(200).json(getPosts)
        }
        //************************************************ */
        
        // CATEGORY AND ADMIN POST AND TAGS
        else if (cat != 'undefined' && tag != 'undefined') {
            const query = new RegExp(tag, 'i');
            const getPosts = await postCollection.find({
                "$and":
                    [
                        { category: cat },
                        { tags: { $regex: query } },
                        { postBy: 'admin' }
                    ]
            }).sort({ _id: -1 }).skip(0).limit(parseInt(show)).toArray();
            return res.status(200).json(getPosts)
        }
        //************************************************ */


    }
    else {
        return res.status(200).json({ message: 'error', error: "Can't access " })
    }

}
