import login_user_without_post_body from "../../../components/hooks/api/social/login_user_without_post_body";

const crypto = require("crypto");
const jwt = require('jsonwebtoken');
export default async function handler(req, res) {

    try {



        // (A) REQUIRE CRYPTO LIBRARY

        // (B) CREATE PASSWORD HASH
        if (req.headers.login_api_code == process.env.LOGIN_SIGNUP_ACCESS_API) {
            //GET MONGODB
            const { client } = login_user_without_post_body()
            await client.connect();
            const userCollection = client.db("users").collection("user_details");

            const run = async () => {
                const body = req.body
                //GET USER SPECIFIC ID;
                const getUserId = async () => {
                    const userId = crypto.randomBytes(Math.ceil(12))
                        .toString("hex")
                    // (B1) GENERATE RANDOM SALT
                    const checkUserId = await userCollection.findOne({ userID: userId })
                    if (checkUserId) {
                        return getUserId()
                    }
                    else {
                        return userId;
                    }
                }


                const findSpecific = await userCollection.findOne({ email: body?.email?.toLowerCase() });
                if (findSpecific) {
                    res.status(200).json({ message: "error", error: 'Already signup by this email' })
                }
                else {
                    const encryptingPassword = (password) => {


                        let salt = process.env.PASSWORD_SALT;
                        // (B2) SHA512 HASH
                        let hash = crypto.createHmac("sha512", salt);
                        hash.update(password);
                        const hashValue = hash.digest("hex")
                        return {
                            salt: salt,
                            hash: hashValue
                        };
                    };

                    const password = body?.password;


                    const encryptedPassword = encryptingPassword(password);
                    body.password = encryptedPassword?.hash;
                    //USER ALL INFO SET AUTOMATIC
                    const getUserFullInfo = {
                        profile: '',
                        cover: '',
                        userID: await getUserId(),
                        email: body?.email,
                        password: body?.password,
                        name: body?.name,
                        gender: body?.gender,
                        work: "Student",
                        location: 'Kurigram',
                        school: 'mec',
                        github: 'https://github.com/SRAKIB17',
                        youtube: null,
                        facebook: null,
                        linkedin: null,
                        linkedin: null,
                        instagram: null,
                        twitter: null,
                        quote: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum, natus enim eos laboriosam ab id libero consectetur quidem eveniet unde ratione culpa. Placeat sit odit minus neque inventore necessitatibus?`,
                    }
                    // INSERT USER FULL INFO
                    const result = await userCollection.insertOne(getUserFullInfo)
                    if (result?.acknowledged) {

                        // JWT USER INFO (EMAIL SAVED) SEND LIKE TOKEN AND SAVED LOCALSTORAGE OR COOKIES
                        const jwtInfo = {
                            email: body?.email
                        }
                        const jwtToken = jwt.sign({ jwtInfo }, process.env.LOGIN_SIGNUP_ACCESS_API, { expiresIn: '1d' }, { algorithm: 'RSASHA256' });


                        //******************************************************************************* */
                        // USER LOGIN INFO SAVED COOKIE 
                        const userInfo = {
                            token: body?.password,
                            userId: 5345,
                        }
                        const loginInfo = jwt.sign({ userInfo }, process.env.LOGIN_SIGNUP_ACCESS_API, { expiresIn: '1d' }, { algorithm: 'RSASHA256' });

                        res.status(200).json({ message: "success", token: jwtToken, login_info: loginInfo })
                    }
                    else {
                        res.status(200).json({ message: "error", error: 'Something is wrong..Please try again' })
                    }

                }


            }
            run().catch(console.dir)

        }
        else {
            res.status(200).json({ message: "Sorry ..Couldn't access it " })
        }


    }
    catch {
        res.status(200).json({ message: "Sorry ..Couldn't access it " })
    }

}
