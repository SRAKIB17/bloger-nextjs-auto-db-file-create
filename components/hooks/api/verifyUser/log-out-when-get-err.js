import React from 'react';

const logOutWhenGetErr = () => {
    const logOutHandler = () => {
        localStorage.removeItem('token')
        document.cookie = `login=`
        location.reload()
    }
    return{logOutHandler}
};

export default logOutWhenGetErr;