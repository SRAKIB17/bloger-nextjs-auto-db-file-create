import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NewPost from '../profile/NewPost/NewPost';

const ContextMenu = () => {
    const [show, setShow] = useState(null);
    const [position, setPosition] = useState([])

    const OpenNewPost = () => {
        document.getElementById("newPostClose").style.width = "100%";
    }

    useEffect(() => {
        document.body.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            const pageX = e.clientX;
            const pageY = e.clientY;
            const getContextMenu = document.getElementById('contextMenu');
            getContextMenu.style.display = 'block'
            getContextMenu.style.top = pageY + 'px';
            getContextMenu.style.left = pageX + 'px';
            console.log(pageX, pageY)
            console.log(e.target.href)
        })
        document.onclick = (e) => {
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
        }
        window.onkeypress = (e) => {
            if (e.key === 'F12') {
                e.preventDefault()
                return false
            }
        }
    }, [])

    return (
        <div>

            <div className='absolute hidden' id='contextMenu' >
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