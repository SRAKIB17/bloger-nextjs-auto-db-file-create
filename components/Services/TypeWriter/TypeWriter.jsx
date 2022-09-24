import React, { useEffect, useState } from 'react';

const TypeWriter = () => {
    const [font, setFont] = useState(100)
    const [arr, setArr] = useState([0]);



    const [lineArr, setLineArr] = useState([])
    const [colorsArr, setColorsArr] = useState([''])
    const [line, setLine] = useState('');
    const [colors, setColors] = useState('');
    useEffect(() => {
        setLine(lineArr.join(';'));
        setColors(colorsArr.join(';'));
    }, [lineArr, colorsArr])

    const handle = (next) => {
        if (next == 'plus') {
            setArr([...arr, arr.length])
        }
        else if (next == 'minus' && arr.length > 1) {
            setArr([...arr.slice(0, arr.length - 1)]);
            setLineArr([...lineArr.slice(0, arr.length - 1)])
        }
    };


    const setLineHandle = e => {
        e.preventDefault()
        const input = e.target;
        const id = input.id;
        const inputAllValue = [...lineArr]
        inputAllValue[id] = input.value;
        setLineArr(inputAllValue)
    }

    const setColorsHandle = e => {
        e.preventDefault();
        const input = e.target;
        const id = input.id;
        const inputAllValue = [...colorsArr]
        inputAllValue[id] = input.value;
        setColorsArr(inputAllValue)
    }

    const CopyUrlHandle = (id, e) => {
        e.preventDefault();
        console.log(id)
        const getInput = document.getElementById(id)
        getInput.select()
        document.execCommand('copy')

        // const copiedMsg = e.target.getElementsByTagName('p')[0];
        // copiedMsg.style.display = 'block'
        // setTimeout(() => {
        //     copiedMsg.style.display = 'none'
        // }, 1000);
    }


    const url = ` ${typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''}/typewriter.svg?line=${line}&colors=${colors}&font_size=${font}`
    const embed = `<embed src="${url}" type="" />`
    return (

        <div>
            <div>
                <h1 className='text-xl sm:text-3xl text-center text-primary m-5'>
                    Type Writer SVG
                </h1>
            </div>
            <div className='m-2'>
                <mark>Note:</mark>
                <ul className='list-disc m-4'>
                    <li>
                        Do not use color hex form or rgb form;
                    </li>
                    <li>
                        It works only when use only color name.
                        Example: {"'red'"}
                    </li>
                </ul>

            </div>
            <div className='flex flex-col gap-2 ml-2'>

                <div className=' flex items-center gap-2'>
                    <span>
                        Font size:
                    </span>
                    <input
                        type="number"
                        onChange={(e) => setFont(e.target.value)}
                        min={50}
                        max={300}
                        className='input input-ghost border-primary input-sm rounded-sm'
                    />

                </div>
                <div>
                    <div className='flex items-center gap-2'>
                        <form onChange={(e) => setLineHandle(e)} className='flex flex-col gap-1'>
                            {
                                arr?.map(k => <span key={k} className='flex gap-1 items-center'>
                                    Title {k + 1}
                                    <input
                                        type="text"
                                        key={k}
                                        id={k}
                                        // onChange={e => setLine(e.target.value)}
                                        className=' rounded-sm input input-sm input-ghost border-primary' />

                                </span>
                                )
                            }
                        </form>
                        <div className='flex items-center'>
                            <form onChange={(e) => setColorsHandle(e)} className='flex flex-col gap-1'>
                                {arr?.map(k => <span key={k} className='flex gap-1 items-center'>
                                    Color {k + 1}
                                    <input type="text" className='input input-sm rounded-sm mt-[1px] border-primary' id={k} />
                                </span>)
                                }
                            </form>

                        </div>
                    </div>


                    <div>
                        <button className='btn btn-primary btn-sm rounded-sm m-4' onClick={() => handle('minus')}>
                            -
                        </button>
                        <button className='btn btn-primary btn-sm rounded-sm m-4' onClick={() => handle('plus')}>
                            +
                        </button>
                    </div>

                </div>
            </div>
            <div className='h-56 overflow-auto'>
                <embed src={url} type="" />
            </div>
            <div className='flex flex-col gap-1' >
                <div className='flex gap-1'>
                    <button className='btn btn-sm w-fit rounded-sm capitalize' onClick={(e) => CopyUrlHandle('embedCode', e)}>
                        Copy Embed Url
                    </button>
                    <a href={url} download={true} className="btn btn-sm rounded-sm capitalize">Download</a>
                </div>
                <textarea name="" id="embedCode" className='textarea textarea-primary max-w-sm w-full' readOnly value={embed}></textarea>
            </div>

        </div >
    );
};

export default TypeWriter;