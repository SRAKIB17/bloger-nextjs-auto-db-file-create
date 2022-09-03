/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const SinglePostBody = ({ post }) => {
    const { _id, comments, category, image, postBodyCss, postBodyJs, postBody, postRefMode, post_id, post_title, short_description, thumbnail, time, userID } = post


    //********************************************************************************* */
    // FOR MORE INFO /FULL POST SHOW BY ONCLICK AND.
    //********************************************************************************** */

    const [iframeLoading, setIframeLoading] = useState(false)
    const autoHeightHandle = async (id) => {
        setIframeLoading(true)
        try {
            const iframe = document.getElementById('previewIframeHeight' + id);
            // console.log(iframe.contentDocument.documentElement.scrollHeight)


            let count = 0
            const showIframe = setInterval(() => {

                iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
                if (count === 10) {
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
        const showIframe = setInterval(() => {

            if (count === 6) {
                try {
                    // e.target.width = document.getElementById('postBodyCode' + e.target.id?.slice(19)).offsetWidth - 30;
                    iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
                }
                catch {

                }
                clearInterval(showIframe)
            }
            count++
        }, 100);
    }


    const [theme, setTheme] = useState('');
    useEffect(() => {
        setTheme(localStorage.getItem('heighLightTheme'))
    }, [])





    const iframePostFullBody = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <link href="/code_viewer_jquery/copy-code.css" rel="stylesheet" type="text/css"/>

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/api/styleIframe.css" rel="stylesheet" type="text/css"/>
        <link href="/api/styleIframe.css?video=video" rel="stylesheet" type="text/css">
        <style>
        ${postBodyCss}
        </style>

        <link href="/code_viewer_jquery/themes/css/${theme ? theme : 'blackboard.css'}" rel="stylesheet" type="text/css" media="screen">
        <style>
            pre::-webkit-scrollbar {
              width: 5px;
              height: 10px;
            }
            pre{
              overflow: scroll;
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
            .copyCodeButton {
                border: 1px solid #dbdbdb;
                border-radius: .375em;
                box-shadow: none;
                box-sizing: border-box;
                cursor: pointer;
                padding: calc(.5em - 1px) 1em;
                text-align: center;
                touch-action: manipulation;
                margin: 3px;
                background-color: #0080ff;
                color: white;
                font-size: 12px;
            
            }
            
            .copyCodeButton:active {
                background-color: #3096fc;
                border-color: #4a4a4a;
                outline: 1px #F90143 solid;
            }
            
            .copyCodeButton:focus {
                border-color: #485fc7;
            }
            
            .copyCodeButton:hover {
                border-color: #b5b5b5;
            }
            
            .copyCodeButton:focus:not(:active) {
                box-shadow: rgba(72, 95, 199, .25) 0 0 0 .125em;
            }
        </style>
      
    </head>
    <body>
        ${postBody}
        <script>
            ${postBodyJs}
        </script>

       

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

    <script>
       // const getPre = document.getElementsByTagName("pre")
       // for (const pre of getPre) {
       //     const button = document.createElement('button');
       // 
       //     const textarea = document.createElement('textarea');
       //     
       //     if (!(pre.parentElement == document.body)) {
       //         const parentElement = pre.parentElement
       //         parentElement.style.display = 'flex';
       //         button.style.width = 'fit-content'
       //     
       //     console.log(parentElement)
       //         parentElement.style.flexDirection = 'column-reverse'
       //     
       //         button.innerText = 'copy'
       //         button.addEventListener('click', (event) => {
       //             const buttonParent = event.target.parentElement
       //             const textareaCode = buttonParent.querySelector('textarea')
       //             textareaCode.select()
       //             document.execCommand('copy')
       //         })
       //         textarea.innerHTML = pre.innerText;
       //         textarea.style.position = 'absolute'
       //         textarea.style.left = '-10000000000000000px'
       //         textarea.cp
       //         button.classList.add('copyCodeButton')
       //         parentElement.append(textarea)
       //         parentElement.append(button)
       //     
       //     }
       // 
       // }
    </script>

    </body>
    </html>
    `

    const router = useRouter();



    const navigate = (path) => {
        router.replace(path)
    }
    return (
        <div>

            <div>
                <div className='clear-both'>


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

        </div>
    );
};

export default SinglePostBody;