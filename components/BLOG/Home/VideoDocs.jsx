/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React from 'react';

const VideoDocs = () => {
    const router = useRouter()
    const navigate = path => {
        router.replace(path)
    }
    return (
        <div>
            <div className='flex gap-4 md:justify-around mt-16 flex-col md:flex-row justify-center items-center'>

                <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                    <video autoPlay loop >
                        <source src='/homeGif/emmet.mp4' />
                    </video>
                    <div className="card-body" >
                        <h2 className="card-title">Shortcut Emmet</h2>
                        <ul className='list-decimal ml-4 text-primary'>
                            <li>Edit Fast</li>
                            <li>Live View</li>
                            <li>Upload Code</li>
                        </ul>
                    </div>
                </div>

                {/* emoji */}
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src="/homeGif/emoji.webp" alt="" className='w-full' />
                    </figure>
                    <div className="card-body" >
                        <h2 className="card-title">Support Emoji</h2>
                        <ul className='list-decimal ml-4 text-primary'>
                            <li>Emoji Support</li>
                            <li>Comment</li>
                            <li>Like, Unlike , Love React</li>
                        </ul>
                    </div>
                </div>
                {/* Inbox */}
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src="/homeGif/message.webp" alt="" className='w-full' />
                    </figure>
                    <div className="card-body" >
                        <h2 className="card-title">Support Emoji</h2>
                        <ul className='list-decimal ml-4 text-primary'>
                            <li>Emoji Support</li>
                            <li>Message</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default VideoDocs;