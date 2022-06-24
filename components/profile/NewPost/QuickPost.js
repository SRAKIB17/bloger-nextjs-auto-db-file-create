import React from 'react';

const QuickPost = ({ props: { quickVideoPost, setQuickVideoPost, quickTextPost, setQuickTextPost, quickImagePost, setQuickImagePost } }) => {
    const quickPostButtonHandle = (mode) => {

        switch (mode) {
            case 'image':
                setQuickTextPost(false);
                setQuickVideoPost(false);
                setQuickImagePost(true)
                break;
        
            case 'text':
                setQuickTextPost(true);
                setQuickVideoPost(false);
                setQuickImagePost(false)
                break;
        
            case 'video':
                setQuickTextPost(false);
                setQuickVideoPost(true);
                setQuickImagePost(false)
                break;
        
            default:
                break;
        }
    }
    return (
        <div>
            <div className='flex gap-4 md:ml-8 mt-4'>
                <div>
                    <button onClick={() => quickPostButtonHandle('text')} className={(quickTextPost ? 'text-white btn-disabled bg-green-500 ' : 'btn-outline ') + ' btn  btn-sm btn-success'}>Text </button>
                </div>
                <div>
                    <button onClick={() => quickPostButtonHandle('image')} className={(quickImagePost ? 'text-white btn-disabled bg-green-500 ' : 'btn-outline ') + ' btn  btn-sm btn-success'}>Image </button>
                </div>
                <div>
                    <button onClick={() => quickPostButtonHandle('video')} className={(quickVideoPost ? 'text-white btn-disabled bg-green-500 ' : 'btn-outline ') + ' btn  btn-sm btn-success'}>Video </button>
                </div>
            </div>
        </div>
    );
};

export default QuickPost;