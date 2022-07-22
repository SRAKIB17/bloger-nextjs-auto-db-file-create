import { pid } from "process";
import login_user_without_post_body from "../../../components/hooks/api/social/login_user_without_post_body";
import jwtTokenVerifyServer from "../../../components/hooks/api/verifyUser/jwtTokenVerifyServer";
import verifyUserAndAccessFeatureServer from "../../../components/hooks/api/verifyUser/verifyUserAndAccessFeatureServer";
const crypto = require('crypto')


export default async function handler(req, res) {
    try {
        const { client } = login_user_without_post_body()
        await client.connect();
        const commentCollection = client.db("CommentReply").collection("comment");

        const repliesCollection = client.db("CommentReply").collection("replies");

        const session_token = req.headers.session_token;
        const guestToken = jwtTokenVerifyServer(session_token, process.env.AUTO_JWT_TOKEN_GENERATE_FOR_USER_OR_GUEST)?.access;
        const accessToken = guestToken?.token;
        const roll = guestToken?.roll;

        // VERIFY USER
        const checkUser = await verifyUserAndAccessFeatureServer(req);

        const method = req.method;
        // GET COMMENT BODY
        const commentBody = req.body;
        //METHOD GET AND SHOW 
        if ((accessToken === process.env.GUEST_CHECK_ACCESS_TOKEN || accessToken === process.env.USER_CHECK_ACCESS_FEATURE) && method === "GET") {
            const { post_id } = req.query;
            const getAllComment = await commentCollection.find({ post_id: post_id }).toArray();
            const getAllReplyLength = (await repliesCollection.find({ post_id: post_id }).toArray()).length;
            return res.status(200).json({ message: "success", result: getAllComment, total_comment: (getAllReplyLength + getAllComment?.length) })
        }
        // POST A NEW COMMENT 
        else if (checkUser && method === "POST") {

            const getAllComment = await commentCollection.find({}).toArray();
            // ******** NEW CRETE COMMENT ID***************
            const getCommentId = async () => {
                const commentId = crypto.randomBytes(Math.ceil(5))
                    .toString("hex")

                const checkCommentId = await getAllComment.find(comment => comment?.comment_id?.includes(commentId))
                if (checkCommentId) {

                    return getCommentId();
                }
                else {
                    return commentId;
                }
            }
            // ADD COMMENT ID IN COMMENT BODY
            const comment_id = await getCommentId() + "-" + commentBody?.post_id?.split('-')[0]
            commentBody.comment_id = comment_id;
            const result = await commentCollection.insertOne(commentBody);
            if (result?.acknowledged) {
                return res.status(200).json({ message: "success", result: result })
            }
            else {
                return res.status(200).json({ message: "error", error: "Something is wrong" })
            }
        }
        // else if(checkUser && 4){

    }
    catch {
        res.status(200).json({ message: "Ops! Something is wrong " })
    }

}
