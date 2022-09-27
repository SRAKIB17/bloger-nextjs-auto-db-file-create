import React, { useEffect, useState } from 'react';
import { Copy } from '../../../../ReactRSIcon';
import { CopyToClipboard } from 'react-copy-to-clipboard';




const GuestOption = ({ post }) => {
    const { post_id } = post
    const CopyUrlHandle = (id, e) => {
        e.preventDefault();
        const getInput = e.target.getElementsByTagName('input')[0];
        getInput.select()
        document.execCommand('copy')

        const copiedMsg = e.target.getElementsByTagName('p')[0];
        copiedMsg.style.display = 'block'
        setTimeout(() => {
            copiedMsg.style.display = 'none'
        }, 1000);
    }

    const copyLink = `
    ${typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''}/blog/post/${post_id}
    `;
    const apiCodeCopy = `
    <iframe 
        src="${typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''}/api/preview/${post_id}" 
        width="100%"
        height="300" 
        style="border:1px solid black;"
     >
     </iframe>`
    const [copyUrlMsg, setCopyUrlMsg] = useState({})
    const [copyApiMsg, setCopyApiMsg] = useState({});

    useEffect(() => {
        if (copyUrlMsg?.copied) {
            setTimeout(() => {
                setCopyUrlMsg({})
            }, 1000);
        }
    }, [copyUrlMsg])

    useEffect(() => {
        if (copyApiMsg?.copied) {
            setTimeout(() => {
                setCopyApiMsg({})
            }, 1000);
        }
    }, [copyApiMsg])

    return (
        <>
            {/* Url copy */}
            <li>

                <CopyToClipboard text={copyLink}
                    onCopy={() => setCopyUrlMsg({ copied: true })}>
                    <button>
                        <Copy size='20' className="pr-1" /> {copyUrlMsg?.copied ?
                            'Copied'
                            : <span>Copy URL</span>}
                    </button>
                </CopyToClipboard>
            </li>

            {/* API CODE */}
            <li>

                <CopyToClipboard text={apiCodeCopy}
                    onCopy={() => setCopyApiMsg({ copied: true })}>
                    <button>
                        <Copy size='20' className="pr-1" /> {copyApiMsg?.copied ?
                            'Copied'
                            : <span>Copy API Code</span>}
                    </button>
                </CopyToClipboard>
            </li>



            {/* <li
                        className=' btn btn-outline btn-primary text-left rounded-md btn-xs'
                    //  onClick={() => setDeletePost(post_id)}
                    >
                        <Delete size='17' />Delete Post
                        Shorten Url
                    </li> */}
        </>
    );
};

export default GuestOption;