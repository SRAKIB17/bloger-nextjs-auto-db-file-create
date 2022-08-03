import login_user_without_post_body from "../../../components/hooks/api/social/login_user_without_post_body";
import SocialPostBlog from "../../../components/hooks/api/social/post_blog_videos_post";
import verifyUserAndAccessFeatureServer from "../../../components/hooks/api/verifyUser/verifyUserAndAccessFeatureServer";

export default async function handler(req, res) {
    const method = req.method;
    const { client } = login_user_without_post_body()
    await client.connect();
    const userCollection = client.db("users").collection("user_details");

    const { email } = req.query;
    const findUserCheckAdmin = await userCollection.findOne({ email: email });
    const roll = findUserCheckAdmin?.roll === 'admin'
    const checkUser = await verifyUserAndAccessFeatureServer(req);

    if (checkUser && roll && method === 'GET') {
        const { show } = req.query
        const findAllUser = await userCollection.find({}).sort({ _id: -1 }).skip(0).limit(parseInt(show)).toArray()
        return res.status(200).json({ message: "success", result: findAllUser })
    }
    else if (method === "DELETE" && checkUser && roll) {
        const { userID } = req.query;
        const filter = { userID: userID }
        const result = await userCollection.deleteOne(filter);

        const { client } = SocialPostBlog()
        await client.connect();
        const postCollection = client.db("postBlogs").collection("postBlog");
        if (result?.acknowledged && result?.deletedCount == 1) {
            const deletePost = await postCollection.deleteMany(filter);
            if (deletePost.acknowledged) {
                res.status(200).json({ message: "success", result: result })
            }
            else {
                res.status(200).json({ message: "error", error: "Only user delete" })
            }
        }
        else {
            res.status(200).json({ message: "error", error: "Something is wrong" })
        }
    }

}
