import SocialPostBlog from "../../../components/hooks/api/social/post_blog_videos_post";
import verifyUserAndAccessFeatureServer from "../../../components/hooks/api/verifyUser/verifyUserAndAccessFeatureServer";
const crypto = require('crypto')


export default async function handler(req, res) {

    try {
        const { client } = SocialPostBlog();
        await client.connect();
        const postCollection = client.db("postBlogs").collection("postBlog");

        // VERIFY USER

        const checkUser = await verifyUserAndAccessFeatureServer(req);
        const method = req.method;

        if (checkUser && method === "PUT") {
            const replyBody = req.body;
            const { comment_id } = replyBody;


            const { post_id } = req?.body
            const filter = { post_id: post_id };
            const findPost = await postCollection.findOne(filter);

            // FIND SPECIFIC COMMENT FROM POST 
            const getComment = await findPost?.comments?.find(comment => comment?.comment_id?.includes(comment_id));

            // FIND SPECIFIC REPLY ID;
            const getReplyIdCheck = await getComment?.replies?.find(reply => console.log(reply))

            const getReplyId = async () => {
                const replyId = crypto.randomBytes(Math.ceil(8))
                    .toString("hex")

                // const checkCommentId = await getAllReply.find(reply => reply?.reply_id?.includes(replyId))

                if (false) {
                    return getReplyId();
                }
                else {
                    return replyId;
                }
            }

            // const getAllReply = await repliesCollection.find({}).toArray();

            // DELETE POST ID AND COMMENT ID FROM REPLY BODY;
            delete replyBody?.post_id;
            delete replyBody?.comment_id;

            const reply_id = await getReplyId()
            // SET REPLY ID IN REPLY BODY
            replyBody.reply_id = reply_id;

            await getComment?.push(replyBody)

            console.log(getComment)
            
            // const updateComment = [...findCommentAll, commentBody]
            // const updateDoc = {
            //     $set: {
            //         comments: updateComment
            //     }
            // }

            // // 8. UPDATE POST BODY
            // const result = await postCollection.updateOne(filter, updateDoc);

            // // ALL OK 
            // if (result?.acknowledged) {
            //     res.status(200).json({ message: "success", result: result })
            // }
            // else {
            //     res.status(200).json({ message: "error", error: "Something is wrong" })
            // }

            // const result = await repliesCollection.insertOne(replyBody);
            // if (result?.acknowledged) {
            //     return res.status(200).json({ message: "success", result: result })
            // }
            // else {
            //     return res.status(200).json({ message: "error", error: "Something is wrong" })
            // }
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
