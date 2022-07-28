import { useRouter } from 'next/router';
import React from 'react';

const Index = () => {
    const router = useRouter()
    const { id } = router.query;

    const onloadIframeHeightStylesHandle = async (id) => {
        const iframe = document.getElementById('print' + id)
        iframe.style.height = await iframe.contentWindow.document.documentElement.scrollHeight + 'px';

        setTimeout(() => {
            print()

        }, 2000);
    }


    return (
        <div>
            <div className='text-5xl text-primary text-center pt-10'>
                ProgLearn
            </div>
            <iframe
                src={"/api/preview/" + id}
                frameBorder="0"
                id={'print' + id}
                className='w-full'
                onLoad={() => onloadIframeHeightStylesHandle(id)}
            >
            </iframe>
        </div>
    );
};

export default Index;