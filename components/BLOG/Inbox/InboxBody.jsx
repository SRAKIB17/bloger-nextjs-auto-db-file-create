/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
// import classTagShortcutInput from '../hooks/hooks/useFindClassAttr';
import classTagShortcutInput from '../hooks/Emmet/shortcutEmmetHtmlTagsAttr.js'
import { MenuBarCircle, SendShare } from '../../ReactRSIcon';
// import AdminSupportInbox from './AdminSupportInbox';

// import inbox from './SupportInbox.module.css'
// import style from './Admin.module.css'
// import usePrivatePageCheckUser from '../hooks/checkUser/privatePageCheckUser';
import { useRouter } from 'next/router'
import EmojiGifIndex from '../../Comment/EmojiGif/EmojiGifIndex';
import LoadingSpin from '../../LoadingSpin';
import { UserFullInfoProvider } from '../../../pages/_app';
import EachMessageBody from './EachMessageBody';
import MessageSentForm from './MessageSentForm.jsx';

const InboxBody = ({ inbox_body }) => {
    const { user, user_details, isLoading, isAdmin } = useContext(UserFullInfoProvider);

    // const asPath = useRouter()?.asPath
    // usePrivatePageCheckUser(asPath)

    const router = useRouter()



    const textareaRef = useRef();






    const [inboxMessage, setInboxMessage] = useState([]);
    useEffect(() => {
        setInboxMessage(inbox_body)
    }, [])
    const [inboxUserId, setInboxUserId] = useState(null);
    const { userID } = router.query;
    // useEffect(() => {
    //     if (isAdmin?.admin && userID) {
    //         setInboxUserId(userID)
    //     }
    //     else {
    //         setInboxUserId(user_details?.userID)
    //     }
    // }, [user_details])


    // const { data, refetch, isLoading: InboxLoading } = useQuery(['SupportInbox', inboxUserId, user_details], () => axios.get(`/api/inbox/support/${inboxUserId}?email=${user_details?.email}`,
    //     {
    //         headers: {
    //             access_token: sessionStorage.getItem('accessAutoG'),
    //             token: localStorage.getItem('token')
    //         }
    //     }
    // ))
    // const message = data?.data?.result;
    // console.log(message)
    // useEffect(() => {
    //     setInboxMessage(message)
    // }, [message])


    // FOR EMOJI GIF AND OTHER //
    const [selectEmoji, setSelectEmoji] = useState(null)
    const [showEmojiGifSection, setShowEmojiGifSection] = useState(null);
    const [showMenuEmoji, setShowMenuEmoji] = useState(null);

    const [messageLoading, setMessageLoading] = useState(null)
    const messagePostHandle = async (event) => {
        setMessageLoading(true)
        event.preventDefault();
        handleChatBoxHeight()
        const body = event.target.supportMessage.value;
        const messageBody = {
            emoji: selectEmoji,
            userID: inboxUserId,
            adminReply: isAdmin?.admin,
            adminId: isAdmin?.admin ? user_details?.userID : '',
            message: body,
            time: new Date()
        }

        const { data } = await axios.post(`/api/inbox/support/${inboxUserId}?email=${user_details?.email}`, messageBody,
            {
                headers: {
                    access_token: sessionStorage.getItem('accessAutoG'),
                    token: localStorage.getItem('token')
                }
            });
        if (data?.message === 'success') {
            // setErrMsg(<p className='text-green-600'>Success</p>)
            setMessageLoading(false)
            refetch()
            setSelectEmoji(null)
            setShowMenuEmoji(null)
            setShowEmojiGifSection(null)
            if (data?.result?.acknowledged) {
                refetch()
                event.target.reset()
                setMessageLoading(false)
            }
        }
        else if (data?.message === 'error') {
            refetch()
            alert('something is wrong')
            // setErrMsg(<p className='text-red-600'>{data?.error}</p>)
            setMessageLoading(false)
        }
        event.target.reset()
        setMessageLoading(false)
        setInboxMessage([...inboxMessage, messageBody])

        const myDiv = document.getElementById("inboxMessageBody");
        myDiv.scrollTop = myDiv.scrollHeight;
        refetch()
    }
    //************************************************ hide or show all inbox message********************************************** */
    const [showMessageList, setShowMessageList] = useState(true)
    const hideAllInboxMessageForAdmin = () => {
        setShowMessageList(!showMessageList)
    }


    const showMenuEmojiHandle = () => {
        setShowMenuEmoji(!showMenuEmoji)
        setSelectEmoji(null)
        setShowEmojiGifSection(null)
    }
    return (
        <div>
            <div
                id="SupportInbox"
                style={{ overflow: 'hidden', paddingTop: '0px', width: '100%' }}
                className="bg-base-100 h-[100vh]"
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

                        {/* {
                            (isAdmin?.admin && showMessageList) &&
                            <div className={' overflow-auto  border-b-primary sticky top-[-16px] w-full  z-40 bg-base-100'}
                                id='adminAllInboxMessage'
                            >
                                <div className=' absolute right-0 z-[30] top-[2px]'>
                                    <button className='btn btn-sm btn-secondary btn-outline text-right' onClick={hideAllInboxMessageForAdmin}>
                                        X
                                    </button>
                                </div>
                                <div className='rounded-lg border-b overflow-auto h-56 hideScrollBar mt-4'>
                                    <AdminSupportInbox setInboxMessage={{ setInboxMessage, inboxUserId, setInboxUserId }} />
                                </div>
                            </div>

                        } */}

                        <div className='relative'>

                            {
                                // InboxLoading && <LoadingSpin />
                            }
                            {
                                inboxMessage?.map((messageBody, index) => <EachMessageBody
                                    key={index} messageBody={messageBody} />)
                            }
                            {
                                inboxMessage?.length === 0 &&
                                <div className='text-gray-500'>
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
