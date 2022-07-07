import React, { useState } from 'react';
import styles from '../profile/NewPost/NewPost.module.css'
import bgLogin from '../../public/loginBg.jpg'
const RegisterFormFixed = () => {
    function closeFixesLogin() {
        document.getElementById("loginFixedForm").style.width = "0";
    }

    const [register, setRegister] = useState(true);
    const registerHandleButton = () => {
        setRegister(!register)
    }
    const resetPassword = () => {
        setRegister(!register)
    }

    const loginOrRegisterHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        if (register) {
            const form = {
                email, password
            }
            console.log(form)
        }
        else if (!register) {
            const form = {
                email, password, name
            }
            console.log(form)
        }
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
                            <h1 className='text-center text-2xl font-bold text-white'>
                                {
                                    register ? 'Login' : 'Register'
                                }
                            </h1>
                            <div className='p-8'>
                                <form className=" flex gap-2 flex-col" onSubmit={loginOrRegisterHandler}>
                                    {
                                        register ||
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                id='name'
                                                className="input rounded-3xl input-bordered input-primary w-full"
                                            />
                                        </div>
                                    }
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="email"
                                            id='email'
                                            className="input rounded-3xl input-bordered input-primary w-full"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            id='password'
                                            placeholder="password"
                                            className="input rounded-3xl input-bordered input-primary w-full"
                                        />

                                    </div>
                                    <div className="flex flex-col">
                                        <button className="btn btn-primary rounded-3xl font-light text-lg">
                                            {
                                                register ? 'Login' : 'Register'
                                            }
                                        </button>
                                    </div>
                                </form>
                                {
                                    register &&
                                    <label className="label">
                                        <button className="text-sm label-text-alt link-hover text-white font-light">
                                            Forgot password? (this is coming soon)
                                        </button>
                                    </label>
                                }
                                <label className="label">

                                    <button onClick={registerHandleButton} className="text-sm label-text-alt link-hover text-white font-light">
                                        {
                                            !register ? "Already have an account →" : " Create a account →"
                                        }
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