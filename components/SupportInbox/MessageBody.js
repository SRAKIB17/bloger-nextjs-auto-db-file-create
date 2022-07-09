import React, { useEffect } from 'react';

const MessageBody = ({ messageBody }) => {
    const { adminId, support_id, userID, adminReply, message } = messageBody;

    // const onloadMessageSupport = (id) => {
    //     const iframe = document.getElementById('supportInboxMsgBody' + id);
    //     iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
    //     iframe.contentWindow.document.body.style.textAlign = 'justify'
    // }

    return (
        <div>
            <div className='w-full' id='supportInboxBody'>
                {
                    adminReply &&
                    <div>
                        <div className=' flex justify-start items-start mt-2 mb-2 w-full'>
                            <div className="avatar mr-1 mt-4">
                                <div className="w-[16px] rounded-full ">
                                    <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                                </div>
                            </div>

                            <div className='bg-base-200  p-3 w-full max-w-[80%] shadow-inner rounded-lg rounded-br-3xl'>
                                <div dangerouslySetInnerHTML={{ __html: message }}></div>
                                {/* <iframe
                                    data-supportibox='true'
                                    onLoad={() => onloadMessageSupport(userID + support_id)}
                                    scrolling='no'
                                    className='w-fit  text-center block '
                                    id={'supportInboxMsgBody' + (userID + support_id)}
                                    srcDoc={message}
                                    src="/api/preview"
                                    frameBorder="0"
                                ></iframe> */}
                            </div>
                        </div>
                    </div>
                }
                {
                    adminReply ||
                    <div>


                        <div className='relative flex w-full justify-end mt-1 mb-1 items-start'>
                            <div className='bg-base-200 flex p-3 shadow-inner w-full max-w-[80%]  rounded-lg rounded-bl-3xl'>
                                {/* <iframe
                                    onLoad={() => onloadMessageSupport(userID + support_id)}
                                    scrolling='no'
                                    className='w-fit overflow-auto'
                                    id={'supportInboxMsgBody' + (userID + support_id)}
                                    srcDoc={message}
                                    src="/api/preview"
                                    frameBorder="0"
                                ></iframe> */}
                                {/* <div dangerouslySetInnerHTML={{ __html: message }}></div> */}
                                <div className='break-words overflow-hidden text-sm'>
                                    {message}
                                </div>
                            </div>
                            <div className="avatar ml-1 mt-4">
                                <div className="w-[16px] rounded-full ">
                                    <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                                </div>
                            </div>
                        </div>
                    </div>

                }
            </div>
        </div>
    );
};

export default MessageBody;