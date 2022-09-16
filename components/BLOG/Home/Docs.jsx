import { useRouter } from 'next/router';
import React from 'react';

const Docs = () => {
    const router = useRouter()
    const navigate = (path) => {
        router.replace(path)
    }
    return (
        <div className='mt-4 max-w-sm mx-auto '>
            <span className='block p-4 text-justify'>
                Users can post. Full customization will support javascript, HTML, and CSS. Shortcut HTML emmet. Bootstrap and Tailwind will support. Comment, and react to a post , messaging, CDN, SVG services and more
            </span>
            <div className='flex gap-4 items-center justify-center '>
                <button
                    className='btn bg-[#0070F3] text-white  hover:bg-[#0e7eff]'
                    onClick={() => navigate('docs')}
                >
                    Documentation
                </button>
                <button className='btn bg-base-300 ' onClick={() => navigate('/blog/post/new')}>
                    Create new post
                </button>
            </div>
        </div>
    );
};

export default Docs;