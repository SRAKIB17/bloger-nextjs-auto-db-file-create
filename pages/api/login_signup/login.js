import LoginCheckValidate from "../../../components/hooks/api/verifyUser/loginCheckUser";

export default function handler(req, res) {
    const crypto = require("crypto");
    const jwt = require('jsonwebtoken')
    try {

        if (req.headers.login_api_code == process.env.LOGIN_SIGNUP_ACCESS_API) {
            // (A) REQUIRE CRYPTO LIBRARY
            const body = req.body;
            const { validate } = LoginCheckValidate()
            const aa = validate(body?.password, body?.email)

            // JWT USER INFO (EMAIL SAVED) SEND LIKE TOKEN AND SAVED LOCALSTORAGE OR COOKIES
            const jwtInfo = {
                email: body?.email
            }
            const jwtToken = jwt.sign({ jwtInfo }, process.env.LOGIN_SIGNUP_ACCESS_API, { expiresIn: '1s' }, { algorithm: 'RSASHA256' });

            //******************************************************************************* */
            // USER LOGIN INFO SAVED COOKIE 
            const userInfo = {
                token: body?.password,
                userId: 5345,
            }
            const loginInfo = jwt.sign({ userInfo }, process.env.LOGIN_SIGNUP_ACCESS_API, { expiresIn: '1h' }, { algorithm: 'RSASHA256' });
            // console.log(savedUserInfo)
            // jwt.verify(savedUserInfo, process.env.LOGIN_SIGNUP_ACCESS_API, (err, decode) => {
            //     // console.log(decode)
            // })
            console.log(loginInfo)
            res.status(200).json({ message: "success", token: jwtToken, login_info: loginInfo })
        }
        else {
            res.status(200).json({ message: "Sorry ..Couldn't access it " })
        }
    }
    catch {
        res.status(200).json({ message: "Sorry ..Couldn't access it " })
    }

}
