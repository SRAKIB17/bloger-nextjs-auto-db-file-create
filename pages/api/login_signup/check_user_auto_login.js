import login_user_without_post_body from "../../../components/hooks/api/social/login_user_without_post_body";

export default async function handler(req, res) {

    try {
        const { client } = login_user_without_post_body()
        await client.connect();
        if (req.headers.login_api_code == process.env.LOGIN_SIGNUP_ACCESS_API) {
            const body = req.body;
            const { email } = body;
            const { password } = body
            const userCollection = client.db("users").collection("user_details");
            const findUser = await userCollection.findOne({ email: email })
            const validate = (encryptedPassword, userEmail) => {
                const hashedPass = findUser?.password
                if (hashedPass == encryptedPassword) {
                    // const getUserFullInfo = {
                    //     profile: '',
                    //     cover: '',
                    //     userID: 5345435435,
                    //     email: email,
                    //     password: password,
                    //     name: "MD Rakibul Islam",
                    //     gender: 'Male',
                    //     work: "Student",
                    //     location: 'Kurigram',
                    //     school: 'mec',
                    //     github: 'https://github.com/SRAKIB17',
                    //     youtube: null,
                    //     facebook: null,
                    //     linkedin: null,
                    //     linkedin: null,
                    //     instagram: null,
                    //     twitter: null,
                    //     quote: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum, natus enim eos laboriosam ab id libero consectetur quidem eveniet unde ratione culpa. Placeat sit odit minus neque inventore necessitatibus?`,
                    // }
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
