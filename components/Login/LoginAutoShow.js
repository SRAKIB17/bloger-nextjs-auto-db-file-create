import React from 'react';

const LoginAutoShow = () => {
    setTimeout(() => {
        try {
            const getAutoShowLoginPage = sessionStorage.getItem('autoLoginShowFrom')
            console.log(getAutoShowLoginPage)
            if (!getAutoShowLoginPage) {
                document.getElementById('autoLoginShow').style.right = '0px'
                document.getElementById('autoLoginShow').style.top = '60px'

            }
        }
        catch {

        }
    }, 5000);

    const hiddenAutoLoginShow = () => {
        document.getElementById('autoLoginShow').style.right = '-500px'
        sessionStorage.setItem('autoLoginShowFrom', true)
    }
    return (
        <div className='onClickProfileMenu rounded-md fixed top-[60px] bg-base-100 shadow-md right-[-200px]' id='autoLoginShow'>
            <div className="w-full max-w-[400px] mx-auto lg:max-w-xl">
                <div>
                    <a href="#" onClick={hiddenAutoLoginShow} className='relative top-1 left-2 text-2xl hover:text-[grey]'>&times;</a>

                </div>
                <div className="p-4 border-dashed border-4 rounded-md flex gap-2">
                    <div>
                        <input type="text" placeholder="email" className="input input-xs input-bordered input-primary " />
                    </div>
                    <div>
                        <input type="text" placeholder="password" className="input-xs input input-bordered input-primary " />

                    </div>
                    <div className="flex flex-col">
                        <button className="btn btn-primary btn-xs">Login</button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginAutoShow;