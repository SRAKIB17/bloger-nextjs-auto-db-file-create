

const jwtTokenVerify = (token) => {
    try {
        return jwt.verify(token, process.env.LOGIN_SIGNUP_ACCESS_API)
    }
    catch (err) {
        return err;
    }
};

export default jwtTokenVerify;