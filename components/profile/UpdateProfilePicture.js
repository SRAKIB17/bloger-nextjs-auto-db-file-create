import React, { useEffect, useState } from 'react';
import useFileUploader from '../hooks/Uploader/useUploadProfileCoverPhoto';

const UpdateProfilePicture = ({ props: { setUploadMethod, uploadMethod } }) => {

    const [thumbnail, setThumbnail] = useState('')
    const [ThumbnailData, setThumbnailData] = useState('')
    const { fileData, uploadFileHandler, message, result } = useFileUploader();
    console.log(result)
    useEffect(() => {
        setThumbnailData(fileData);
        setThumbnail(result?.data?.url)
    }, [fileData, result])


    const imageDrop = (e) => {
        uploadFileHandler(e)
    }
    const hightLightHandle = event => {
        event.preventDefault()
        event.stopPropagation()
        event.target.ownerDocument.querySelector('#uploaderCoverProfileFile').classList.add('highlight')
    }
    const unHightLightHandel = event => {
        event.preventDefault()
        event.stopPropagation()
        event.target.ownerDocument.querySelector('#uploaderCoverProfileFile').classList.remove('highlight')
    }

    const uploadCoverProfilePicHandler = (e) => {
        e.preventDefault()
        const thumb = thumbnail
        if (uploadMethod === 'cover') {

        }
        else if (uploadMethod === 'profile') {
            console.log(4534545345435345)
        }
        console.log(thumbnail)
    }
    return (
        <div>
            <input type="checkbox" id="openModalUploadProfilePicture" className="modal-toggle" />
            <div className='modal'>

                <div className="modal-box relative">
                    <label htmlFor="openModalUploadProfilePicture" className="btn btn-sm btn-circle absolute btn-warning text-white right-2 top-2">✕</label>

                    <h1 className='text-primary text-xl font-bold text-center'>
                        {
                            uploadMethod === 'cover' ? 'Upload Cover Picture' : 'Upload Profile Picture'
                        }
                    </h1>
                    <form onSubmit={uploadCoverProfilePicHandler} className='flex flex-col items-center w-full'>
                        <div>
                            <div className=' max-w-xs w-full'>
                                <div>
                                    <div
                                        onDragEnter={hightLightHandle}
                                        onDragOver={hightLightHandle}
                                        onDragLeave={unHightLightHandel}
                                        onDrop={imageDrop} id="uploaderCoverProfileFile">

                                        <p>Upload a file with the file dialog or by dragging and dropping images onto the dashed region</p>


                                    </div>
                                    <div className="divider">OR</div>
                                    <div>

                                        <input
                                            type="file"
                                            name="image_file"
                                            id="uploaderManuallyProfileCover"
                                            className='form-control'
                                            onChange={(e) => uploadFileHandler(e)}
                                        />
                                    </div>
                                    {message && <span className='label-text-alt text-red-500 mb-4'>  {message}</span>}
                                </div >
                            </div>
                            <div className='shadow-md w-fit p-2'>
                                <img src={thumbnail} className='max-w-40 max-h-40 rounded-md' alt="" />
                            </div>
                            <button className='btn btn-sm m-4 btn-primary'>Save</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};


export default UpdateProfilePicture;



