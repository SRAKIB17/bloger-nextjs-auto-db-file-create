import React from 'react';

const MessageBody = ({ messageBody }) => {
    const { adminId, userID, adminReply, message } = messageBody
    console.log(message)
    return (
        <div>
            <div className='w-full'>
                {
                    adminReply &&
                    <div>
                        <div className='  flex justify-start items-start mt-1 mb-1'>
                            <div className="avatar mr-1 mt-6">
                                <div className="w-[20px] rounded-full ">
                                    <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                                </div>
                            </div>

                            <div className='p-4 w-fit max-w-[80%] shadow-2xl rounded-3xl text-justify'>
                                <div dangerouslySetInnerHTML={{ __html: message }}></div>
                            </div>
                        </div>
                    </div>
                }
                {
                    adminReply ||
                    <div>


                        <div className=' relative flex justify-end mt-1 mb-1 items-start'>
                            <div className='p-4  w-fit max-w-[80%] shadow-2xl rounded-3xl'>
                                <div dangerouslySetInnerHTML={{ __html: message }}></div>
                            </div>
                            <div className="avatar ml-1 mt-6">
                                <div className="w-[20px] rounded-full ">
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