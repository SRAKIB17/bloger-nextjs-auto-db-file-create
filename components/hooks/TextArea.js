import React, { useEffect, useRef, useState } from 'react';
import classTagShortcutInput from './hooks/useFindClassAttr';
import styles from './TextArea.module.css';
import useUploadCode from './Uploader/useUploadCode';
const TextArea = ({ props: { cssTextareaRef, jsTextareaRef, textareaRef } }) => {


    const shortcutKeyboard = (e) => {
        // setLiveView(e.target.value)
        // liveSettingAddScriptHandler()
    }
    const onchangeInput = (e) => {
        // setLiveView(e.target.value);
        // liveSettingAddScriptHandler()
        heightAutoHandle(e)
        classTagShortcutInput(e, textareaRef)
    }

    const [liveOff, setLiveOff] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0)
    const [layoutForm, setLayoutForm] = useState(0);
    const [dragging, setDragging] = useState([]);
    const [windowHeight, setWindowHeight] = useState('');
    const [rotate, setRotate] = useState(false);
    const [liveView, setLiveView] = useState('');
    let saveData = ''
    useEffect(() => {
        saveData = JSON.parse(window.localStorage.getItem('saveBody'));
        setWindowHeight(window.innerHeight);
        setLayoutForm(window.innerWidth / 2);
        setWindowWidth(window.innerWidth);
    }, [saveData])

    const liveOffHandle = () => {
        setLiveOff(!liveOff)
    }
    const rotateHandle = () => {
        if (rotate) {
            setDragging([])
            setRotate(!rotate)
        }
        else {
            setDragging([])
            setWindowWidth(0)
            setLayoutForm(window.innerWidth - 200);
            setRotate(!rotate)
        }
    }

    const dragStart = (e) => {
        e.preventDefault();
        setWindowHeight(window.innerHeight)
        setLayoutForm(window.innerWidth / 2);
        setWindowWidth(window.innerWidth);
        setDragging([...dragging, e.clientX]);
    }

    const [dragSeparate, setDraggingSeparate] = useState();
    const heightAutoHandle = (e) => {
        // liveSettingAddScriptHandler()
        const livePreview = document.querySelector('#livePreview')
        livePreview.style.height = 'auto';
        setWindowHeight(window.innerHeight - 50)
        const iframe = document.getElementById('liveViewIframe');
        onloadIframeHeightStylesHandle()
        //---------------------- for iframe ---------/
        try {
            if (e.target.scrollHeight <= windowHeight) {

                iframe.style.height = e.target.scrollHeight + 'px';
                livePreview.style.height = e.target.scrollHeight + 'px'
                e.target.style.height = e.target.scrollHeight + 'px'
                setDraggingSeparate(e.target.scrollHeight + 'px')
            }
            else {
                iframe.style.height = windowHeight + 'px';
                livePreview.style.height = windowHeight + 'px'
                e.target.style.height = windowHeight + 'px'
                setDraggingSeparate(windowHeight + 'px')
            }

        }
        catch {
            iframe.style.height = windowHeight + 'px';
            livePreview.style.height = windowHeight + 'px'
            e.target.style.height = windowHeight + 'px'
            setDraggingSeparate(windowHeight + 'px')
        }

    }


    const onloadIframeHeightStylesHandle = () => {
        try {
            let link = document.createElement("link");
            link.href = "/api/styleIframe.css";
            link.rel = "stylesheet";
            link.type = "text/css";
            const iframe = document.getElementById('liveViewIframe')
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
    const handleCssJsHtmlEditor = (editMode) => {
        const htmlEditDiv = document.getElementById('htmlEdit');
        const cssEditDiv = document.getElementById('cssEdit');
        const jsEditDiv = document.getElementById('jsEdit');

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

    const showHintUploadCodeHandler = () => {
        const getHints = document.getElementById('showCodeHints')
        if (getHints.style.display == 'block') {
            getHints.style.display = 'none'
        }
        else if (getHints.style.display == 'none' || !getHints.style.display) {
            getHints.style.display = 'block'
        }
    }





    const liveSettingAddScriptHandler = () => {
        const liveDocs = `
        <style>${cssTextareaRef.current.value}</style>
        ${textareaRef.current.value}        
        <script>${jsTextareaRef.current.value}</script>
        <script src="/api/styleIframe.js?js=code-copy"></script>
        `
        setLiveView(liveDocs)
    }
    useEffect(() => {

        document.onkeyup = function (e) {
            if (e.key == 'Control') {
                e.preventDefault()
                // isCtrl = false;
            }
        }

        document.onkeydown = async function (e) {

            if (e.ctrlKey && e.key === 's') {
                e.preventDefault()
                liveSettingAddScriptHandler();
                return false;
            }
        }
      
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




    return (
        <div className='m-1'>
            <div className='flex'>
                <li onClick={liveOffHandle} className='btn btn-warning btn-xs text-white m-4'>
                    Live
                    {
                        liveOff ? ' On' : ' Off'
                    }
                </li>
                <li onClick={rotateHandle} className='btn btn-warning btn-xs text-white m-4 hidden sm:flex w-fit'>
                    Rotate
                    {
                        rotate ? ' On' : ' Off'
                    }
                </li>
            </div>
            <div className='border  rounded-md p-1 border-primary'>
                <div>
                    <div className='flex gap-3 p-2 items-center'>
                        <div className={(htmlEdit ? 'text-white disabled' : ' btn-outline  ') + ' btn btn-xs btn-info'} onClick={() => handleCssJsHtmlEditor('html')}>
                            html
                        </div>

                        <div className={(CssEdit ? 'text-white disabled' : ' btn-outline  ') + ' btn btn-xs btn-info'} onClick={() => handleCssJsHtmlEditor('css')}>
                            css
                        </div>
                        <div className={(jsEdit ? 'text-white disabled' : ' btn-outline  ') + ' btn btn-xs btn-info'} onClick={() => handleCssJsHtmlEditor('js')}>
                            js
                        </div>
                        <div className='flex items-center'>
                            <kbd className="kbd kbd-sm">ctrl</kbd>
                            +
                            <kbd className="kbd kbd-sm">s </kbd>
                            <p className='ml-1 text-sm'>
                                or
                            </p>
                        </div>
                        <div className={' btn btn-xs btn-info text-white'} onClick={() => liveSettingAddScriptHandler()}>
                            Run
                        </div>

                    </div>
                    {/* ********************UPLOAD A CODE ****************************** */}
                    <div className='flex items-center gap-3 relative'>
                        <label className="  btn btn-primary btn-sm text-white mb-2">
                            <input type="file" name="image_file" id="uploader" className='form-control absolute top-[-10000px] p-3' onChange={(e) => codeUploaderHandle(e)} />
                            <span>Select a file</span>
                        </label>
                        <div>
                            <p className='cursor-pointer btn btn-xs btn-outline' onMouseEnter={showHintUploadCodeHandler} onMouseLeave={showHintUploadCodeHandler}>
                                ℹ️
                            </p>
                            <p className='absolute bg-base-300 p-4 w-52 text-xs rounded-3xl hidden' id='showCodeHints'>
                                File type: * html, * js, * css, * text
                            </p>
                        </div>
                    </div>
                </div>

                <div className={'flex flex-col ' + (rotate ? 'sm:flex-col' : 'sm:flex-row ')}>
                    <div
                        className={
                            styles.textareaForm + ' ' +
                            (liveOff ? styles.liveOffTextForm : '')
                        }
                        style={{ width: `${dragging[dragging.length - 2] || layoutForm}px` }}>


                        <div id='htmlEdit'>
                            <textarea ref={textareaRef}
                                id='textForm'
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
                                defaultValue={saveData}
                            >

                            </textarea>
                        </div>
                        <div id='cssEdit' className='hidden'>
                            <textarea ref={cssTextareaRef}
                                id='textForm'
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
                                defaultValue={saveData}
                            >

                            </textarea>
                        </div>
                        <div id='jsEdit' className='hidden'>
                            <textarea ref={jsTextareaRef}
                                id='textForm'
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
                                defaultValue={saveData}
                            >
                            </textarea>
                        </div>
                    </div>
                    <div
                        draggable='true'
                        style={{ height: dragSeparate }}

                        className={
                            (liveOff ? styles.liveOff : ' ') +

                            ' sm:w-2 hidden ml-1 mr-1 sm:h-auto bg-base-300 rounded-lg cursor-col-resize ' +
                            (rotate ? 'sm:hidden' : 'sm:block')
                        }
                        onDrag={dragStart}>
                    </div>
                    <div className='divider sm:hidden p-0 m-0'>
                    </div>
                    <div
                        id='livePreview'
                        className={
                            (styles.liveView) +
                            ' overflow-x-hidden h-auto border  p-1 '
                            + (liveOff ? styles.liveOff : ' ')
                        }

                        style={{ width: (rotate ? (windowWidth - 200) : `${windowWidth - dragging[dragging.length - 2] || layoutForm}px`) }}
                    >
                        <iframe
                            allow="fullscreen"
                            allowFullScreen
                            onLoad={onloadIframeHeightStylesHandle}
                            src='/api/preview'
                            srcDoc={liveView}
                            className={styles.livePreviewScrollBarHide + ' w-full'}
                            id='liveViewIframe' frameBorder="0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextArea;