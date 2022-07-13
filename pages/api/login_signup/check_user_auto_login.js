
export default async function handler(req, res) {

    try {
        if (req.headers.login_api_code == process.env.LOGIN_SIGNUP_ACCESS_API) {
            const body = req.body;
            const { email } = body;
            const { password } = body

            const validate = (encryptedPassword, userEmail) => {
                const hashedPass = encryptedPassword
                if (hashedPass == encryptedPassword) {
                    const getUserFullInfo = {
                        userID: 5345435435,
                        email: email,
                        password: password,
                        name: "MD Rakibul Islam",
                        gender: 'Male',
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
                        gender: "Male",
                        quote: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum, natus enim eos laboriosam ab id libero consectetur quidem eveniet unde ratione culpa. Placeat sit odit minus neque inventore necessitatibus?`,
                    }
                    res.status(200).json({ success: true, message: "welcome!", user_details: getUserFullInfo })
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
