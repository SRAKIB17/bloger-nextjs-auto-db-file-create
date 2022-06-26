import React from 'react';
import { Facebook, FacebookSquare } from '../../ReactRSIcon';

const ShareOption = () => {
    return (
        <div>
            <div className='absolute top-[-40px] z-30 bg-base-100 shadow-2xl hover:shadow-md right-0 p-3 pb-2 rounded-md'>
                <div className='flex gap-1 '>
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