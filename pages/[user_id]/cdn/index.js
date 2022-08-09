import React, { useEffect, useRef } from 'react';
import Header from '../../../components/Header/Header';
import useUploadCode from '../../../components/hooks/Uploader/useUploadCode';
import { CDN } from '../../../components/ReactRSIcon';

const Index = () => {
    const codeRef = useRef()
    // AUTO HEIGHT TEXTAREA FORM
    const shortcutKeyboard = (e) => {
        // classTagShortcutInput(e, textareaRef)
    }
    const onchangeInput = (e) => {
        heightAutoHandle(e)
    }
    const heightAutoHandle = (e) => {
        const innerHeight = window.innerHeight
        e.target.style.height = 'auto';
        if (e.target.scrollHeight < innerHeight) {
            e.target.style.height = e.target.scrollHeight + 'px'
        }
        else {
            e.target.style.height = innerHeight + 'px'
        }
    }
    const { code, codeUploaderHandle, message } = useUploadCode();
    useEffect(() => {
        codeRef.current.value = code
    }, [code])
    const submitCodeHandle = (e) => {
        e.preventDefault()
        const codeBody = {
            code_id: 45435,
            code: codeRef?.current?.value,
            content_type: e.target.content_type.value,
            time: new Date(),
            userID: 53454,
        }
        console.log(codeBody)
    }


    // show info

    const showHintUploadCodeHandler = () => {
        const getHints = document.getElementById('codeCdnHints')
        if (getHints.style.display == 'block') {
            getHints.style.display = 'none'
        }
        else if (getHints.style.display == 'none' || !getHints.style.display) {
            getHints.style.display = 'block'
        }
    }

    return (
        <div className='min-h-screen bg-base-100'>
            <Header />
            <div className='lg:ml-16 p-10'>
                <CDN/>
                <div>
                    <h1 className='font-extrabold text-center text-xl md:text-2xl text-primary underline'>
                        CONTENT DELIVERY NETWORK (CDN) CODE:
                    </h1>
                </div>
                <form onSubmit={submitCodeHandle} className="flex flex-col gap-1">
                    <div>
                        <p className='text-gray-500 text-sm'>
                            Code Type:
                        </p>
                    </div>
                    <select name="content_type" id="" className='select select-sm select-primary w-fit' required>
                        <optgroup label="Code Type" />
                        <option value="text/plain">Plain Text</option>
                        <option value="text/html">Html</option>
                        <option value="text/css">CSS</option>
                        <option value="text/javascript">Javascript</option>
                        <option value="application/xml">XML</option>
                        <option value="application/json">JSON</option>
                        {/* <option value="application/json">JSON</option> */}
                    </select>
                    <div>
                        <p className='text-gray-500 text-sm'>
                            Paste Your Code:
                        </p>
                    </div>
                    <div className='flex items-center gap-3 relative'>
                        <label className="  btn btn-primary btn-sm font-extralight text-white mb-2">
                            <input type="file" name="image_file" id="uploader" className='form-control absolute top-[-10000px] p-3' onChange={(e) => codeUploaderHandle(e)} />
                            <span>Select a file</span>
                        </label>

                        <div>
                            <p className='cursor-pointer btn btn-xs btn-outline' onMouseEnter={showHintUploadCodeHandler} onMouseLeave={showHintUploadCodeHandler}>
                                ℹ️
                            </p>
                            <p className='absolute bg-base-300 p-4 w-52 text-xs rounded-3xl hidden' id='codeCdnHints'>
                                File type: * html, * js, * css, * text, *json, *xml
                            </p>
                        </div>
                        <div>
                            <p className='text-2xs'>
                                {message}
                            </p>
                        </div>
                    </div>
                    <div>
                        <textarea ref={codeRef}
                            className='input input-success w-full font-mono'
                            name="commentBody"
                            onBlur={onchangeInput}
                            onKeyUp={(e) => shortcutKeyboard(e)}
                            onChange={onchangeInput}
                            onInput={onchangeInput}
                            onCut={heightAutoHandle}
                            onPaste={heightAutoHandle}
                            onDrop={heightAutoHandle}
                            onKeyDown={heightAutoHandle}
                            required
                        >
                        </textarea>
                    </div>
                    <div>
                        <button className='btn btn-sm btn-secondary'>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Index;