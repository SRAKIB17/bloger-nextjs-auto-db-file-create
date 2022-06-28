import React, { useEffect, useState } from 'react';
import { EmoticonLove, Like } from '../../ReactRSIcon/index'

const LikeUsersList = ({ post_id }) => {
    const user = {
        _id: 7,
        post_id: 13,
        time: Date(),
        sort: '',
        likeUnlike: [
            {
                userID: 53453555,
                rating: 'like'
            },
            {
                userID: 53453555,
                rating: 'unlike'
            },
            {
                userID: 53453555,
                rating: 'unlike'
            },
            {
                userID: 53453555,
                rating: 'like'
            },
            {
                userID: 53453555,
                rating: 'like'
            },
            {
                userID: 53453555,
                rating: 'like'
            },
            {
                userID: 53453555,
                rating: 'like'
            },
            {
                userID: 53453555,
                rating: 'like'
            },
            {
                userID: 53453555,
                rating: 'unlike'
            },
            {
                userID: 53453555,
                rating: 'unlike'
            },
            {
                userID: 53453555,
                rating: 'unlike'
            },
            {
                userID: 53453555,
                rating: 'unlike'
            },
            {
                userID: 53453555,
                rating: 'unlike'
            },
            {
                userID: 53453555,
                rating: 'unlike'
            },
            {
                userID: 53453555,
                rating: 'unlike'
            },
            {
                userID: 53453555,
                rating: 'unlike'
            },
            {
                userID: 53453555,
                rating: 'love'
            },
        ]
    }
    const [userList, setUserList] = useState([])
    useEffect(() => {
        setUserList(user?.likeUnlike?.filter((like, index, arr) => like.rating));
    }, [])
    const like = user?.likeUnlike?.filter((like, index, arr) => like.rating === 'like');
    const unlike = user?.likeUnlike?.filter((like, index, arr) => like.rating === 'unlike');
    const love = user?.likeUnlike?.filter((like, index, arr) => like.rating === 'love');
    return (
        <div>
            <div className='font-bold mb-2 '>
                <div className=' flex items-center gap-1 justify-end border-b p-1'>
                    <button
                        className='btn-primary btn-xs btn-outline btn flax gap-1 items-center '
                        onClick={() => setUserList(user?.likeUnlike?.filter((like, index, arr) => like.rating))}
                    >
                        <p className='font-mono text-xs'>
                            All {user?.likeUnlike?.length}
                        </p>
                    </button>
                    <button
                        className='btn-primary btn-xs btn-outline btn flax gap-1 items-center '
                        onClick={() => setUserList(like)}
                    >
                        <Like color='#00ff00' />
                        <p className='font-mono text-xs'>
                            {
                                like?.length
                            }
                        </p>
                    </button>

                    <button
                        className='btn-primary btn-xs btn-outline btn flax gap-1 items-center'
                        onClick={() => setUserList(unlike)}
                    >
                        <Like color='#ff2020' style={{ transform: 'rotate(180deg)' }} />
                        <p className='font-mono text-xs'>
                            {
                                unlike?.length
                            }
                        </p>
                    </button>

                    <button
                        className='btn-primary btn-xs btn-outline btn flax gap-1 items-center'
                        onClick={() => setUserList(love)}
                    >
                        <EmoticonLove color='#ff00f2' />
                        <p className='font-mono text-xs'>
                            {
                                love?.length
                            }
                        </p>
                    </button>

                </div>
                <h6 className='m-0'></h6>
                {
                    userList?.map((likeUnlike, index) => <GetUserNameAndLikeUnlike key={index} likeUnlike={likeUnlike} />)
                }
            </div>
        </div>
    );
};

const GetUserNameAndLikeUnlike = ({ likeUnlike }) => {
    const { userID, rating } = likeUnlike

    return (
        <div>
            <div className='flex items-center justify-between gap-1 mb-1 mt-1'>
                <div className='flex items-center gap-2'>
                    <div className="avatar ">
                        <div className="w-6 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                        </div>
                    </div>
                    <h1>Md Rakibul Islam</h1>
                </div>
                <div>
                    {
                        rating === 'like' &&
                        <button
                            className='bg-[#00ff00] p-1 rounded-[50%] btn-disabled relative'
                        >
                            <Like color='white' />
                        </button>
                    }

                    {
                        rating === 'unlike' &&
                        <button
                            className='bg-[#ff2020] p-1 rounded-[50%] btn-disabled relative'
                        >
                            <Like color='white' style={{ transform: 'rotate(180deg)' }} />
                        </button>
                    }
                    {
                        rating === 'love' &&
                        <button
                            className='bg-[#ff00f2] p-1 rounded-[50%] btn-disabled relative'
                        >
                            <EmoticonLove color='white' />
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}
export default LikeUsersList;