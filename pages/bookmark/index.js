/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { ArrowsCheck, Camera, Delete, Writing } from '../../components/ReactRSIcon';
import { UserFullInfoProvider } from '../_app';
import axios from 'axios'
import { useQuery } from 'react-query';
import { useRouter } from 'next/router'
import LoadingSpin from '../../components/LoadingSpin';

const Index = () => {
    const router = useRouter()
    const { user, user_details } = useContext(UserFullInfoProvider);

    const userID = user_details?.userID

    const [shows, setShowPosts] = useState(10)
    const [getPage, setGetPage] = useState(1)

    const pageHandle = () => {
        router.query.page = getPage + 1;
        setGetPage(getPage + 1)
        router.push(router)
        router.prefetch(router);
    }
    const { data, isLoading, refetch } = useQuery(['getBookmarkUser', userID], () => axios.get(`/api/bookmark/get-bookmark-db-user?email=${user_details?.email}&user_id=${userID}`,
        {
            headers: {
                access_token: sessionStorage.getItem('accessAutoG'),
                token: localStorage.getItem('token')
            }
        }));
    const bookmark = data?.data?.result || []
    const [getBookmark, setPost] = useState([]);
    useEffect(() => {
        if (bookmark?.length > 0) {
            setPost(bookmark)
        }
    }, [bookmark])

    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }
    return (
        <div className='h-[100vh]'>
            <Header />
            <div className='bg-base-100 h-full w-full md:ml-16 p-2 mr-2 p-4'>
                {
                    isLoading ?
                        <LoadingSpin /> :
                        <ul className=" p-0 flex-col gap-1">
                            {
                                getBookmark?.map((bookmark, index) =>
                                    <Bookmark key={index} bookmark={bookmark} refetch={refetch} />
                                )
                            }
                        </ul>

                }
            </div>
            <div className=" p-4 mt-2 text-center w-full bg-base-100">
                <button
                    className='btn btn-primary lg:btn-sm btn-xs w-32 btn-outline mb-4'
                    onClick={() => pageHandle()}
                >
                    Next
                </button>
            </div>
        </div>
    );
};



const Bookmark = ({ bookmark, refetch }) => {
    const router = useRouter()
    const { user, user_details } = useContext(UserFullInfoProvider);

    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }
    const post_id = bookmark?.post_id;



    const [showOption, setShowOption] = useState(null);
    const showOptionHandle = (e) => {
        if (e.type == "mouseleave" && showOption) {
            setShowOption(false)
        }
        else if (e.type == "mouseenter" && !showOption) {
            setShowOption(true)
        }
    }

    // *****************EDIT NAME*******************

    const [editBookmark, setEditBookmark] = useState(null);
    const [editLoading, setEditLoading] = useState(null)
    const editTitleBookmarkHandle = async (e) => {
        e.preventDefault()
        setEditLoading(true);
        const id = editBookmark;
        const bookmarkTitle = e.target.bookmark.value;
        const { data } = await axios.put(`/api/bookmark/update-title-bookmark?email=${email}&user_id=${userID}&bookmark_id=${id}`, { title: bookmarkTitle },
            {
                headers: {
                    access_token: sessionStorage.getItem('accessAutoG'),
                    token: localStorage.getItem('token')
                }
            });
        if (data?.message === 'success') {
            refetch()
            if (data?.result?.acknowledged) {
                refetch()
                setEditLoading(null)
                setEditBookmark(null)
            }
        }
        else if (data?.message === 'error') {
            alert('something is wrong')
            setEditLoading(null)
            setEditBookmark(null)
        }
        setEditLoading(null)
        setEditBookmark(null)
    }


    // ************DELETE ONE**********************
    const [deleteBookmarkLoading, setDeleteBookmarkLoading] = useState(null);
    const userID = user_details?.userID;
    const email = user_details?.email;
    const deleteBookmarkHandle = async () => {
        setDeleteBookmarkLoading(true)
        try {
            const { data } = await axios.delete(`/api/bookmark/get-bookmark-db-user?email=${email}&user_id=${userID}&post_id=${post_id}`,
                {
                    headers: {
                        access_token: sessionStorage.getItem('accessAutoG'),
                        token: localStorage.getItem('token')
                    }
                });
            if (data?.message === 'success') {
                refetch()
                setDeleteBookmarkLoading(false)
                if (data?.result?.acknowledged) {
                    refetch()
                    setDeleteBookmarkLoading(false)
                }
            }
            else if (data?.message === 'error') {
                alert('something is wrong')
                setDeleteBookmarkLoading(false)
            }


        }
        finally {
            setDeleteBookmarkLoading(false)

        }

    }
    return (
        <div>
            <div>
                <div className='max-w-[400px] flex  justify-between  ' >
                    <div className='flex items-center justify-start gap-1 btn btn-sm font-extralight'>
                        <div>
                            <Camera className="border-[1px] rounded-sm" />
                        </div>
                        <div>
                            {
                                editBookmark ?
                                    <>
                                        <div>
                                            {
                                                editLoading ?
                                                    <li className='text-[16px] relative'>
                                                        {bookmark?.title}
                                                        <p className='absolute animate-spin border-b-2 border-r-2 w-4 h-4 rounded-[50%] top-0 border-rose-500'>
                                                        </p>
                                                    </li>
                                                    :
                                                    <form onSubmit={editTitleBookmarkHandle} className='flex items-center gap-1'>
                                                        <input
                                                            type="text"
                                                            name='bookmark'
                                                            defaultValue={bookmark?.title}
                                                            className="input input-sm input-primary pl-1 ml-1"
                                                        />
                                                        <button className='btn btn-sm btn-primary'>
                                                            <ArrowsCheck size='20' className='font-extrabold' />
                                                        </button>
                                                    </form>

                                            }
                                        </div>
                                    </>
                                    :

                                    (deleteBookmarkLoading ?
                                        <li className='text-[16px] relative'>
                                            {bookmark?.title}
                                            <p className='absolute animate-spin border-b-2 border-r-2 w-4 h-4 rounded-[50%] top-0 border-rose-500'>
                                            </p>
                                        </li>
                                        :
                                        <li className='text-[16px]' onClick={() => navigate('/story/' + post_id)}>
                                            {bookmark?.title}
                                        </li>)
                            }
                        </div>
                    </div>

                    <div className='relative' onMouseEnter={showOptionHandle} onMouseLeave={showOptionHandle}>
                        <div className='text-2xl font-extrabold'>
                            <button className='btn btn-outline btn-warning btn-sm'>
                                ...
                            </button>
                        </div>

                        {
                            (showOption && !deleteBookmarkLoading) &&
                            <div className='absolute z-20 top-6'>
                                <div className='flex flex-col gap-1 '>
                                    <button
                                        onClick={() => setEditBookmark(bookmark?._id)}
                                        className='btn-xs btn text-xs w-28 flex gap-1 justify-start items-center btn-success'
                                    >
                                        <Writing />  Edit Title
                                    </button>
                                    <button
                                        className='btn-xs btn text-xs w-28 flex gap-1 justify-start items-center btn-warning '
                                        onClick={deleteBookmarkHandle}
                                    >
                                        <Delete />  Delete
                                    </button>
                                </div>
                            </div>
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Index;