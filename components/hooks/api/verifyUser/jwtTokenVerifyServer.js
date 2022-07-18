const jwtTokenVerifyServer = (token,secretCode) => {
    const jwt = require('jsonwebtoken')
    try {
        return jwt.verify(token, secretCode)
    }
    catch (err) {
        return err;
    }
};

export default jwtTokenVerifyServer;