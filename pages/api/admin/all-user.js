import login_user_without_post_body from "../../../components/hooks/api/social/login_user_without_post_body";
import SocialPostBlog from "../../../components/hooks/api/social/post_blog_videos_post";
import verifyUserAndAccessFeatureServer from "../../../components/hooks/api/verifyUser/verifyUserAndAccessFeatureServer";

export default async function handler(req, res) {
    const method = req.method;

    const { client } = login_user_without_post_body()
    const supportInbox = client.db("Inboxes").collection("support");
    await client.connect();
    const userCollection = client.db("users").collection("user_details");

    const { email } = req.query;
    const findUserCheckAdmin = await userCollection.findOne({ email: email });
    //CHECK USER IF TRUE IT PASS
    const roll = findUserCheckAdmin?.roll === 'admin'
    const checkUser = await verifyUserAndAccessFeatureServer(req);

    if (checkUser && roll && method === 'GET') {
        const { show } = req.query
        const findAllUser = await userCollection.find({}).sort({ _id: -1 }).skip(0).limit(parseInt(show)).toArray()
        return res.status(200).json({ message: "success", result: findAllUser })
    }
    else if (checkUser && roll && method === 'PUT') {
        const { userID } = req.query
        const filter = { userID: userID }
        // D. UPDATE DOC
        const warnBody = req.body
        const updateDoc = {
            $set: warnBody
        }

        // H. UPDATE POST BODY
        const result = await userCollection.updateOne(filter, updateDoc);

        // ALL OK 
        if (result?.acknowledged) {
            //WELCOME MESSAGE
            const messageBody = `Warning You`
            const welcomeMessage = {
                emoji: '/_next/static/media/2.855c4f8b.png',
                userID: userID,
                adminReply: true,
                adminId: 'null',
                message: messageBody
            }
            const supportInbox = client.db("Inboxes").collection("support");
            await supportInbox.insertOne(welcomeMessage);
            return res.status(200).json({ message: "success", result: result })
        }
        else {
            return res.status(200).json({ message: "error", error: "Something is wrong" })
        }
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
            const deleteSupportMessage = await supportInbox.deleteMany(filter);
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
