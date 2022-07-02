import { useRouter } from 'next/router';
import React from 'react';
import { Email, Facebook, FacebookSquare, Google, LinkedinSquare, SkypeSquare } from '../../ReactRSIcon';

const ShareOption = ({ post_id }) => {
    const router = useRouter()
    console.log(location)
    const pushShareUrlHandle = (url) => {
        if (url === 'linkedin') {

            router.push(
                `http://www.linkedin.com/shareArticle?mini=true&url=${window.location.origin}/story/${post_id}&title=${post_id}&summary=some%20summary%20if%20you%20want&source=${window.location.origin}`
            )
        }
        else if (url === 'facebook') {
            router.push(
                `https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}/story/${post_id}`
            )
        }
        else if (url === 'skype') {
            router.push(
                `https://web.skype.com/share?u=${window.location.origin}/story/${post_id}`
            )
        }
        else if (url === 'email') {
            const url = `mailto:?subject=I wanted you to see this site&amp;body=Check out this site ${window.location.origin}/story/${post_id} `
            router.push(url)

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
                            <LinkedinSquare size='20' className="rounded-sm text-[#2386ff] hover:text-[#1B74E4]" />
                        </button>
                    </div>
                    <div>
                        <button onClick={() => pushShareUrlHandle('facebook', post_id)}>
                            <FacebookSquare size='20' className="rounded-sm text-[#4699ff] hover:text-[#1B74E4]" />
                        </button>
                    </div>

                    <div>
                        <button onClick={() => pushShareUrlHandle('skype', post_id)}>
                            <SkypeSquare size='20' className="rounded-sm text-[#2bc6ff] hover:text-[#00AFF0]" />
                        </button>
                    </div>
                    <div>
                        <button onClick={() => pushShareUrlHandle('email', post_id)}>
                            <Email size='20' className="rounded-sm text-[#ff0000] hover:text-[#ff5555]" />
                        </button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default ShareOption;