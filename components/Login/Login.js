import React, { useContext, useState } from 'react';
import bgLogin from '../../public/loginBg.jpg'
import axios from 'axios'
import { useRouter } from 'next/router';
import LoadingFlowCircle from '../LoadingFlowCircle';

import private_access_token_client from '../hooks/hooks/private_access_token_client';
import { PreviewOff, PreviewOn } from '../ReactRSIcon';
import { UserFullInfoProvider } from '../../pages/_app';

const RegisterFormFixed = () => {
    const { user, user_details, isLoading } = useContext(UserFullInfoProvider)

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
        const { login_api_token } = private_access_token_client()
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
                        'login_api_code': login_api_token
                    }
                });
            }

            //(B). IF USER ARE NEW HERE REGISTER SYSTEM
            else if (!register) {
                const form = {
                    email, password, name: e.target.name.value, gender: e.target.gender.value
                }
                data = await axios.post('/api/login_signup/signup', form, {
                    headers: {
                        'login_api_code': login_api_token
                    }
                });

            }
            //IF USER SUCCESSFULLY LOGIN OR SIGNUP THIS CONDITION RUN AND SAVE LOCALSTORAGE AND COOKIES
            if (data?.data?.message === 'success') {
                const { token, login_info } = data?.data;
                localStorage.setItem('token', token)
                document.cookie = (`login=${login_info}`)
                setErrMsg('Welcome')
                location.reload()
                navigate(return_url ? return_url : '/')

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


    // FOR SHOW PASSWORD HANDLER USESTATE;
    const [showPass, setShowPass] = useState(false)
    const showPasswordHandler = () => {
        setShowPass(!showPass)
    }
    return (
        <div>
            <div id="loginFixedForm"
                style={{ backgroundImage: `url(${bgLogin?.src})`, backgroundSize: 'cover' }}
            >
                <div className='max-w-xl mx-auto shadow-2xl p-4 ' >
                    {/* FOR LOADING FOR LOGIN */}
                    {
                        loginLoading &&
                        <div className=' relative flex items-center justify-center z-[1000]'>
                            <div className='absolute top-0 pb-40 pt-40'>
                                <LoadingFlowCircle />
                            </div>
                        </div>
                    }
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
                                    <div className='relative'>
                                        <input
                                            type={showPass ? 'text' : "password"}
                                            id='password'
                                            placeholder="password"
                                            className="input rounded-3xl input-bordered input-primary w-full"
                                            required
                                        />
                                        <div className='absolute top-[30%] right-0 mr-5'>
                                            <div className='cursor-pointer' onClick={showPasswordHandler}>
                                                {

                                                    showPass ? <PreviewOff size='20' /> : <PreviewOn size='20' />
                                                }
                                            </div>
                                        </div>

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

            </div>

        </div>
    );
};



export default RegisterFormFixed;