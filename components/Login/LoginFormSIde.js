import React, { useState } from 'react';
import styles from '../profile/NewPost/NewPost.module.css'
import bgLogin from '../../public/loginBg.jpg'
import Login from './Login'
const RegisterFormFixed = () => {
    function closeFixesLogin() {
        document.getElementById("loginFixedForm").style.width = "0";
    }
    return (
        <div>
            <div id="loginFixedForm"
                style={{ backgroundImage: `url(${bgLogin?.src})`, backgroundSize: 'cover' }}
                className={styles.NewPostNav + ' bg-base-100 hideScrollBar'}
            >
                <div className='max-w-xl mx-auto shadow-2xl p-4 ' >
                    <a href="#" className={styles.closebtn} onClick={closeFixesLogin}>&times;</a>

                    <div>
                       <Login/>
                    </div>
                </div>
            </div>

        </div>
    );
};



export default RegisterFormFixed;