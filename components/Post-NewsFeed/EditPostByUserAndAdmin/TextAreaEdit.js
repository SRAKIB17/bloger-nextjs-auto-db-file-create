import React, { useEffect, useRef, useState } from 'react';
import classTagShortcutInput from '../../hooks/hooks/useFindClassAttr';
import styles from '../../hooks/TextArea.module.css';
import useUploadCode from '../../hooks/Uploader/useUploadCode';
const TextAreaEdit = ({ props: { cssTextareaRef, jsTextareaRef, textareaRef, post_id } }) => {

    const shortcutKeyboard = (e) => {
        // classTagShortcutInput(e, textareaRef)
    }
    const onchangeInput = (e, id) => {
        heightAutoHandle(e, id)
        classTagShortcutInput(e, textareaRef)
    }

    const [liveOff, setLiveOff] = useState(false)
    const [windowHeight, setWindowHeight] = useState('');
    useEffect(() => {
        setWindowHeight(window.innerHeight);
    }, [])
    const [liveView, setLiveView] = useState('');
    const liveOffHandle = () => {
        setLiveOff(!liveOff)
    }


    const heightAutoHandle = (e, id) => {
        onloadIframeHeightStylesHandle()
        const livePreview = document.getElementById('livePreviewEdit' + id)

        setWindowHeight(window.innerHeight - 50)
        const iframe = document.getElementById('liveViewIframe' + id);

        //---------------------- for iframe ---------/
        try {
            e.target.style.height = 'auto';
            if (e.target.scrollHeight <= windowHeight) {
                iframe.style.height = e.target.scrollHeight + 'px';
                livePreview.style.height = e.target.scrollHeight + 'px'
                e.target.style.height = e.target.scrollHeight + 'px'
            }
            else {

                iframe.style.height = windowHeight + 'px';
                livePreview.style.height = windowHeight + 'px'
                e.target.style.height = windowHeight + 'px'
            }

        }
        catch {
            // livePreview.style.height = windowHeight + 'px'
            // e.target.style.height = windowHeight + 'px'
        }
    }


    const onloadIframeHeightStylesHandle = (e) => {
        try {
            let link = document.createElement("link");
            link.href = "/api/styleIframe.css";
            link.rel = "stylesheet";
            link.type = "text/css";
            const iframe = e.target
            iframe.contentDocument.head.append(link);

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
        catch {

        }
    }

    //*8******************************************************* for show hide css, js ,html code editor******************************************************
    const [htmlEdit, setHtmlEdit] = useState(true);
    const [jsEdit, setJsEdit] = useState(false);
    const [CssEdit, setCssEdit] = useState(false);
    const handleCssJsHtmlEditor = (editMode, id) => {
        const htmlEditDiv = document.getElementById('htmlEdit' + id);
        const cssEditDiv = document.getElementById('cssEdit' + id);
        const jsEditDiv = document.getElementById('jsEdit' + id);

        switch (editMode) {
            case 'html':
                setHtmlEdit(true)
                setCssEdit(false)
                setJsEdit(false)
                htmlEditDiv.style.display = 'block'
                cssEditDiv.style.display = 'none'
                jsEditDiv.style.display = 'none'
                break;
            case 'css':
                setCssEdit(true)
                setJsEdit(false)
                setHtmlEdit(false)
                htmlEditDiv.style.display = 'none'
                cssEditDiv.style.display = 'block'
                jsEditDiv.style.display = 'none'
                break;
            case 'js':
                setJsEdit(true)
                setHtmlEdit(false)
                setCssEdit(false)
                htmlEditDiv.style.display = 'none'
                cssEditDiv.style.display = 'none'
                jsEditDiv.style.display = 'block'
                break;

            default:
                break;
        }
    }

    // UPLOAD CODE //
    const { code, codeUploaderHandle } = useUploadCode();
    useEffect(() => {
        if (htmlEdit) {
            textareaRef.current.value = code
        }
        else if (jsEdit) {
            jsTextareaRef.current.value = code
        }
        else if (CssEdit) {
            cssTextareaRef.current.value = code
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [code])



    const liveSettingAddScriptHandler = () => {
        const liveDocs = `
        <style>${cssTextareaRef.current.value}</style>
        ${textareaRef.current.value}        
        <script>${jsTextareaRef.current.value}</script>

        `
        setLiveView(liveDocs)
    }

    return (
        <div className='m-1'>
            <div className='flex'>
                <li onClick={liveOffHandle} className='btn btn-warning btn-xs text-white m-4'>
                    Live
                    {
                        liveOff ? ' On' : ' Off'
                    }
                </li>

            </div>
            <div className={'flex flex-col '}>
                <div
                    className={
                        styles.textareaForm + ' ' +
                        (liveOff ? styles.liveOffTextForm : '')
                    }>

                    <div>
                        <div className='flex gap-3 p-2 items-center'>
                            <div className={(htmlEdit ? 'text-white disabled' : ' btn-outline  ') + ' btn btn-xs btn-info'} onClick={() => handleCssJsHtmlEditor('html', post_id)}>
                                html
                            </div>
                            <div className={(CssEdit ? 'text-white disabled' : ' btn-outline  ') + ' btn btn-xs btn-info'} onClick={() => handleCssJsHtmlEditor('css', post_id)}>
                                css
                            </div>
                            <div className={(jsEdit ? 'text-white disabled' : ' btn-outline  ') + ' btn btn-xs btn-info'} onClick={() => handleCssJsHtmlEditor('js', post_id)}>
                                js
                            </div>

                            <div className={' btn btn-xs btn-info text-white'} onClick={() => liveSettingAddScriptHandler()}>
                                Run
                            </div>

                        </div>
                    </div>

                    <div id={'htmlEdit' + post_id}>
                        <textarea ref={textareaRef}
                            id={'HtmlEditTexTForm' + post_id}
                            className='input input-primary w-full font-mono'
                            name="postBody"
                            onBlur={onchangeInput}
                            onKeyUp={(e) => shortcutKeyboard(e)}
                            onChange={onchangeInput}
                            onInput={onchangeInput}
                            onCut={heightAutoHandle}
                            onPaste={heightAutoHandle}
                            onDrop={heightAutoHandle}
                            onKeyDown={heightAutoHandle}
                        >

                        </textarea>
                    </div>
                    <div id={'cssEdit' + post_id} className='hidden'>
                        <textarea ref={cssTextareaRef}
                            id={'cssEditTextForm' + post_id}
                            className='input input-primary w-full font-mono'
                            name="postBody"
                            onBlur={onchangeInput}
                            onKeyUp={(e) => shortcutKeyboard(e)}
                            onChange={onchangeInput}
                            onInput={onchangeInput}
                            onCut={heightAutoHandle}
                            onPaste={heightAutoHandle}
                            onDrop={heightAutoHandle}
                            onKeyDown={heightAutoHandle}
                        >

                        </textarea>
                    </div>
                    <div id={'jsEdit' + post_id} className='hidden'>
                        <textarea ref={jsTextareaRef}
                            id={'jsEditTextForm' + post_id}
                            className='input input-primary w-full font-mono'
                            name="postBody"
                            onBlur={onchangeInput}
                            onKeyUp={(e) => shortcutKeyboard(e)}
                            onChange={onchangeInput}
                            onInput={onchangeInput}
                            onCut={heightAutoHandle}
                            onPaste={heightAutoHandle}
                            onDrop={heightAutoHandle}
                            onKeyDown={heightAutoHandle}

                        >
                        </textarea>
                    </div>
                </div>

                <div className='divider'>
                </div>
                <div
                    id={'livePreviewEdit' + post_id}
                    className={
                        (styles.liveView) +
                        ' overflow-x-hidden h-auto border  p-1 '
                        + (liveOff ? styles.liveOff : ' ')
                    }
                >
                    <iframe
                        onLoad={onloadIframeHeightStylesHandle}
                        src='/api/preview'
                        srcDoc={liveView}
                        className={styles.livePreviewScrollBarHide + ' w-full'}
                        id={'liveViewIframe' + post_id} frameBorder="0"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default TextAreaEdit;