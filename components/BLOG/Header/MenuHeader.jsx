import { useRouter } from 'next/router';
import React from 'react';

const MenuHeader = () => {
    const router = useRouter()
    const navigate = (path) => {
        router.replace(path)

    }
    return (
        <div>
            <div className="flex">

                <div className="flex items-center">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                stroke="white"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="3"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <button onClick={() => navigate('/')}>
                                    Home
                                </button>
                            </li>
                            <li>
                                <button onClick={() => navigate('/blog/post')}>
                                    Post
                                </button>
                                <button onClick={() => navigate('/blog/post')}>
                                    Post
                                </button>
                            </li>

                            <li>
                                <button onClick={() => navigate('/')}>
                                    Videos
                                </button>
                            </li>
                            <li tabIndex="0">
                                <a className="justify-between">
                                    Category
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2 bg-base-100">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onClick={() => navigate('/')}>
                                    Services
                                </button>
                            </li>
                            <li>
                                <button onClick={() => navigate('/docs')}>
                                    Docs
                                </button>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>


                <div className="navbar-center hidden lg:flex text-white">

                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <button onClick={() => navigate('/')}>
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => navigate('/blog/post')}>
                                Post
                            </button>
                        </li>
                        <li>
                            <button onClick={() => navigate('/')}>
                                Videos
                            </button>
                        </li>
                        <li tabIndex="0">
                            <a className="justify-between">
                                Category
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul
                                className="p-2 bg-primary rounded-none"
                            >
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li>
                            <button onClick={() => navigate('/')}>
                                Services
                            </button>
                        </li>
                        <li>
                            <button onClick={() => navigate('/docs')}>
                                Docs
                            </button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default MenuHeader;