import login_user_without_post_body from "../../../components/hooks/api/social/login_user_without_post_body";
import verifyUserAndAccessFeatureServer from "../../../components/hooks/api/verifyUser/verifyUserAndAccessFeatureServer";
const crypto = require('crypto')


export default async function handler(req, res) {

    try {
        const { client } = login_user_without_post_body()
        await client.connect();
        const repliesCollection = client.db("CommentReply").collection("replies");

        // VERIFY USER

        const checkUser = await verifyUserAndAccessFeatureServer(req);
        const method = req.method;
        const replyBody = req.body;
        if (checkUser && method === "GET") {
            const { comment_id } = req.query;
            const getAllReply = await repliesCollection.find({ comment_id: comment_id }).toArray();
            return res.status(200).json({ message: "success", result: getAllReply })
        }


        else if (checkUser && method === "POST") {
            const getAllReply = await repliesCollection.find({}).toArray();
            const getReplyId = async () => {
                const replyId = crypto.randomBytes(Math.ceil(5))
                    .toString("hex")

                const checkCommentId = await getAllReply.find(reply => reply?.reply_id?.includes(replyId))

                if (checkCommentId) {
                    return getReplyId();
                }
                else {
                    return replyId;
                }
            }
            const reply_id = await getReplyId() + "-" + replyBody?.comment_id?.split('-')[0];
            replyBody.reply_id = reply_id
            const result = await repliesCollection.insertOne(replyBody);
            if (result?.acknowledged) {
                return res.status(200).json({ message: "success", result: result })
            }
            else {
                return res.status(200).json({ message: "error", error: "Something is wrong" })
            }
        }

    }
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
    catch {
        res.status(200).json({ message: "Ops! Something is wrong " })
    }

}
