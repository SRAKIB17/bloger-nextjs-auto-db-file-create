import React from 'react';

const ProfilePicture = () => {
    return (
        <div>
            <div>
                <ul className="menu menu-horizontal p-0 flex items-center md:absolute md:right-0 md:top-0">

                    <li>
                        <button>
                            <div className="avatar ">
                                <div className="w-8 rounded-full ring ring-inherit ring-offset-base-100 ring-offset-1">
                                    <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                                </div>
                            </div>
                        </button>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default ProfilePicture;