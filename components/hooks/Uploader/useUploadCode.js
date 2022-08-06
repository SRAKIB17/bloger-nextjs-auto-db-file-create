import React, { useState } from 'react';

const useUploadCode = () => {
    const [code, setCode] = useState('');
    const [message, setMessage] = useState('')
    const codeUploaderHandle = (e) => {
        try {
            const file = e.target.files[0];
            const type = file?.type;


            const oReader = new FileReader();
            oReader.onload = (e) => {
                const rFilter = /^(text\/plain|text\/javascript|text\/html|text\/css|image\/tiff)$/i;

                if (!rFilter.test(type)) {
                    setMessage(<span className='label-text-alt text-success mb-8'>You should select valid files / file only!</span>)
                }
                else {
                    const result = e.target.result;
                    setCode(result)
                    setMessage(<span className='label-text-alt text-success mb-8'>Successfully uploaded</span>);
                }
            }
            oReader.readAsText(file);
        }
        catch {

        }
    }
    return { code, codeUploaderHandle, message }
};

export default useUploadCode;