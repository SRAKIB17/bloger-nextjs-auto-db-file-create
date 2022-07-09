/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import useAdminCheck from '../hooks/checkUser/useAdminCheck';
import classTagShortcutInput from '../hooks/hooks/useFindClassAttr';
import styles from '../profile/NewPost/NewPost.module.css'
import { SendShare } from '../ReactRSIcon';
import AdminSupportInbox from './AdminSupportInbox';
import MessageBody from './MessageBody';
import inbox from './SupportInbox.module.css'
import style from './Admin.module.css'

const SupportInbox = () => {


    function closeSupportInbox() {
        document.getElementById("SupportInbox").style.width = "0";
    }
    const { admin } = useAdminCheck()


    const textareaRef = useRef();


    const onchangeInput = (e) => {
        heightAutoHandle(e)
        classTagShortcutInput(e, textareaRef)
    }

    //********************************************** set auto height support inbox box*************************** */
    const handleChatBoxHeight = () => {
        const sendMessageSupportInboxForm = document.getElementById('sendMessageSupportInboxForm');
        document.getElementById('supportMessageBody').style.height = document.getElementById('SupportInbox').offsetHeight - (sendMessageSupportInboxForm.offsetHeight + 80) + 'px'
    }
    useEffect(() => {
        handleChatBoxHeight()
        document.body.onresize = () => {
            handleChatBoxHeight()
        }
    }, [])
    //***(*************************************************************** auto matic high increase for inbox ***************************) */
    const heightAutoHandle = (e) => {
        handleChatBoxHeight()
        e.target.style.height = 'auto';
        if (e.target.scrollHeight < 150) {
            e.target.style.height = e.target.scrollHeight + 'px'
        }
        else {
            e.target.style.height = 150 + 'px'
        }
    }



    const [inboxMessage, setInboxMessage] = useState([]);
    const [inboxUserId, setInboxUserId] = useState(1);

    const { data } = useQuery(['SupportInbox', inboxUserId], () => axios.get(`/api/support_inbox/${inboxUserId}`))

    const postHandle = async (event) => {
        event.preventDefault();
        handleChatBoxHeight()
        const body = event.target.supportMessage.value;
        const messageBody = {
            userID: '3534553',
            adminReply: false,
            adminId: '534545534',
            message: body
        }

        event.target.reset()


        // const post = {
        //     userID: '54fsdlj53',
        //     post_id: '534fsdfjo345',
        //     post_title: event.target.title.value,
        //     thumbnail: 'https://api.lorem.space/image/shoes?w=400&h=225',
        //     image: '',
        //     time: 'dec 15, 2021',
        //     short_description: event.target.short_description.value,
        //     category: event.target.category.value,
        //     postBody: body,
        //     sort: '5345345345',
        //     tags: event.target.tags.value.split(','),
        //     postRefMode: postRefMode
        // }
        // console.log(post)
        // const { data } = await axios.post('/api/comment', message);
        // console.log(data)
        setInboxMessage([...inboxMessage, messageBody])

        const myDiv = document.getElementById("supportMessageBody");
        myDiv.scrollTop = myDiv.scrollHeight;
        // refetch()
    }
    //************************************************ hide or show all inbox message********************************************** */
    const hideAllInboxMessageForAdmin = () => {
        try {
            const adminAllInboxMessage = document.getElementById('adminAllInboxMessage');
            console.log(adminAllInboxMessage.offsetHeight)
            if (adminAllInboxMessage.offsetHeight < 10) {
                adminAllInboxMessage.style.height = '224px'
                adminAllInboxMessage.style.borderBottomWidth = '2px'
            }
            else {
                adminAllInboxMessage.style.height = '0px'
                adminAllInboxMessage.style.borderBottomWidth = '0px'
            }
        }
        catch {

        }
    }
    return (
        <div>

            <div
                id="SupportInbox"
                style={{ overflow: 'hidden', paddingTop: '0px' }}
                className={styles.NewPostNav + ' bg-base-100 '}
            >
                <div
                    className='max-w-xl mx-auto shadow-2xl p-4'
                >
                    <div
                        className='w-full bg-base-100 z-20 border-b-2 ' id='topSupportInboxDIV'>
                        <div className='flex justify-between items-center ml-[20px] mr-[20px] relative text-2xl pb-1 '>
                            <h1>
                                Support Inbox
                            </h1>

                            {/* ********************************************* ***********************************
                             it show only admin show and it will work for hide all inbox message ..
                             hight 0 to 224px
                            *************************************************************************** */}
                            {
                                admin?.admin &&
                                <div className='mr-20'>
                                    <button
                                        onClick={hideAllInboxMessageForAdmin}
                                        className='font-bold btn btn-sm text-white btn-warning'
                                    >
                                        X
                                    </button>
                                </div>
                            }
                        </div>
                        <a
                            href="#"
                            className={styles.closebtn}
                            onClick={closeSupportInbox}
                        >
                            &times;
                        </a>
                    </div>

                    <div
                        className={(inbox.inboxHideScrollBar) + '  p-4 overflow-auto overflow-x-hidden  h-full '}
                        id='supportMessageBody'
                    >

                        {/* ********************************************* ***********************************
                             it show only admin show and
                             here setInboxMessage, 
                             1. inboxUserId = set id userId who want massage admin 
                             2. setInboxUserId  = admin click a userId and see message specific userId
                    ****************************************************************************** */}

                        {
                            admin?.admin &&
                            <div className={style.showAllMessage + ' overflow-auto  border-b-primary absolute top-[57px] w-full max-w-[500px] z-40 bg-base-100'} id='adminAllInboxMessage'>
                                <div className='rounded-lg border-b overflow-auto h-56 hideScrollBar '>
                                    <AdminSupportInbox setInboxMessage={{ setInboxMessage, inboxUserId, setInboxUserId }} />
                                </div>
                            </div>

                        }

                        <div>

                            {
                                data?.data?.map((messageBody, index) => <MessageBody key={messageBody?.support_id} messageBody={messageBody} />)
                            }
                        </div>



                    </div>
                    <div className='border-t-2 pt-3' id='sendMessageSupportInboxForm'>

                        <form action="" onSubmit={postHandle} className='flex flex-col ml-4 mr-4'>

                            <div className='flex items-end w-full'>
                                <textarea ref={textareaRef}
                                    id='textForm'
                                    className='input input-success font-mono  w-full'
                                    name="supportMessage"
                                    onBlur={onchangeInput}
                                    onKeyUp={handleChatBoxHeight}
                                    onChange={onchangeInput}
                                    onInput={onchangeInput}
                                    onCut={heightAutoHandle}
                                    onPaste={heightAutoHandle}
                                    onDrop={heightAutoHandle}
                                    onKeyDown={heightAutoHandle}
                                >
                                </textarea>
                                <div>
                                    <button className='btn btn-sm btn-primary ml-2 text-xs'><SendShare size='25' /></button>
                                </div>
                            </div>
                            {/* <TextArea /> */}
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};



export default SupportInbox;