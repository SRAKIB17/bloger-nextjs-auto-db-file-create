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


        if (!checkUser) {

            const filter = { post_id: req?.body?.post_id };
            const userID = req?.body?.userID

            const getPost = await postCollection.findOne(filter);

            if (!getPost?.bookmarkUserID) {
                getPost.bookmarkUserID = [];
            }

            const check = getPost?.bookmarkUserID?.includes(userID);

            if (check) {
                const filterBookmarkUserID = getPost?.bookmarkUserID?.filter(id != userID);
                getPost.bookmarkUserID = filterBookmarkUserID
            }
            else {
                getPost?.bookmarkUserID?.push(userID)
            }
            const updateDoc = {
                $set: getPost
            }
            const result = await postCollection.updateOne(filter, updateDoc);
            console.log(result)
            if (result?.acknowledged) {
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
