import React, { useEffect, useState } from 'react';

const VideoPost = ({short_description, postBody, post_id }) => {

    const [shortDescriptionVideo, setShortDescriptionVideo] = useState('');
    const [seeMorePostShow, setSeeMorePostShow] = useState(false);

    useEffect(() => {
        setShortDescriptionVideo(short_description?.slice(0, 100))
    }, [short_description])

    const moreShortDescriptionVideoHandle = () => {
        setSeeMorePostShow(!seeMorePostShow)
        if (shortDescriptionVideo.length <= 100) {
            setShortDescriptionVideo(short_description)
        }
        else {
            setShortDescriptionVideo(short_description?.slice(0, 100))
        }
    }
    const videoPostIframeAutoOnloadHandle = (e) => {
        e.target.height = e.target.contentWindow.document.documentElement.scrollHeight + 'px'
        let link = document.createElement("link");
        link.href = "/api/styleIframe.css?video=video";
        link.rel = "stylesheet";
        link.type = "text/css";
        e.target.contentDocument.head.append(link);
    }
    return (
        <div>
            <div className='text-justify mb-2'>
                {
                    shortDescriptionVideo
                }
                {
                    shortDescriptionVideo?.length <= 100 && <>.....</>
                }
                {/* -------------see more short description----------- */}
                {
                    short_description?.length >= 100 &&
                    <div className="card-actions justify-end text-xs">
                        <button className="link-primary font-semibold link-hover" onClick={moreShortDescriptionVideoHandle}>
                            See {seeMorePostShow ? 'Less' : 'More'}
                        </button>
                    </div>
                }
            </div>

            {/*----------------------------- for video code --------------------- */}
            <div className='mx-auto' id='videoPost' >

                <iframe
                    onLoad={videoPostIframeAutoOnloadHandle}
                    src='/api/preview'
                    srcDoc={postBody}
                    id={'previewIframeHeight' + post_id}
                    frameBorder="0"
                    scrolling="no"
                    height='250'
                    className={' w-full'}
                >
                </iframe>
            </div>
        </div>
    );
};

export default VideoPost;