import login_user_without_post_body from "../../../components/hooks/api/social/login_user_without_post_body";

export default async function handler(req, res) {
    const { user_id } = req.query;

    const crypto = require("crypto");

    const jwt = require('jsonwebtoken');
    console.log(user_id)
    try {
        if (user_id) {
            const { client } = login_user_without_post_body();
            await client.connect()

            const userCollection = client.db("users").collection("user_details");
            //FIND USER********************
            const findUser = await userCollection.findOne({ userID: user_id });
            delete findUser?.email;
            delete findUser?.password;

            res.status(200).json({ message: "success", user_details: findUser })
        }
        else {
            res.status(200).json({ message: "error", error: 'Could not match header file' })
        }
    }
    catch {
        res.status(200).json({ message: "error", error: 'Oops! Sorry .Something is wrong. Please try again' })

    }
}
