import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NewPost from '../profile/NewPost/NewPost';

const ContextMenu = () => {


    const OpenNewPost = () => {
        document.getElementById("newPostClose").style.width = "100%";
    }

    useEffect(() => {
        document.body.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            const pageX = e.clientX;
            const pageY = e.clientY;
            const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const getContextMenu = document.getElementById('contextMenu');
            getContextMenu.style.display = 'block'
            getContextMenu.style.top = pageY + windowScroll + 'px';
            getContextMenu.style.left = pageX + 'px';
        })
        document.onclick = (e) => {
            const getProfileMenu = document.getElementById('profileLogOut');
            getProfileMenu.style.marginTop = '-1000px'
            const getContextMenu = document.getElementById('contextMenu');
            getContextMenu.style.display = 'none'
        }
        window.onkeyup = (e) => {
            if (e.key === 'F12') {
                e.preventDefault()
                return false
            }
        }
        window.onkeydown = (e) => {
            if (e.key === 'F12') {
                e.preventDefault()
                return false
            }
            if (e.ctrlKey == true && (e.which == '61' || e.which == '107' || e.which == '173' || e.which == '109' || e.which == '187' || e.which == '189')) {
                e.preventDefault()
                return false
            }
        }
        window.onkeypress = (e) => {
            if (e.key === 'F12') {
                e.preventDefault()
                return false
            }
        }


        document.addEventListener('wheel', (event) => {
            if (event.ctrlKey == true) {
                event.preventDefault();
            }
        }, { passive: false });
    }, [])

    return (
        <div>

            <div className='absolute hidden z-[100]' id='contextMenu' >
                <ul className="menu bg-base-300 p-2 rounded-box w-40">
                    <li><Link href='/story'>Story</Link></li>
                    <li><Link href='/profile'>Profile</Link></li>
                    <li>
                        <button className='btn btn-sm btn-primary rounded-3xl btn-outline'
                            onClick={() => { OpenNewPost() }}
                        >
                            New Post
                        </button>
                    </li>
                </ul>
            </div>

            <NewPost />
        </div>
    );
};

export default ContextMenu;