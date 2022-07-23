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
        console.log(checkUser)


        const { userID } = req.body;
        const commentBody = req.body;
        if (checkUser) {
            const { post_id } = req?.body
            const filter = { post_id: post_id };
            const findPost = await postCollection.findOne(filter);

            // console.log(getPost)

            const getCommentId = async () => {
                const commentId = crypto.randomBytes(Math.ceil(9))
                    .toString("hex")

                const checkCommentId = await findPost?.comments?.find(comment => comment?.comment_id?.includes(commentId));
                if (checkCommentId) {
                    return getCommentId();
                }
                else {
                    return commentId;
                }
            }
            const comment_id = await getCommentId();
            commentBody.comment_id = comment_id;
            // console.log(commentBody)
            delete commentBody?.post_id

            const findCommentAll = await findPost?.comments?.map(commentBody => commentBody);
            const updateComment = [...findCommentAll, commentBody]
            const updateDoc = {
                $set: {
                    comments: updateComment
                }
            }


            // const result = await postCollection.updateOne(filter, updateDoc);
            // console.log(result)
            // if (result?.acknowledged) {
            //     res.status(200).json({ message: "success", result: result })
            // }
            // else {
            //     res.status(200).json({ message: "error", error: "Something is wrong" })
            // }

        }
        else {
            res.status(200).json({ message: "error", error: 'Could not match header file' })
        }

    }
    catch {
        res.status(200).json({ message: "Ops! Something is wrong " })
    }

}
