import { pid } from "process";
import login_user_without_post_body from "../../../components/hooks/api/social/login_user_without_post_body";
import verifyUserAndAccessFeatureServer from "../../../components/hooks/api/verifyUser/verifyUserAndAccessFeatureServer";
const crypto = require('crypto')


export default async function handler(req, res) {
    try {
        const { client } = login_user_without_post_body()
        await client.connect();
        const commentCollection = client.db("CommentReply").collection("comment");
        const repliesCollection = client.db("CommentReply").collection("replies");

        // VERIFY USER
        const checkUser = await verifyUserAndAccessFeatureServer(req);
        const method = req.method;
        console.log(method)
        console.log(checkUser)

        // GET COMMENT BODY
        if (checkUser && method === "DELETE") {
            const { comment_id } = req.query
            const result = await commentCollection.deleteOne({ comment_id: comment_id });
            const allReplyDelete = await repliesCollection.deleteMany({ comment_id: comment_id })
            if (result?.acknowledged && allReplyDelete.acknowledged) {
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
        res.status(200).json({ message: "Ops! Something is wrong " })
    }

}
