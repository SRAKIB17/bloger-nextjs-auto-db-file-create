/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Header from '../../components/Header/Header';
import { Camera } from '../../components/ReactRSIcon';

const Index = () => {
    return (
        <div>
            <Header />
            <div className='bg-base-100 h-full w-full md:ml-16 p-2 mr-2'>
                {
                    [...Array(10).keys()].map((bookmark, index) => <Bookmark key={index} />)
                }
            </div>
        </div>
    );
};



const Bookmark = () => {
    return (
        <div>
            <div>
                <div className='w-full'>
                    <div className='float-left'>
                        {/* ----thumbnail------------ */}
                        
                            {/* // (postRefMode === 'text' && thumbnail) ? */}
                                <div className='mr-4'>
                                    <figure>
                                        <img
                                            // src={thumbnail}
                                            alt=""
                                            className='max-w-[200px] h-[200px] md:max-w-[250px] md:h-[160px] rounded-md border-2'
                                        />
                                    </figure>
                                </div>
                                
                                <div className='mr-4'>
                                    <Camera size='150' className="border-2 rounded-md" />
                                </div>
                        
                    </div>
                    {/* style={{ width: '100%', wordWrap: "break-word", whiteSpace: 'pre-line' }} */}
                    <div>
                        {
                            // short_description?.slice(0, 1000)
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Index;