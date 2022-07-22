import { pid } from "process";
import login_user_without_post_body from "../../../components/hooks/api/social/login_user_without_post_body";
import jwtTokenVerifyServer from "../../../components/hooks/api/verifyUser/jwtTokenVerifyServer";
import verifyUserAndAccessFeatureServer from "../../../components/hooks/api/verifyUser/verifyUserAndAccessFeatureServer";
const crypto = require('crypto')


export default async function handler(req, res) {

    // try {
    const { client } = login_user_without_post_body()
    await client.connect();
    const commentCollection = client.db("CommentReply").collection("comment");
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
        return res.status(200).json({ message: "success", result: getAllComment })
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

    // }
    res.status(200).json({ message: "Sorry ..Couldn't access it ", email: req.query })
    // if (req.body) {
    //     const body = req.body;
    //     const token = body?.token;
    //     const login_info = body?.login_info;

    //     const email = jwtTokenVerifyServer(token, process.env.LOGIN_SIGNUP_ACCESS_API)?.jwtInfo?.email;

    //     const password = jwtTokenVerifyServer(login_info, process.env.LOGIN_SIGNUP_ACCESS_API)?.userInfo?.token;
    //     // const userId = login_pass?.userId;
    //     const userCollection = client.db("users").collection("user_details");
    //     const findUser = await userCollection.findOne({ email: email })
    //     const validate = (encryptedPassword, userEmail) => {
    //         const hashedPass = findUser?.password?.split('##')[0];
    //         if (hashedPass == encryptedPassword) {
    //             delete findUser?.password;

    //             res.status(200).json({ success: true, message: "welcome!", user_details: findUser })
    //         }
    //         else {
    //             res.status(200).json({ success: false, message: "failed? don't matched", })
    //         }
    //     };

    //     validate(password, email)

    // }
    // else {
    //     res.status(200).json({ message: "Sorry ..Couldn't access it " })
    // }
    // }
    // catch {
    //     res.status(200).json({ message: "Ops! Something is wrong " })
    // }

}
