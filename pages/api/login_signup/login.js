export default function handler(req, res) {

    try {
        // (A) REQUIRE CRYPTO LIBRARY
        const body = req.body

        const crypto = require("crypto");

        // (B) CREATE PASSWORD HASH
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
            console.log(req.headers.login_api_code == process.env.LOGIN_SIGNUP_ACCESS_API, req.headers.referer,)
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
        // (D) VALIDATE PASSWORD
        const validate = (userPassword, hashedPass, salt) => {
            let hash = crypto.createHmac("sha512", salt);
            hash.update(userPassword);
            userPassword = hash.digest("hex");
            return userPassword == hashedPass;
        };

        // (E) TEST VALIDATE
        // clearpass = "FOOBAR";
        const validated = validate(password, encryptedPassword.hash, process.env.PASSWORD_SALT);
        // console.log("===== VALIDATION =====");
        // console.log("Clear password: " + password);
        console.log("Validation status: " + validated);


        const method = req.method;
        if (method === "GET") {
            res.status(200).json(encryptedPassword.hash)
        }
        if (method === 'POST') {
            // message.push(req.body)
        }
    }
    catch {
        res.status(200).json({ message: "Sorry ..Couldn't access it " })
    }

}
