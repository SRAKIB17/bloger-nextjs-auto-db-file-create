import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import classTagShortcutInput from '../hooks/hooks/useFindClassAttr';
import styles from '../profile/NewPost/NewPost.module.css'
import MessageBody from './MessageBody';


const SupportInbox = () => {



    function closeSupportInbox() {
        document.getElementById("SupportInbox").style.width = "0";
    }

    const postHandle = async (event) => {
        event.preventDefault();
        const body = event.target.postBody.value;




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
        // const { data } = await axios.post('/api/test', post);
        // // console.log(data)
    }

    const textareaRef = useRef();



    const shortcutKeyboard = (e) => {
        // classTagShortcutInput(e, textareaRef)
    }
    const onchangeInput = (e) => {
        heightAutoHandle(e)
        classTagShortcutInput(e, textareaRef)
    }
    useEffect(() => {
        const sendMessageSupportInboxForm = document.getElementById('sendMessageSupportInboxForm');
        sendMessageSupportInboxForm.style.marginTop = sendMessageSupportInboxForm.offsetHeight + 'px';
    }, [])
    const heightAutoHandle = (e) => {
        const sendMessageSupportInboxForm = document.getElementById('sendMessageSupportInboxForm');
        sendMessageSupportInboxForm.parentNode.style.marginTop = sendMessageSupportInboxForm.offsetHeight + 'px'


        e.target.style.height = 'auto';
        if (e.target.scrollHeight < 150) {
            e.target.style.height = e.target.scrollHeight + 'px'
        }
        else {
            e.target.style.height = 150 + 'px'
        }
    }
    const message = [
        {
            userID: '3534553',
            adminReply: false,
            adminId: '534545534',
            message: '5435645'
        },
        {
            userID: '3534553',
            adminReply: true,
            adminId: '534545534',
            message: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quam quis amet enim qui illo facilis corrupti libero molestias commodi itaque voluptate molestiae, ab ducimus? Quis perspiciatis quam quod voluptas?'
        },
        {
            userID: '3534553',
            adminReply: false,
            adminId: '534545534',
            message: '5435645'
        }
    ]
    return (
        <div>
            <div id="SupportInbox" className={styles.NewPostNav + ' bg-base-100 '}>
                <a href="#" className={styles.closebtn} onClick={closeSupportInbox}>&times;</a>


                <div className=' max-w-md mx-auto shadow-2xl h-full pt-4 relative ' id='supportMessageBody'>
                    <div className='p-4 overflow-auto overflow-x-hidden h-full' >

                        {
                            message?.map((messageBody, index) => <MessageBody key={index} messageBody={messageBody} />)
                        }
                    </div>


                    <div className='relative mt-[80px]' id='sendMessageSupportInboxFormParent'>
                        <div id='sendMessageSupportInboxForm' className='absolute bottom-0 bg-base-300 max-w-md w-full mb-0' >
                            <form action="" onSubmit={postHandle} className='flex  flex-col m-4'>

                                <div className='relative flex items-center'>
                                    <textarea ref={textareaRef}
                                        id='textForm'
                                        className='input input-success font-mono  w-[300px]'
                                        name="postBody"
                                        onBlur={onchangeInput}
                                        onKeyUp={(e) => shortcutKeyboard(e)}
                                        onChange={onchangeInput}
                                        onInput={onchangeInput}
                                        onCut={heightAutoHandle}
                                        onPaste={heightAutoHandle}
                                        onDrop={heightAutoHandle}
                                        onKeyDown={heightAutoHandle}
                                    >
                                    </textarea>
                                    <div className='align-bottom absolute right-[0%] ml-6 bottom-0'>
                                        <button className='btn btn-sm btn-primary ml-2 text-xs'>send</button>
                                    </div>
                                </div>
                                {/* <TextArea /> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};



export default SupportInbox;