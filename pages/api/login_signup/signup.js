export default function handler(req, res) {

    try {
        // (A) REQUIRE CRYPTO LIBRARY
        const body = req.body

        const crypto = require("crypto");
        const jwt = require('jsonwebtoken');

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
            console.log(body)
            const method = req.method;
            res.status(200).json({ message: "success", hash: encryptedPassword?.hash })
            const cookiesLogs = {}
            jwt.sign({ body }, process.env.LOGIN_SIGNUP_ACCESS_API, { expiresIn: '1s' }, function (err, token) {
                console.log(token);
            });

        }
        else {
            res.status(200).json({ message: "Sorry ..Couldn't access it " })
        }

        // // (D) VALIDATE PASSWORD
        // const validate = (userPassword, hashedPass, salt) => {
        //     let hash = crypto.createHmac("sha512", salt);
        //     hash.update(userPassword);
        //     userPassword = hash.digest("hex");
        //     return userPassword == hashedPass;
        // };

        // // (E) TEST VALIDATE
        // // clearpass = "FOOBAR";
        // const validated = validate(password, encryptedPassword.hash, process.env.PASSWORD_SALT);
        // // console.log("===== VALIDATION =====");
        // // console.log("Clear password: " + password);
        // console.log("Validation status: " + validated);



    }
    catch {
        res.status(200).json({ message: "Sorry ..Couldn't access it " })
    }

}
