import React, { useEffect, useRef, useState } from 'react';
import classTagShortcutInput from '../../hooks/hooks/useFindClassAttr';
import styles from '../../hooks/TextArea.module.css';
const TextAreaEdit = ({ post_id, editBody, textareaRef }) => {

    const shortcutKeyboard = (e) => {
        setLiveView(e.target.value)
        // classTagShortcutInput(e, textareaRef)
    }
    const onchangeInput = (e, id) => {
        setLiveView(e.target.value);
        heightAutoHandle(e, id)
        classTagShortcutInput(e, textareaRef)
    }

    const [liveOff, setLiveOff] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0)
    const [layoutForm, setLayoutForm] = useState(0);
    const [dragging, setDragging] = useState([]);
    const [windowHeight, setWindowHeight] = useState('');
    useEffect(() => {

        setWindowHeight(window.innerHeight);
        setLayoutForm(window.innerWidth / 2);
        setWindowWidth(window.innerWidth);
    }, [])
    const [rotate, setRotate] = useState(false);
    const [liveView, setLiveView] = useState('');
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
    // const [liveSize, setLiveSize] = useState([window.innerWidth / 2, window.innerHeight]);
    const dragStart = (e) => {
        // const Live = e.target.ownerDocument.querySelector('#livePreview');
        // setLiveSize([Live.clientWidth, Live.clientHeight])
        e.preventDefault();
        setWindowHeight(window.innerHeight)
        setLayoutForm(window.innerWidth / 2);
        setWindowWidth(window.innerWidth);
        setDragging([...dragging, e.clientX]);
    }

    const [dragSeparate, setDraggingSeparate] = useState();
    const heightAutoHandle = (e, id) => {
        onloadIframeHeightStylesHandle()
        setLiveView(e.target.value);
        const livePreview = document.getElementById('livePreviewEdit' + id)
        livePreview.style.height = 'auto';
        console.log(livePreview)
        console.log(e.target.scrollHeight)
        setWindowHeight(window.innerHeight - 50)
        const iframe = document.getElementById('liveViewIframe' + id);
        //---------------------- for iframe ---------/
        try {
            e.target.style.height = 'auto';
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
            // iframe.style.height = windowHeight + 'px';
            livePreview.style.height = windowHeight + 'px'
            e.target.style.height = windowHeight + 'px'
            setDraggingSeparate(windowHeight + 'px')
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
            <div className={'flex flex-col ' + (rotate ? 'sm:flex-col' : 'sm:flex-row ')}>
                <div
                    className={
                        styles.textareaForm + ' ' +
                        (liveOff ? styles.liveOffTextForm : '')
                    }
                    style={{ width: `${dragging[dragging.length - 2] || layoutForm}px` }}>

                    <textarea ref={textareaRef}
                        id='textForm'
                        className='input input-primary w-full font-mono'
                        name="postBody"
                        onBlur={(e) => onchangeInput(e, post_id)}
                        onKeyUp={(e) => shortcutKeyboard(e)}
                        onChange={(e) => onchangeInput(e, post_id)}
                        onInput={(e) => onchangeInput(e, post_id)}
                        onCut={(e) => heightAutoHandle(e, post_id)}
                        onPaste={(e) => heightAutoHandle(e, post_id)}
                        onDrop={(e) => heightAutoHandle(e, post_id)}
                        onKeyDown={(e) => heightAutoHandle(e, post_id)}
                        defaultValue={editBody}
                    >

                    </textarea>
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
                    id={'livePreviewEdit' + post_id}
                    className={
                        (styles.liveView) +
                        ' overflow-x-hidden h-auto border  p-1 '
                        + (liveOff ? styles.liveOff : ' ')
                    }

                    style={{ width: (rotate ? (windowWidth - 200) : `${windowWidth - dragging[dragging.length - 2] || layoutForm}px`) }}
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