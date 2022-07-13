const crypto = require("crypto");

const userPasswordAndEmailCheck = () => {
    const validate = (userPassword, hashedPass, salt) => {
        let hash = crypto.createHmac("sha512", salt);
        hash.update(userPassword);
        userPassword = hash.digest("hex");
        return userPassword == hashedPass;
    };

    return { validate }
};

export default userPasswordAndEmailCheck;