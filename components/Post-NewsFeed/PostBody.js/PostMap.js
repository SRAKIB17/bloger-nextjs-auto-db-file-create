import React from 'react';

const PostMap = () => {
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl mt-2">
                <div className='flex gap-2 justify-start items-center border-b-2 m-2'>
                    <div className='avatar'>
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 sm:ml-10 md:ml-[100px]">
                            <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title">Shoes!</h2>
                        <h1 className='text-xs'>dec 15, 2021 | tech</h1>
                    </div>
                </div>
                <figure>
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" className='w-full' alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div>
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                    <div className='border-b-2 p-2 border-t-2'>
                        <button className='btn btn-xs btn-secondary ml-2 btn-outline'>b-1</button>
                        <button className='btn btn-xs btn-secondary ml-2 btn-outline'>b-2</button>
                        <button className='btn btn-xs btn-secondary ml-2 btn-outline'>b-3</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostMap;