import SocialPostBlog from "../../../components/hooks/api/social/post_blog_videos_post";
import jwtTokenVerifyServer from "../../../components/hooks/api/verifyUser/jwtTokenVerifyServer";
import verifyUserAndAccessFeatureServer from "../../../components/hooks/api/verifyUser/verifyUserAndAccessFeatureServer";
const crypto = require("crypto");

export default async function handler(req, res) {
    try {
        const { client } = SocialPostBlog()
        await client.connect();
        const postCollection = client.db("postBlogs").collection("postBlog");

        // VERIFY USER

        const checkUser = await verifyUserAndAccessFeatureServer(req);



        if (checkUser) {
            const { post_id } = req?.query;
            const result = await postCollection.deleteOne({ post_id: post_id });
            if (result?.acknowledged && result?.deletedCount == 1) {
                res.status(200).json({ message: "success", result: result })
            }
            else {
                res.status(200).json({ message: "error", error: "Something is wrong" })
            }

        }
        else {
            res.status(200).json({ message: "error", error: 'Could not match header file' })
        }

    }
    catch {
        res.status(200).json({ message: "error", error: 'Something is wrong' })
    }
}