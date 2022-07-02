import React from 'react';

const GuestCommentLikeLogin = () => {
   
    return (
        <div className='pb-4 pt-5 rounded-md flex items-center justify-center top-[60px] bg-base-100 shadow-md right-[-200px]' id='autoLoginShow'>
            <div className="w-full max-w-[400px] mx-auto lg:max-w-xl ">
                <div className="p-4 border-dashed border-4 rounded-md flex max-w-xs mx-auto flex-col gap-2">
                    <div>
                        <input type="text" placeholder="email" className="input input-xs input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div>
                        <input type="text" placeholder="password" className="input-xs input input-bordered input-primary max-w-xs w-full" />

                    </div>
                    <div className="flex flex-col">
                        <button className="btn btn-primary btn-xs">Login</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GuestCommentLikeLogin;