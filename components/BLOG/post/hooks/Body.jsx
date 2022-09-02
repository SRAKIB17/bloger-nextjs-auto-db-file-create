/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Body = ({ post }) => {
    const { _id, comments, category, image, postBodyCss, postBodyJs, postBody, postRefMode, post_id, post_title, short_description, thumbnail, time, userID } = post


    //********************************************************************************* */
    // FOR MORE INFO /FULL POST SHOW BY ONCLICK AND.
    //********************************************************************************** */
    const [fullIframeShow, setFullIframeShow] = useState(false);
    const [iframeLoading, setIframeLoading] = useState(false)
    const autoHeightHandle = async (id) => {

        setIframeLoading(true)
        try {
            const iframe = document.getElementById('iframePostPreview' + id);
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
    //****************************************************************************************** */
    //*WHEN IFRAME LOAD / PAGE RELOAD THEN AUTO MATIC THIS FUNCTION RUN AND HEADER ADD CSS STYLES
    //*1. VIDEO, DARK, LIGHT, (API/LINK/ BY POST ID)
    //****************************************************************************************** */


    const onloadIframeHeightStylesHandle = (e) => {
        let count = 0
        const iframe = e.target
        try {
            const iframeAutoHeight = () => {
                const iframes = document.getElementsByTagName('iframe');
                for (const iframe of iframes) {
                    iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px'
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

        }
        catch {

        }

        const showIframe = setInterval(() => {
            if (count === 6) {
                try {
                    // e.target.width = document.getElementById('postBodyCode' + e.target.id?.slice(19)).offsetWidth - 30;
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
    // ******************************************* TOGGLE BUTTON AND SHOW OR HIDE IFRAME POST ************
    const showIframeDisplayHandle = (id) => {
        const iframe = document.getElementById('iframePostPreview' + id);
        autoHeightHandle(id)

        setFullIframeShow(!fullIframeShow)
        if (fullIframeShow) {
            iframe.style.display = 'none';
        }
        else {
            iframe.style.display = 'block';
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

        <link href="/code_viewer_jquery/themes/css/blackboard.css" rel="stylesheet" type="text/css" media="screen">
        <style>
            *::-webkit-scrollbar {
              width: 5px;
              height: 5px;
            }
            pre{
              overflow: scroll;
              width: 100%;
              height: 100%;
            }
            *::-webkit-scrollbar-thumb {
              background-color: rgb(183, 183, 183);
              border-radius: 10px;
            }
            
            *::-webkit-scrollbar-button {
              height: 70px;
              visibility: hidden;
            }
        </style>
    </head>
    <body>
        ${postBody}
        <script>
            ${postBodyJs}
        </script>
        <script src="/api/styleIframe.js?js=code-copy"></script>

    <script src="/code_viewer_jquery/dist/rainbow.js"></script>
    <script src="/code_viewer_jquery/src/language/generic.js"></script>

    <!-- FOR C LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/c.js"></script>

    <!-- FOR CoffeeScript LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/coffeescript.js"></script>

    <!-- FOR C Sharp LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/csharp.js"></script>

    <!-- FOR CSS LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/css.js"></script>

    <!-- FOR D LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/d.js"></script>

    <!-- FOR GO LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/go.js"></script>

    <!-- FOR Haskell LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/haskell.js"></script>

    <!-- FOR Html LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/html.js"></script>

    <!-- FOR JAVASCRIPT LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/javascript.js"></script>

    <!-- FOR JSON LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/json.js"></script>

    <!-- FOR Lua LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/lua.js"></script>

    <!-- FOR PHP LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/php.js"></script>

    <!-- FOR Python LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/python.js"></script>

    <!-- FOR R LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/r.js"></script>

    <!-- FOR RUBY LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/ruby.js"></script>

    <!-- FOR RUBY LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/scheme.js"></script>

    <!-- FOR RUBY LANGUAGE -->
    <script src="/code_viewer_jquery/src/language/shell.js"></script>
    </body>
    </html>
    `



    const router = useRouter();



    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }
    return (
        <div>
            <div>
                <div className='clear-both'>
                    {
                        fullIframeShow &&
                        <div className="card-actions justify-end">
                            <button className="link-primary font-semibold link-hover text-xs" onClick={() => showIframeDisplayHandle(post_id)}>
                                See Less
                            </button>
                        </div>
                    }

                    {
                        iframeLoading &&
                        <div className='flex justify-center items-center p-4'>
                            <img src='/loading_iframe.gif' alt="" />
                        </div>
                    }

                    <iframe
                        srcDoc={iframePostFullBody}
                        onLoad={onloadIframeHeightStylesHandle}
                        src={'/api/preview/' + post_id}
                        id={'iframePostPreview' + post_id}
                        frameBorder="0"
                        scrolling="no"
                        height='0'
                        className='w-full'
                    >
                    </iframe>
                </div>
            </div>
            <div>

                <div className="card-actions justify-end">
                    <button className="link-primary font-semibold link-hover text-xs" onClick={() => showIframeDisplayHandle(post_id)}>
                        See {fullIframeShow ? 'Less' : 'More'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Body;