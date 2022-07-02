import { useRouter } from 'next/router';
import React from 'react';
import { Facebook, FacebookSquare, LinkedinSquare } from '../../ReactRSIcon';

const ShareOption = ({ post_id }) => {
    const router = useRouter()

    const pushShareUrlHandle = (url) => {
        if (url === 'linkedin') {

            router.push(
                `http://www.linkedin.com/shareArticle?mini=true&url=${window.location}/story/${post_id}&title=${post_id}&summary=some%20summary%20if%20you%20want&source=${window.location.origin}`
            )
        }
        else {
            router.push(url)
        }
    }
    return (
        <div>
            <div className='absolute top-[-1px] z-30 bg-base-100 shadow-2xl hover:shadow-md right-0 p-3 pb-2 rounded-md'>
                <div className='flex gap-1 '>
                    <div>
                        <button onClick={() => pushShareUrlHandle('linkedin', post_id)}>
                            <LinkedinSquare color='#1B74E4' size='20' className="rounded-sm" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <FacebookSquare color='#1B74E4' size='20' className="rounded-sm" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <FacebookSquare color='#1B74E4' size='20' className="rounded-sm" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <FacebookSquare color='#1B74E4' size='20' className="rounded-sm" />
                        </button>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default ShareOption;