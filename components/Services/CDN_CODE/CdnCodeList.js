import React, { useState } from 'react';
import timeSince from '../../Post-NewsFeed/TimeSince';
import { Copy, Delete, Link, Writing } from '../../ReactRSIcon';
import DeleteCode from './DeleteCode';
import EditCode from './EditCode';

const CdnCodeList = ({ cdn, index, refetch }) => {
    const { code, code_id, userID, time, content_type, code_title, code_des } = cdn;
    const getTimeSince = timeSince(time)
    const copyLink = `${(typeof window !== 'undefined' && window.location.origin) ? window.location.origin : ''}/${userID}/cdn/${code_id}`.trim();


    const copyCodeHandle = (id) => {
        const codeLink = document.getElementById(id)
        codeLink.select()
        document.execCommand('copy')
    }
    const [showCode, setShowCode] = useState(null);

    const [deleteCode, setDeleteCode] = useState(null);
    const [editCode, setEditCode] = useState(null);

    return (
        <div className='border-b relative border-gray-500 p-2'>
            <div>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-1'>
                        <p>
                            {
                                index + 1 + '.'
                            }
                        </p>
                        <p>
                            {
                                code_title
                            }
                        </p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <button

                            // className={(editPost ? ' text-white ' : 'btn-outline') + ' btn btn-info  btn-xs'}
                            onClick={() => setEditCode(cdn)}
                            className='btn btn-success btn-outline btn-xs p-1'
                        >

                            <Writing />
                        </button>
                        {/* Delete User */}

                        <button
                            className='btn btn-warning btn-outline btn-xs p-1'
                            onClick={() => setDeleteCode(cdn)}
                        >
                            <Delete />
                            {/* <p className='absolute animate-spin border-b-2 border-r-2 w-4 h-4 rounded-[50%]'>
                            </p> */}
                        </button>
                        {/* <button className='btn btn-warning btn-outline btn-xs' onClick={() => setDeletePost({ post_id, userID, post_title })}>
                            <Delete />
                        </button> */}
                    </div>
                </div>
                <div>
                    <table className='text-xs text-left text-[#2f2f2f] table table-zebra'>

                        <tbody>
                            <tr>
                                <td>
                                    <b>
                                        ID
                                    </b>
                                </td>
                                <td className='pl-1 pr-1'>
                                    :
                                </td>
                                <td className='text-gray-500'>
                                    {
                                        code_id
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>
                                        Name
                                    </b>
                                </td>
                                <td className='pl-1 pr-1'>
                                    :
                                </td>
                                <td className='text-gray-500'>
                                    {
                                        code_title
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>
                                        Content_type
                                    </b>
                                </td>
                                <td className='pl-1 pr-1'>
                                    :
                                </td>
                                <td className='text-gray-500'>
                                    {
                                        content_type
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>
                                        Type
                                    </b>
                                </td>
                                <td className='pl-1 pr-1'>
                                    :
                                </td>
                                <td className='text-gray-500'>
                                    <CodeType type={content_type} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>
                                        Time
                                    </b>
                                </td>
                                <td className='pl-1 pr-1'>
                                    :
                                </td>
                                <td className='text-gray-500'>
                                    {
                                        getTimeSince
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>
                                        Description
                                    </b>
                                </td>
                                <td className='pl-1 pr-1'>
                                    :
                                </td>
                                <td className='text-gray-500 break-words text-justify'>
                                    {
                                        code_des
                                    }
                                </td>
                            </tr>

                        </tbody>
                    </table>

                    <div>
                        <div className='text-gray-500 flex items-center gap-1 pt-4'>
                            <Link />
                            <input
                                readOnly='true'
                                id={'codeLink' + code_id}
                                type="text"
                                className='input input-success font-mono input-sm w-fit'
                                defaultValue={copyLink}
                            />
                            <button
                                onClick={() => copyCodeHandle('codeLink' + code_id)}
                                className='btn btn-sm btn-outline btn-secondary'
                            >
                                <Copy />
                            </button>
                        </div>

                        <div className='flex gap-1'>
                            <button
                                className='btn btn-xs btn-outline p-1 btn-info mt-2'
                                onClick={() => setShowCode(!showCode)}
                            >
                                {showCode ? 'Hide ' : 'view '} code
                            </button>
                            <a href={copyLink} target='_blank' className='btn btn-xs btn-outline p-1 btn-info mt-2' rel="noreferrer">
                                Go
                            </a>
                        </div>
                        <div>
                            {
                                showCode &&
                                <div className='pt-2'>
                                    <button
                                        onClick={() => copyCodeHandle("codeView" + code_id)}
                                        className='btn btn-xs btn-outline btn-secondary'
                                    >
                                        <Copy />
                                    </button>
                                    <textarea
                                        className='textarea textarea-primary mt-2 w-full whitespace-pre-line'
                                        name=""
                                        defaultValue={code}
                                        id={"codeView" + code_id}
                                        cols="30"
                                        rows="10"
                                        readOnly
                                    >
                                    </textarea>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div>
            <div>
                {
                    deleteCode &&
                    <div>
                        <DeleteCode props={{ deleteCode, refetch, setDeleteCode }} />
                    </div>
                }
                {
                    editCode &&
                    <div className='absolute top-0 overflow-auto h-full w-full'>
                        <EditCode editCode={editCode} setEditCode={setEditCode} refetch={refetch} />
                    </div>
                }
            </div>
        </div>
    );
};

export default CdnCodeList;

const CodeType = ({ type }) => {
    switch (type) {
        case "text/plain":
            return "Plain Text"
            break;
        case "text/html":
            return "Html"
            break;
        case "text/css":
            return "CSS"
            break;
        case "text/javascript":
            return "Javascript"
            break;
        case "application/xml":
            return "XML"
            break;
        case "application/json":
            return "JSON"
            break;

        default:
            break;
    }
}

