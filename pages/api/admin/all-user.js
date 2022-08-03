import login_user_without_post_body from "../../../components/hooks/api/social/login_user_without_post_body";
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

    const { show } = req.query
    const findAllUser = await userCollection.find({}).skip(0).limit(parseInt(show)).toArray()
    return res.status(200).json({ message: "success", result: findAllUser })
    if (checkUser && roll && method === 'GET') {
        const { show } = req.query
        const findAllUser = await userCollection.find({}).skip(0).limit(parseInt(show)).toArray()
        return res.status(200).json({ message: "success", result: findAllUser })
    }

}
