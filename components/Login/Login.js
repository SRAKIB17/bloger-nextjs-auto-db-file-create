import React from 'react';
import { } from '../ReactRSIcon/index'
import avatar from '../../public/loginAvatar.png'
import Image from 'next/image'

const Login = () => {
    return (
        <div>
            <div className=" bg-base-100 flex flex-col md:flex-row justify-between items-center lg:pt-20">

                <div className="w-full max-w-[400px] mx-auto hidden md:block">

                    <Image src={avatar} layout='fixed' alt='' />

                </div>

                <div className="w-full max-w-[400px] mx-auto lg:max-w-xl">
                    <div className="p-8 flex gap-2">
                        <div>
                            <input type="text" placeholder="email" className="input input-bordered input-primary " />
                        </div>
                        <div>
                            <input type="text" placeholder="password" className="input input-bordered input-primary " />

                        </div>
                        <div className="flex flex-col">
                            <button className="btn btn-primary">Login</button>

                        </div>


                    </div>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
            </div>
        </div >
    );
};

export default Login;