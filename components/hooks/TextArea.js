import React, { useEffect, useRef, useState } from 'react';
import classTagShortcutInput from './hooks/useFindClassAttr';
import styles from './TextArea.module.css';
const TextArea = () => {
    const textareaRef = useRef();



    const shortcutKeyboard = (e) => {
        setLiveView(e.target.value)
        // classTagShortcutInput(e, textareaRef)
    }
    const onchangeInput = (e) => {
        setLiveView(e.target.value);
        heightAutoHandle(e)
        classTagShortcutInput(e, textareaRef)
    }

    const [liveOff, setLiveOff] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0)
    const [layoutForm, setLayoutForm] = useState(0);
    const [dragging, setDragging] = useState([]);
    const [windowHeight, setWindowHeight] = useState('');

    useEffect(() => {
        window.onresize = () => {
            setWindowHeight(window.innerHeight)
            setLayoutForm(window.innerWidth / 2);
            setWindowWidth(window.innerWidth);
        }
        setWindowHeight(window.innerHeight)
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
            dragging[dragging.length - 2] = windowWidth - 200
            setWindowWidth(0)
            setRotate(!rotate)
        }
    }
    // const [liveSize, setLiveSize] = useState([window.innerWidth / 2, window.innerHeight]);
    const dragStart = (e) => {
        // const Live = e.target.ownerDocument.querySelector('#livePreview');
        // setLiveSize([Live.clientWidth, Live.clientHeight])
        e.preventDefault();
        setDragging([...dragging, e.clientX]);
    }

    const [dragSeparate, setDraggingSeparate] = useState();
    const heightAutoHandle = (e) => {
        setLiveView(e.target.value);
        e.target.ownerDocument.querySelector('#livePreview').style.height = 'auto'
        e.target.style.height = 'auto';
        e.target.ownerDocument.querySelector('#livePreview').style.height = e.target.scrollHeight + 'px'
        e.target.style.height = e.target.scrollHeight + 'px'
        setDraggingSeparate(e.target.scrollHeight + 'px')


    }

    return (
        <div className='m-3'>
            <div>
                <button onClick={liveOffHandle} className='btn btn-warning btn-xs text-white m-4'>
                    Live
                    {
                        liveOff ? ' On' : ' Off'
                    }
                </button>
                <button onClick={rotateHandle} className='btn btn-warning btn-xs text-white m-4'>
                    Rotate
                    {
                        rotate ? ' On' : ' Off'
                    }
                </button>
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
                        className='input input-success w-full'
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
                <div
                    draggable='true'
                    style={{ height: dragSeparate }}

                    className={
                        (liveOff ? styles.liveOff : ' ') +

                        ' sm:w-2 hidden ml-1 mr-1 sm:h-auto bg-[#ffffff] rounded-lg cursor-pointer ' +
                        (rotate ? 'sm:hidden' : 'sm:block')
                    }
                    onDrag={dragStart}>
                </div>
                <div className='divider sm:hidden p-0 m-0'>
                </div>
                <div
                    id='livePreview'
                    className={
                        styles.liveView +
                        ' overflow-auto h-auto border p-1 '
                        + (liveOff ? styles.liveOff : '')
                    }

                    style={{ width: (rotate ? (windowWidth - 200) : `${windowWidth - dragging[dragging.length - 2] || layoutForm}px`) }}
                >
                    <div className='w-full' dangerouslySetInnerHTML={{ __html: liveView }}></div>
                </div>
            </div>
        </div>
    );
};

export default TextArea;