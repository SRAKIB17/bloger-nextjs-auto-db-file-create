import { useContext } from "react";
import { UserFullInfoProvider } from "../../pages/_app";
import private_access_token_client from "./api/verifyUser/private_access_token_client";
const jwt = require('jsonwebtoken')

const autoJwtTokenGenerateForUserOrGuest = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { user, user_details, isLoading } = useContext(UserFullInfoProvider);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { user_check_access_feature, guest_check_access_token, auto_jwt_token_generate_for_user_or_guest } = private_access_token_client()

    let access = {};
    if (user?.user) {
        access = {
            token: user_check_access_feature,
            roll: "user",
        }
    }
    else if (!user?.user) {
        access = {
            token: guest_check_access_token,
            roll: "guest",
        }
    }
    jwt.sign({ access }, auto_jwt_token_generate_for_user_or_guest, { expiresIn: '1d' }, (err, access) => {
        if (err) {
            location.reload()
        }
        sessionStorage.setItem('accessAutoG', access);
    });
};

export default autoJwtTokenGenerateForUserOrGuest;