import React from 'react';

const logOutWhenGetErr = () => {
    const logOutHandler = () => {
        localStorage.removeItem('token')
        document.cookie = `login=`
    }
    return{logOutHandler}
};

export default logOutWhenGetErr;