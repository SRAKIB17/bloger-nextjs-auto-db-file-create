import login_user_without_post_body from "../../../components/hooks/api/social/login_user_without_post_body";
import private_access_token_client from "../../../components/hooks/api/verifyUser/private_access_token_client";


export default async function handler(req, res) {
    const { login_api_token } = private_access_token_client()
    try {
        const { client } = login_user_without_post_body()
        await client.connect();
        if (req.body) {
            const body = req.body;
            const { email } = body;
            const { password } = body
            const userCollection = client.db("users").collection("user_details");
            const findUser = await userCollection.findOne({ email: email })
            const validate = (encryptedPassword, userEmail) => {
                const hashedPass = findUser?.password?.split('##')[0]
                console.log(hashedPass)
                if (hashedPass == encryptedPassword) {
                    delete findUser?.email;
                    delete findUser?.password;
                    res.status(200).json({ success: true, message: "welcome!", user_details: findUser })
                }
                else {
                    res.status(200).json({ success: false, message: "failed? don't matched", })
                }
            };

            validate(password, email)

        }
        else {
            res.status(200).json({ message: "Sorry ..Couldn't access it " })
        }
    }
    catch {
        res.status(200).json({ message: "Sorry ..Couldn't access it " })
    }

}
