/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';

import { useRouter } from 'next/router'

import { UserFullInfoProvider } from '../../../pages/_app';
import EachMessageBody from './EachMessageBody';
import MessageSentForm from './MessageSentForm.jsx';
import LoadingSpin from '../../LoadingSpin';

const InboxBody = ({ setUserList, specificId }) => {
    const { user, user_details, isLoading: userIsLoading, isAdmin } = useContext(UserFullInfoProvider);
    const message = [
        {
            user_one: "1",
            emoji: "",
            message: "\n                    Successfully delete your post.. \n                    ",
            time: "2022-09-11T17:41:48.996Z",
            user_two: "2",
            _id: "631e1ddc9a0f58eae414598b"
        }
    ]



    const { data, refetch, isLoading } = useQuery(['Inbox', user_details], () => axios.get(`/api/inbox?user_id=${user_details?.userID}&email=${user_details?.email}`,
        {
            headers: {
                access_token: sessionStorage.getItem('accessAutoG'),
                token: localStorage.getItem('token')
            }
        }
    ))
    const messages = data?.data;



    // console.log(message)
    //**************************************************************************** */
    const userList = [];
    // let count = 


    useEffect(() => {
        messages?.forEach(message => {
            if (message?.user_one == user_details?.userID && !userList?.includes(message?.user_two)) {
                userList?.push(message?.user_two)
            }
            else if (message?.user_two == user_details?.userID && !userList?.includes(message?.user_one)) {
                userList?.push(message?.user_one)
            }

        })

        setUserList(userList)
    }, [messages])



    const [showSpecificUserMessage, setShowSpecificUserMessage] = useState([])

    useEffect(() => {
        const getMessages = messages?.filter(message => message?.user_one == specificId || message?.user_two == specificId);
        setShowSpecificUserMessage(getMessages);
    }, [specificId]);

    //***************************************************************************** */


    const router = useRouter()



    const textareaRef = useRef();

    const [inboxMessage, setInboxMessage] = useState([]);
    useEffect(() => {
        setInboxMessage(messages)
    }, [])

    const [inboxUserId, setInboxUserId] = useState(null);


    // FOR EMOJI GIF AND OTHER //
    const [selectEmoji, setSelectEmoji] = useState(null)
    const [showEmojiGifSection, setShowEmojiGifSection] = useState(null);
    const [showMenuEmoji, setShowMenuEmoji] = useState(null);

    const handleChatBoxHeight = () => {
        try {
            const sendMessageInboxForm = document.getElementById('sendMessageInboxForm');
            document.getElementById('inboxMessageBody').style.height = document.getElementById('SupportInbox').offsetHeight - (sendMessageInboxForm.offsetHeight + 60) + 'px'
        }
        catch {

        }
    }

    const [messageLoading, setMessageLoading] = useState(null)
    const messagePostHandle = async (event) => {
        // setMessageLoading(true)
        event.preventDefault();
        handleChatBoxHeight()
        const body = event.target.supportMessage.value;
        const messageBody = {
            emoji: selectEmoji,
            user_one: user_details?.userID,
            adminReply: isAdmin?.admin,
            adminId: isAdmin?.admin ? user_details?.userID : '',
            message: body,
            user_two: specificId,
            time: new Date()
        }
       

        const { data } = await axios.post(`/api/inbox/?user_id${user_details?.userID}?email=${user_details?.email}`, messageBody,
            {
                headers: {
                    access_token: sessionStorage.getItem('accessAutoG'),
                    token: localStorage.getItem('token')
                }
            });

        // if (data?.message === 'success') {
        //     // setErrMsg(<p className='text-green-600'>Success</p>)
        //     setMessageLoading(false)
        //     refetch()
        //     setSelectEmoji(null)
        //     setShowMenuEmoji(null)
        //     setShowEmojiGifSection(null)
        //     if (data?.result?.acknowledged) {
        //         refetch()
        //         event.target.reset()
        //         setMessageLoading(false)
        //     }
        // }
        // else if (data?.message === 'error') {
        //     refetch()
        //     alert('something is wrong')
        //     // setErrMsg(<p className='text-red-600'>{data?.error}</p>)
        //     setMessageLoading(false)
        // }
        // event.target.reset()
        // setMessageLoading(false)
        // setInboxMessage([...inboxMessage, messageBody])

        // const myDiv = document.getElementById("inboxMessageBody");
        // myDiv.scrollTop = myDiv.scrollHeight;
        // refetch()
    }
    //************************************************ hide or show all inbox message********************************************** */
    const [showMessageList, setShowMessageList] = useState(true)
    const hideAllInboxMessageForAdmin = () => {
        setShowMessageList(!showMessageList)
    }


    const showMenuEmojiHandle = () => {
        setShowMenuEmoji(!showMenuEmoji)
        setSelectEmoji(null);
        setShowEmojiGifSection(null)
    }

    return (
        <div>
            <div
                id="SupportInbox"
                style={{ overflow: 'hidden', paddingTop: '0px', width: '100%' }}
                className="bg-base-100 h-[100vh] "
            >
                <div
                    className=' p-4'
                >
                    <div
                        className='w-full bg-base-100 z-20 border-b-2 ' id='topInboxDiv'>
                        <div className='flex justify-between items-center ml-[20px] mr-[20px] relative pb-1 '>
                            <h1 className='font-bold text-primary'>
                                Inbox
                            </h1>

                            {/* ********************************************* ***********************************
                             it show only admin show and it will work for hide all inbox message ..
                             hight 0 to 224px
                            *************************************************************************** */}

                            <div className='mr-20'>
                                <h1
                                    className='font-bold text-primary'
                                >
                                    All Message
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div
                        className=' relative  p-4 overflow-auto overflow-x-hidden  h-full '
                        id='inboxMessageBody'
                    >

                        {/* ********************************************* ***********************************
                             it show only admin show and
                             here setInboxMessage, 
                             1. inboxUserId = set id userId who want massage admin 
                             2. setInboxUserId  = admin click a userId and see message specific userId
                    ****************************************************************************** */}


                        <div className='relative'>

                            {
                                // InboxLoading && <LoadingSpin />
                            }
                            {
                                isLoading ?
                                    <LoadingSpin />
                                    :
                                    showSpecificUserMessage?.map((messageBody, index) => <EachMessageBody
                                        specificId={specificId}
                                        key={index} messageBody={messageBody} />)
                            }
                            {
                                (!showSpecificUserMessage && !isLoading) &&
                                <div className='text-gray-500 text-center text-xl'>
                                    No message
                                </div>
                            }
                        </div>



                    </div>
                    <div className='border-t-2 pt-3' id='sendMessageInboxForm'>

                        <MessageSentForm
                            messageLoading={messageLoading}
                            messagePostHandle={messagePostHandle}
                            selectEmoji={selectEmoji}
                            setSelectEmoji={setSelectEmoji}
                            setShowEmojiGifSection={setShowEmojiGifSection}
                            showEmojiGifSection={showEmojiGifSection}
                            showMenuEmoji={showMenuEmoji}
                            textareaRef={textareaRef}
                            showMenuEmojiHandle={showMenuEmojiHandle}
                        />
                    </div>
                </div>
            </div>

        </div >
    );
};



export default InboxBody;
