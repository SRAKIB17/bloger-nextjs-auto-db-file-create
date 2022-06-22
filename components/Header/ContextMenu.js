import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const ContextMenu = () => {
    const [show, setShow] = useState(null);
    const [position, setPosition] = useState([])
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
            console.log(getContextMenu)
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
                </ul>
            </div>

        </div>
    );
};

export default ContextMenu;