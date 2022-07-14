import login_user_without_post_body from "../social/login_user_without_post_body";

const crypto = require("crypto");
const jwt = require('jsonwebtoken');

const LoginCheckValidate = () => {

    // const validate = (userPassword, hashedPass, salt) => {
    //     let hash = crypto.createHmac("sha512", salt);
    //     hash.update(userPassword);
    //     userPassword = hash.digest("hex");
    //     return userPassword == hashedPass;
    // };
    const validate = async (userPassword, userEmail) => {
        try {
            const { client } = login_user_without_post_body()
            await client.connect();
            const userCollection = client.db("users").collection("user_details");
            //FIND USER********************
            const findUser = await userCollection.findOne({ email: userEmail });




            //**********CHECK USER BY PASSWORD********************* */
            if (findUser) {
                const hashedPass = findUser?.password?.split('##')[0];
                //PASSWORD ENCRYPT BY HASH AND SALT //
                const salt = findUser?.password?.split('##')[1];
                let hash = crypto.createHmac("sha512", salt);
                hash.update(userPassword);
                userPassword = hash.digest("hex");
              
                //PASSWORD CHECK IF TRUE
                if (hashedPass === userPassword) {
                    const message = { message: 'success', password: userPassword, userId: findUser?.userId };
                    return message;

                }
                //PASSWORD CHECK IF FALSE
                else {
                    const message = { message: "error", error: 'Could not match password' }
                    return message;
                }
            }
            else {
                const message = { message: "error", error: 'Could not find this email' }
                return message
            }

        }
        catch {

        }
    };

    return { validate }
};

export default LoginCheckValidate;