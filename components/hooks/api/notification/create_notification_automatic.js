import login_user_without_post_body from "../social/login_user_without_post_body";


export default async function create_notification_automatic(notifyFor, notifyURL, userID, actionID) {

    const { client } = login_user_without_post_body()
    await client.connect();

    const notificationCollection = client.db("Notifications").collection("Notification");

    const notification = {
        userID: userID,
        notifyURL: notifyURL,
        notifyFor: notifyFor?.toUpperCase(),
        actionID: actionID,
        time: Date(),
    }

    // notification.userID = userID;
    // notification.notifyURL = notifyURL
    // notification.notifyFor = notifyFor
    // notification.actionID  = actionID
    // notification.time = Date()

    switch (notifyFor?.toUpperCase()) {


        case "EDIT":
            notification.message = 'Admin is editing your post. See details'
            break;

        case "DELETE":
            notification.message = 'Admin is deleting your post. See details'
            break;


        // ***************************

        case "COMMENT":
            //#comment0ab67d28b089f37ef9
            notification.message = 'comment your post'
            break;

        case "REPLY":
            //#comment0ab67d28b089f37ef9

            notification.message = 'replied to a comment on your post'
            break;


        case "UNLIKE":
            notification.message = 'has given a unlike reaction to your post'
            break;


        case "LOVE":
            notification.message = 'has given a love reaction to your post'
            break;


        case "LIKE":
            notification.message = 'has given a like reaction to your post'
            break;

        case "WELCOME":
            notification.message = 'Welcome user. You can now access all features. See details'
            break;

        case "WARNING":
            notification.message = 'Admin has warned you. See details'
            break;

        case "REMOVE_WARNING":
            notification.message = 'Warning has been removed.'
            break;


        // ***************************

        default:
            break;
    }
    if (!userID == actionID) {
        await notificationCollection.insertOne(notification)
    }
    return notification;
}
