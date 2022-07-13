const crypto = require("crypto");
const jwt = require('jsonwebtoken');

const LoginCheckValidate = () => {
    // const validate = (userPassword, hashedPass, salt) => {
    //     let hash = crypto.createHmac("sha512", salt);
    //     hash.update(userPassword);
    //     userPassword = hash.digest("hex");
    //     return userPassword == hashedPass;
    // };
    const validate = (userPassword, userEmail) => {
        const salt = process.env.PASSWORD_SALT;
        const hashedPass = '534534534534'
        let hash = crypto.createHmac("sha512", salt);
        hash.update(userPassword);
        userPassword = hash.digest("hex");
        console.log(userPassword)
        return userPassword == hashedPass;
    };

    return { validate }
};

export default LoginCheckValidate;