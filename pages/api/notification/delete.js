import { ObjectId } from "mongodb";
import create_notification_automatic from "../../../components/hooks/api/notification/create_notification_automatic";
import login_user_without_post_body from "../../../components/hooks/api/social/login_user_without_post_body";
import verifyUserAndAccessFeatureServer from "../../../components/hooks/api/verifyUser/verifyUserAndAccessFeatureServer";

export default async function handler(req, res) {
    const { client } = login_user_without_post_body()
    await client.connect();

    const checkUser = await verifyUserAndAccessFeatureServer(req);
    const { id } = req.query
    if (checkUser) {
        // const { user_id } = req.query
        const notificationCollection = client.db("Notifications").collection("Notification");
        return res.status(200).json(await notificationCollection.deleteOne({ _id: ObjectId(id) }));
    }
    else {
        return res.status(200).json([])
    }

}
