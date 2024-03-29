import jwtTokenVerifyServer from "./jwtTokenVerifyServer";

const verifyUserAndAccessFeatureServer = async (req) => {
    const { email } = req.query
    const emailToken = req.headers?.token
    const getTokenEmail = jwtTokenVerifyServer(emailToken, process.env.LOGIN_SIGNUP_ACCESS_API)?.jwtInfo?.email;
    const token = await req?.headers?.access_token;
    const tokenDetails = jwtTokenVerifyServer(token, process.env.AUTO_JWT_TOKEN_GENERATE_FOR_USER_OR_GUEST)?.access;
    const accessToken = tokenDetails?.token;
    const roll = tokenDetails?.roll;
    if ((email === getTokenEmail && roll === 'user') && (accessToken === process.env.USER_CHECK_ACCESS_FEATURE)) {
        return true
    }
    else {
        return false
    }
};

export default verifyUserAndAccessFeatureServer;