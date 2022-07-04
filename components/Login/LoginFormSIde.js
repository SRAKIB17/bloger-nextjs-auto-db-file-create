import React from 'react';
import styles from '../profile/NewPost/NewPost.module.css'
import bgLogin from '../../public/loginBg.jpg'
console.log(bgLogin)
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
                        <div className="w-full max-w-[400px] mx-auto h-[100vh] lg:max-w-xl">
                            <h1 className='text-center text-2xl font-bold text-white'>Login</h1>
                            <div className="p-8 flex gap-2 flex-col">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="input rounded-3xl input-bordered input-primary w-full"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="email"
                                        className="input rounded-3xl input-bordered input-primary w-full"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        placeholder="password"
                                        className="input rounded-3xl input-bordered input-primary w-full"
                                    />

                                </div>
                                <div className="flex flex-col">
                                    <button className="btn btn-primary rounded-3xl">Login</button>
                                </div>
                                <label className="label">
                                    <button className="text-sm label-text-alt link-hover text-white">
                                        Forgot password?
                                    </button>
                                </label>
                                <label className="label">

                                    <button className="text-sm label-text-alt link-hover text-white">
                                        Create a account →
                                    </button>
                                </label>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};



export default RegisterFormFixed;