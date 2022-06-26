import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import classTagShortcutInput from '../hooks/hooks/useFindClassAttr';
import styles from '../profile/NewPost/NewPost.module.css'


const Help = () => {


    function closeSupportInbox() {
        document.getElementById("HelpMenu").style.width = "0";
    }



    const textareaRef = useRef();


    const onchangeInput = (e) => {
        heightAutoHandle(e)
        classTagShortcutInput(e, textareaRef)
    }
   
  
    const heightAutoHandle = (e) => {
      

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
    
    const postHandle = async (event) => {
        event.preventDefault();
        const body = event.target.supportMessage.value;
        const messageBody = {
            userID: '3534553',
            adminReply: false,
            adminId: '534545534',
            message: body
        }

        event.target.reset()


       
        setMessst([...messageSet, messageBody])

        const myDiv = document.getElementById("supportMessageBody");
        myDiv.scrollTop = myDiv.scrollHeight;
        // refetch()
    }
    // console.log(data)
    return (
        <div>

            <div id="HelpMenu" style={{ overflow: 'hidden', paddingTop: '0px' }} className={styles.NewPostNav + ' bg-base-100 '}>
                <div className='max-w-xl mx-auto shadow-2xl p-4 '>
                    <div className='w-full bg-base-100 z-20 border-b-2 flex items-center' id='topSupportInboxDIV'>
                        <h1 className=' relative text-2xl pb-1 left-[25px] ml-[25px]'>Support Inbox</h1>
                        <a href="#" className={styles.closebtn} onClick={closeSupportInbox}>&times;</a>
                    </div>


                    <div className='p-4 overflow-auto overflow-x-hidden  h-full' id='supportMessageBody'>
                        <div  >

                            {
                                // messageSet?.map((messageBody, index) => <MessageBody key={index} messageBody={messageBody} />)
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
                                   
                                    onChange={onchangeInput}
                                    onInput={onchangeInput}
                                    onCut={heightAutoHandle}
                                    onPaste={heightAutoHandle}
                                    onDrop={heightAutoHandle}
                                    onKeyDown={heightAutoHandle}
                                >
                                </textarea>
                                <div>
                                    <button className='btn btn-sm btn-primary ml-2 text-xs'>send</button>
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



export default Help;