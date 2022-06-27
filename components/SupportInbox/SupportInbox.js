import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import classTagShortcutInput from '../hooks/hooks/useFindClassAttr';
import styles from '../profile/NewPost/NewPost.module.css'
import { SendShare } from '../ReactRSIcon';
import MessageBody from './MessageBody';
import inbox from './SupportInbox.module.css'

const SupportInbox = () => {


    function closeSupportInbox() {
        document.getElementById("SupportInbox").style.width = "0";
    }



    const textareaRef = useRef();


    const onchangeInput = (e) => {
        heightAutoHandle(e)
        classTagShortcutInput(e, textareaRef)
    }
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

    // const { data, refetch } = useQuery(['supportMessage', 54354], () => axios.get('/api/comment'))
    // const message = data?.data
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
            message: 'গিয়েছিলাম খিচুড়ি নিয়ে, সবাই আনন্দ করে খাইলো কিন্তু ৫০ টির মতো হিন্দু ধর্মাবলম্বী পরিবার খিচুড়ি গ্রহন কর রেনি। কারণ তাদের ধর্মের বিধানানুযায়ী আজকের জন্য তা গ্রহন করতে নিষেধ করা হয়েছে। তাই তড়িঘড়ি করে এ ৫০ টি পরিবারের জন্য ফল-ফ্রুটসের ব্যবস্থা করলাম। আহা তাদের খুশি কে দেখে! কিছু কিছু সময় নিজেকে বিলিয়ে দিতে ইচ্ছে করে।'
        },
        {
            userID: '3534553',
            adminReply: false,
            adminId: '534545534',
            message: `
            <video width="320" height="240"  preload="auto" controls muted poster="http://rakib17.hexat.com/icon/busy.gif" loop autoplay>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                <source src="movie.ogg" type="video/ogg">
                Your browser does not support the video tag.
            </video>
    
            `
        },

        {
            userID: '3534553',
            adminReply: true,
            adminId: '534545534',
            message: `
            <video width="320" height="240"  preload="auto" controls muted poster="http://rakib17.hexat.com/icon/busy.gif" loop autoplay>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                <source src="movie.ogg" type="video/ogg">
                Your browser does not support the video tag.
            </video>
    
            `
        }
    ]
    const [messageSet, setMessst] = useState([])
    useEffect(() => {
        setMessst(message)
    }, [])
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
        setMessst([...messageSet, messageBody])

        const myDiv = document.getElementById("supportMessageBody");
        myDiv.scrollTop = myDiv.scrollHeight;
        // refetch()
    }
    // console.log(data)
    return (
        <div>

            <div id="SupportInbox" style={{ overflow: 'hidden', paddingTop: '0px' }} className={styles.NewPostNav + ' bg-base-100 '}>
                <div className='max-w-xl mx-auto shadow-2xl p-4'>
                    <div className='w-full bg-base-100 z-20 border-b-2 flex items-center' id='topSupportInboxDIV'>
                        <h1 className=' relative text-2xl pb-1 left-[25px] ml-[25px]'>Support Inbox</h1>
                        <a href="#" className={styles.closebtn} onClick={closeSupportInbox}>&times;</a>
                    </div>


                    <div className={(inbox.inboxHideScrollBar) + ' p-4 overflow-auto overflow-x-hidden  h-full'} id='supportMessageBody'>
                        <div  >

                            {
                                messageSet?.map((messageBody, index) => <MessageBody key={index} messageBody={messageBody} />)
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