import LoginCheckValidate from "../../../components/hooks/api/verifyUser/loginCheckUser";

export default async function handler(req, res) {
    const crypto = require("crypto");
    const jwt = require('jsonwebtoken')
    try {
        if (req.body) {
            // (A) REQUIRE CRYPTO LIBRARY
            const body = req.body;
            const { validate } = LoginCheckValidate()
            const validation = await validate(body?.password, body?.email);
            if (validation.message === 'error') {
                res.status(200).json(validation)
            }
            else if (validation?.message === 'success') {
                const password = validation?.password;

                const jwtInfo = {
                    email: body?.email
                }
                const jwtToken = jwt.sign({ jwtInfo }, process.env.LOGIN_SIGNUP_ACCESS_API, { expiresIn: '1d' }, { algorithm: 'RSASHA256' });

                // USER LOGIN INFO SAVED COOKIE 
                const userInfo = {
                    token: password,
                    userId: validation?.userId,
                }
                const loginInfo = jwt.sign({ userInfo }, process.env.LOGIN_SIGNUP_ACCESS_API, { expiresIn: '1d' }, { algorithm: 'RSASHA256' });

                // JWT USER INFO(EMAIL SAVED) SEND LIKE TOKEN AND SAVED LOCALSTORAGE OR COOKIES
                res.status(200).json({ message: "success", token: jwtToken, login_info: loginInfo })

            }
        }
        else {
            res.status(200).json({ message: "error", error: 'Could not match header file' })
        }
    }
    catch {
        res.status(200).json( { message: "error", error: 'Oops! Sorry .Something is wrong. Please try again' })

    }
}
