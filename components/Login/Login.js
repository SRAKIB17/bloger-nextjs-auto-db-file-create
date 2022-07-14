import React, { useState } from 'react';
import styles from '../profile/NewPost/NewPost.module.css'
import bgLogin from '../../public/loginBg.jpg'
import axios from 'axios'
import { useRouter } from 'next/router';
import useUserCheck from '../hooks/checkUser/useUserCheck';
import LoadingFlowCircle from '../LoadingFlowCircle';
const crypto = require("crypto");


const RegisterFormFixed = () => {
    const { user, isLoading } = useUserCheck()
    const router = useRouter();
    const { return_url } = router.query
    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }
    const [loginLoading, setLoginLoading] = useState(false)


    const [register, setRegister] = useState(true);
    const registerHandleButton = () => {
        setRegister(!register)
    }
    const resetPassword = () => {
        setRegister(!register)
    }
    const [errMsg, setErrMsg] = useState('')
    const loginOrRegisterHandler = async (e) => {
        setLoginLoading(true)
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value.toLowerCase();
        let data = undefined;
        try {
            // (A). IF USER REGISTER THIS IS LOGIN SYSTEM
            if (register) {
                const form = {
                    email, password
                }
                data = await axios.post('/api/login_signup/login', form, {
                    headers: {
                        'login_api_code': `dcab4733a9ce28bbb1a7a66d80a4097b`
                    }
                });
                console.log(data)
            }

            //(B). IF USER ARE NEW HERE REGISTER SYSTEM
            else if (!register) {
                const form = {
                    email, password, name: e.target.name.value, gender: e.target.gender.value
                }
                data = await axios.post('/api/login_signup/signup', form, {
                    headers: {
                        'login_api_code': `dcab4733a9ce28bbb1a7a66d80a4097b`
                    }
                });

            }
            //IF USER SUCCESSFULLY LOGIN OR SIGNUP THIS CONDITION RUN AND SAVE LOCALSTORAGE AND COOKIES
            if (data?.data?.message === 'success') {
                const { token, login_info } = data?.data;
                localStorage.setItem('token', token)
                document.cookie = (`login=${login_info}`)
                setErrMsg('Welcome')
                setTimeout(() => {
                    navigate(return_url ? return_url : '/')
                }, 500)
            }
            if (data?.data?.message === 'error') {
                setErrMsg(data?.data?.error)
            }
            setLoginLoading(false)
        }
        catch {
            setLoginLoading(false)
        }

    }


    return (
        <div>
            <div id="loginFixedForm"
                style={{ backgroundImage: `url(${bgLogin?.src})`, backgroundSize: 'cover' }}
            >
                <div className='max-w-xl mx-auto shadow-2xl p-4 ' >

                    <div>
                        <div className="w-full max-w-[400px] mx-auto h-[100vh] lg:max-w-xl">
                            <h1 className='text-center text-2xl font-bold text-white'>
                                {
                                    register ? 'Login' : 'Register'
                                }
                            </h1>
                            <div className='p-8'>
                                <form className=" flex gap-2 flex-col" onSubmit={loginOrRegisterHandler}>
                                    <p className='text-red-300'>
                                        {
                                            errMsg
                                        }
                                    </p>
                                    {
                                        register ||
                                        <>

                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Name"
                                                    id='name'
                                                    className="input rounded-3xl input-bordered input-primary w-full"
                                                    required
                                                />
                                            </div>
                                            <div className='flex gap-1 items-center'>
                                                <select id='Gender' name='gender' className="rounded-3xl select select-primary select-bordered select-md w-full" required>
                                                    <option value='Male'>Male</option>
                                                    <option value='Female'>Female</option>
                                                </select>
                                            </div>
                                        </>
                                    }
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="email"
                                            id='email'
                                            className="input rounded-3xl input-bordered input-primary w-full"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            id='password'
                                            placeholder="password"
                                            className="input rounded-3xl input-bordered input-primary w-full"
                                            required
                                        />

                                    </div>
                                    <div className="flex flex-col">
                                        <button className="btn btn-primary rounded-3xl font-light text-lg text-white">
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
                {/* FOR LOADING FOR LOGIN */}
                {
                    loginLoading && 
                    <div className='fixed top-[5x] z-[100]'>
                        <LoadingFlowCircle/>
                    </div>
                }
            </div>

        </div>
    );
};



export default RegisterFormFixed;