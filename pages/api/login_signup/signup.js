const crypto = require("crypto");
const jwt = require('jsonwebtoken');
export default function handler(req, res) {

    try {
        // (A) REQUIRE CRYPTO LIBRARY
        const body = req.body
        // (B) CREATE PASSWORD HASH
        if (req.headers.login_api_code == process.env.LOGIN_SIGNUP_ACCESS_API) {
            const encryptingPassword = (password) => {
                // (B1) GENERATE RANDOM SALT
                // let length = 16;
                let salt = process.env.PASSWORD_SALT;
                //   let salt =  crypto.randomBytes(Math.ceil(length / 2))
                //   .toString("hex")
                //   .slice(0, length);

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
            // console.log(body)
            const method = req.method;
            const cookiesLogs = {}

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
            // console.log(savedUserInfo)
            // jwt.verify(savedUserInfo, process.env.LOGIN_SIGNUP_ACCESS_API, (err, decode) => {
            //     // console.log(decode)
            // })
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
