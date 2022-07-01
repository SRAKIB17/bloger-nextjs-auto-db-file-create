import React, { useEffect, useState } from 'react';

const CommonSetting = () => {
    const [hideApk, setHideApk] = useState(false)
    const hideAndroidAppsHandle = (e) => {
        if (e.target.checked) {
            window.localStorage.setItem('apkHide', true);
            setHideApk(true)
        }
        else {
            setHideApk(false)
            window.localStorage.removeItem('apkHide');
        }
    }
    useEffect(() => {
        const getApkSessionStorage = window.localStorage.getItem('apkHide');
        if (getApkSessionStorage === 'true') {
            document.getElementById('downloadApkSocial').style.left = '-900px';
            setHideApk(true)
        }
    }, [])
    return (
        <div>
            <div className='shadow-md h-full max-w-md mx-auto p-4 rounded-md'>
                <h1 className='text-primary text-xl text-center p-4'>Common Settings</h1>
                <div>
                    {/* for   Hide the Android apps link until I want to */}
                    <div className="form-control shadow-md p-2 rounded-md">
                        <label className="label cursor-pointer">
                            <span className="label-text">
                                Hide the Android apps link until I want to
                            </span>
                            <input
                                type="checkbox"
                                onClick={hideAndroidAppsHandle}
                                className="toggle toggle-primary"
                                checked={hideApk} />
                        </label>
                    </div>
                    <div className="form-control shadow-md p-2 rounded-md">
                        <label className="label cursor-pointer">
                            <span className="label-text">
                                Hide the Android apps link until I want to
                            </span>
                            <input
                                type="checkbox"
                                onClick={hideAndroidAppsHandle}
                                className="toggle toggle-primary"
                                 />
                        </label>
                    </div>
                    <div className="form-control shadow-md p-2 rounded-md">
                        <label className="label cursor-pointer">
                            <span className="label-text">
                                Hide the Android apps link until I want to
                            </span>
                            <input
                                type="checkbox"
                                onClick={hideAndroidAppsHandle}
                                className="toggle toggle-primary"
                                />
                        </label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CommonSetting;