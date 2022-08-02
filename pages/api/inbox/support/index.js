import login_user_without_post_body from "../../../../components/hooks/api/social/login_user_without_post_body";
import verifyUserAndAccessFeatureServer from "../../../../components/hooks/api/verifyUser/verifyUserAndAccessFeatureServer";

export default async function handler(req, res) {
    const checkUser = await verifyUserAndAccessFeatureServer(req);
    const method = req.method;
    const { client } = login_user_without_post_body();
    await client.connect();
    const supportInbox = client.db("Inboxes").collection("support");
    const userCollection = client.db("users").collection("user_details");
    const { email } = req.query;
    const findUserCheckAdmin = await userCollection.findOne({ email: email });
    const roll = findUserCheckAdmin?.roll === 'admin'

    if (checkUser && roll) {
        const findAllMessage = await supportInbox.find({}).toArray()
        return res.status(200).json({ message: "success", result: findAllMessage })
    }
    // if (method === "GET") {
    //     res.status(200).json(message)
    // }
    // if (method === 'POST') {
    //     message.push(req.body)
    // }

}
