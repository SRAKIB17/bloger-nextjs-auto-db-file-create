/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ReactBtnList from '../hooks/comment_react/react/ReactBtnList';
import IframeImportDefault from './hooks/IframeImportDefault';
import TitleCat from './hooks/TitleCat';


const Default = ({ post, refetch }) => {

    const { _id, comments, category, image, postBodyCss, postBodyJs, postBody, postRefMode, post_id, post_title, short_description, thumbnail, time, userID } = post


    useEffect(() => {
        window.onclick = () => {
            try {
                const iframes = document.getElementsByTagName('iframe');
                for (const iframe of iframes) {
                    iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px'
                }
            }
            catch {

            }
        }
    }, [])
    const [showDescription, setDescription] = useState(short_description?.slice(0, 120))
    const showFullDescriptionHandle = () => {
        setDescription(showDescription?.length <= 120 ? short_description : short_description?.slice(0, 120))
    }

    const router = useRouter();

    const { iframePostFullBody } = IframeImportDefault({ post: post })
    // *****************FOR IFRAME *************
    const onloadIframeHeightStylesHandle = (e) => {
        let count = 0
        const iframe = e.target

        const iframeAutoHeight = () => {
            const iframes = document.getElementsByTagName('iframe');
            for (const iframe of iframes) {
                iframe.style.height = iframe?.contentWindow?.document?.documentElement?.scrollHeight + 'px'
            }
        }
        iframe.contentWindow.onmousemove = () => {
            iframeAutoHeight()
        }
        iframe.contentWindow.onresize = () => {
            iframeAutoHeight()
        }
        iframe.contentWindow.onclick = (e) => {
            iframeAutoHeight()
        }
        const showIframe = setInterval(() => {
            if (count === 6) {
                try {

                    iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
                    iframe.style.display = 'none'
                }
                catch {

                }
                clearInterval(showIframe)
            }
            count++
        }, 100);
    }


    // *****************FOR IFRAME READ CONTINUE *****************;
    const [iframeLoading, setIframeLoading] = useState(false);
    const [showFullFrame, setShowFullFrame] = useState(false)
    const autoHeightHandle = async (id) => {

        setShowFullFrame(!showFullFrame);
        setIframeLoading(true)
        try {
            const iframe = document.getElementById('iframePostPreview' + id);
            if (iframe.style.display == 'none') {
                iframe.style.display = 'block'
            }
            else {
                iframe.style.display = 'none'
            }
            let count = 0
            const showIframe = setInterval(() => {
                iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';

                if (count === 6) {
                    clearInterval(showIframe)
                }
                count++
            }, 100);


            setIframeLoading(false)
        }
        catch {
            setIframeLoading(false)
        }

    }
    return (
        <div className=' shadowEachPost rounded-sm p-4 sm:p-5 bg-gray-50' >

            <div className='flex flex-col md:flex-row gap-4 items-center'>
                {/* thumbnail */}

                <img
                    src={Boolean(thumbnail) ? thumbnail : '/blogThumbnailDefault.svg'}
                    alt=""
                    className=' postBodyThumbnail'
                />

                {/* **** Title And Description ************** */}
                <div className='postDescription'>
                    <TitleCat
                        post={post}
                    />
                    <div className='text-justify  ml-3'>
                        <div>
                            {showDescription}
                            {(showDescription?.length > 120) &&

                                <div>
                                    <button
                                        className='relative z-10 overflow-hidden w-full btn-lg bg-primary bg-opacity-10 rounded-md'
                                        onClick={() => autoHeightHandle(post_id)}
                                    >
                                        {
                                            !showFullFrame ? ' Continue Reading ' : "Finish"
                                        }
                                        <p className='absolute top-0 opacity-10 text-justify overflow-hidden whitespace-pre-line'>
                                            {showDescription}
                                        </p>
                                    </button>
                                </div>
                            }
                            <button onClick={() => {
                                showFullDescriptionHandle();
                                const iframe = document.getElementById('iframePostPreview' + post_id);
                                iframe.style.display = 'none'

                            }} className='text-blue-500 link-hover text-sm'>
                                &nbsp;  show {' ' + ((showDescription?.length <= 120) ? ' more' : 'less')}
                            </button>

                        </div>
                    </div>

                    <div className='mt-2'>
                        <ReactBtnList post={post} refetch={refetch} />
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <iframe
                    srcDoc={iframePostFullBody}
                    src={'/api/preview/' + post_id}
                    width="320"
                    height="240"
                    id={'iframePostPreview' + post_id}
                    onLoad={onloadIframeHeightStylesHandle}
                >
                </iframe>

                {/* <iframe
                    srcDoc={iframePostFullBody}
                    onLoad={onloadIframeHeightStylesHandle}
                    src={'/api/preview/' + post_id}
                    id={'iframePostPreview' + post_id}
                    frameBorder="0"
                    scrolling="no"
                    className='w-full'

                >
                </iframe> */}
            </div>
        </div >
    );
};

export default Default;