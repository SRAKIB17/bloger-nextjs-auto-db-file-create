import React, { useState } from 'react';

const TextPost = ({ short_description, postBody, postBodyJs, postBodyCss, post_id, postRefMode, thumbnail }) => {
    //********************************************************************************* */
    // FOR MORE INFO /FULL POST SHOW BY ONCLICK AND.
    //********************************************************************************** */
    const [fullIframeShow, setFullIframeShow] = useState(false);
    // const heightHandle = async (id) => {

    //     try {
    //         const iframe = document.getElementById('previewIframeHeight' + id);
    //         // console.log(iframe.contentDocument.documentElement.scrollHeight)
    //         const darkMode = window.localStorage.getItem('dark')

    //         let link = document.createElement("link");
    //         link.href = "/api/styleIframe.css";
    //         link.rel = "stylesheet";
    //         link.type = "text/css";
    //         let doc = await iframe.contentDocument;

    //         if (darkMode) {
    //             doc.body.style.color = '#A9C5EF'
    //         }
    //         else {
    //             doc.body.style.color = ''
    //         }

    //         if (fullIframeShow) {
    //             iframe.style.height = 0 + 'px';
    //             setFullIframeShow(false)
    //         }
    //         else {
    //             let count = 0
    //             const showIframe = setInterval(() => {
    //                 iframe.contentDocument.head.append(link);
    //                 iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
    //                 if (count === 6) {
    //                     clearInterval(showIframe)
    //                 }
    //                 count++
    //             }, 100);
    //             setFullIframeShow(true)
    //         }

    //     }
    //     catch {

    //     }

    // }
    //****************************************************************************************** */
    //*WHEN IFRAME LOAD / PAGE RELOAD THEN AUTO MATIC THIS FUNCTION RUN AND HEADER ADD CSS STYLES
    //*1. VIDEO, DARK, LIGHT, (API/LINK/ BY POST ID)
    //****************************************************************************************** */
    const onloadIframeHeightStylesHandle = (e) => {
        let link = document.createElement("link");
        link.href = "/api/styleIframe.css";
        link.rel = "stylesheet";
        link.type = "text/css";
        e.target.contentDocument.head.append(link);


        //****************FOR JS COPY CODE ************* */
        const script = document.createElement("script");
        script.src = "/api/styleIframe.js?js=code-copy";
        script.async = true;

        e.target.contentDocument.head.append(script);
        e.target.contentDocument.body.append(script);

        let darkStyle = document.createElement("link");
        const darkMode = window.localStorage.getItem('dark')
        if (darkMode) {
            darkStyle.href = "/api/styleIframe.css?dark=true";
        }
        else {
            darkStyle.href = "/api/styleIframe.css?dark=false";
        }
        darkStyle.rel = "stylesheet";
        darkStyle.type = "text/css";
        let count = 0
        const iframe = e.target

        const showIframe = setInterval(() => {
            try {
                iframe.contentDocument.head.append(link);
            }
            catch {

            }
            if (count === 6) {
                try {
                    e.target.width = document.getElementById('postBodyCode' + e.target.id?.slice(19)).offsetWidth
                    iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
                    iframe.style.display = 'none'
                }
                catch {

                }
                clearInterval(showIframe)
            }
            count++
        }, 100);
        e.target.contentDocument.head.append(darkStyle);
    }
    // ******************************************* TOGGLE BUTTON AND SHOW OR HIDE IFRAME POST ************
    const showIframeDisplayHandle = (id) => {
        const iframe = document.getElementById('previewIframeHeight' + id);
        setFullIframeShow(!fullIframeShow)
        showCommentHandle(id)
        if (fullIframeShow) {
            iframe.style.display = 'none';
        }
        else {
            iframe.style.display = 'block';
        }


        let darkStyle = document.createElement("link");
        const darkMode = window.localStorage.getItem('dark')
        if (darkMode) {
            darkStyle.href = "/api/styleIframe.css?dark=true";
        }
        else {
            darkStyle.href = "/api/styleIframe.css?dark=false";
        }
        darkStyle.rel = "stylesheet";
        darkStyle.type = "text/css";
        iframe.contentDocument.head.append(darkStyle);
    }
    
    //************************************************************************************ */
    //********************FOR COMMENT AUTO SHOW AND SHOW********************************** */
    //************************************************************************************ */
    const showCommentHandle = (id) => {
        try {

            const showComment = document.getElementById('commentShow' + id)
            const commentForm = document.getElementById('commentForm' + id)
            const showCommentButton = document.getElementById('showCommentButton' + id)

            if (showComment.offsetHeight <= 2 && !fullIframeShow) {
                commentForm.style.height = '100%'
                try {
                    commentForm.childNodes[0].childNodes[0].style.borderTopWidth = '1px'
                }
                catch {

                }
                showComment.style.height = '500px'
                showCommentButton.className = 'btn-primary btn btn-xs  ml-2 '
            }
            else {
                showComment.style.height = '0px'
                commentForm.style.height = '0px'
                commentForm.childNodes[0].childNodes[0].style.borderTopWidth = '0px'
                showCommentButton.className = ' btn-outline btn btn-xs btn-primary ml-2 '
            }
        }
        catch {

        }
    }

    const iframePostFullBody = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/api/styleIframe.css" rel="stylesheet" type="text/css">
        <link href="/api/styleIframe.css?video=video" rel="stylesheet" type="text/css">
        <style>
        ${postBodyCss}
        </style>
    </head>
    <body>
        ${postBody}
        <script>
            ${postBodyJs}
        </script>
        <script src="/api/styleIframe.js?js=code-copy"></script>
    </body>
    </html>
    `
    return (
        <div className='mx-auto' id={'textPost' + post_id}>


            {/* ---------post body ----------------- */}
            <div className={' w-full h-fit transition-all text-justify'} id={'postBody' + post_id} style={{ width: '100%' }}>
                <div className='w-full' style={{ width: '100%' }}>
                    {
                        short_description?.slice(0, 1000)
                    }
                </div>

                {
                    fullIframeShow &&
                    <div className="card-actions justify-end">
                        <button className="link-primary font-semibold link-hover text-xs" onClick={() => showIframeDisplayHandle(post_id)}>
                            See Less
                        </button>
                    </div>
                }

                <iframe
                    // onUnload={unloadIframeHandle}
                    srcDoc={iframePostFullBody}
                    onLoad={onloadIframeHeightStylesHandle}
                    src={'/api/preview/' + post_id}
                    id={'previewIframeHeight' + post_id}
                    frameBorder="0"
                    scrolling="no"
                    style={{ width: '100%' }}
                >
                </iframe>
            </div>

            {/* ------------see more -------------------- */}
            {/* 
                                <div className="card-actions justify-end">
                                    <button className="link-primary font-semibold link-hover text-xs" onClick={() => profileNavigate('/story/' + post_id)}>
                                        See More
                                    </button>
                                </div> */}

            <div className="card-actions justify-end">
                <button className="link-primary font-semibold link-hover text-xs" onClick={() => showIframeDisplayHandle(post_id)}>
                    See {fullIframeShow ? 'Less' : 'More'}
                </button>
            </div>


            {/* ----thumbnail------------ */}
            {
                (postRefMode === 'text' && thumbnail) &&
                <div className='mt-4 mb-4'>
                    <figure>
                        <img src={thumbnail} alt="" className='w-full h-[200px] lg:h-[240px] rounded-md' />
                    </figure>
                </div>
            }
        </div>
    );
};

export default TextPost;