import create_notification_automatic from "../../../components/hooks/api/notification/create_notification_automatic";
import login_user_without_post_body from "../../../components/hooks/api/social/login_user_without_post_body";

export default async function handler(req, res) {
    const { client } = login_user_without_post_body()
    await client.connect();

    const notificationCollection = client.db("Notifications").collection("Notification");
    // await create_notification_automatic('LIKE', 534543534, 353453454, 53454)
    // console.log(await notificationCollection.deleteMany({}))

    return res.status(200).json(await notificationCollection.find({}).toArray())

}
