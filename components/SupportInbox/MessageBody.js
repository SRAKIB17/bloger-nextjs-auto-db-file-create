import React from 'react';

const MessageBody = ({ messageBody }) => {
    const { adminId, userID, adminReply, message } = messageBody
    return (
        <div>
            <div className='w-full'>
                {
                    adminReply &&
                    <div>
                        <div className=' flex justify-start items-start mt-2 mb-2'>
                            <div className="avatar mr-1 mt-6">
                                <div className="w-[16px] rounded-full ">
                                    <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                                </div>
                            </div>

                            <div className='bg-base-200  p-4 w-fit max-w-[80%] shadow-inner rounded-3xl text-justify'>
                                <div dangerouslySetInnerHTML={{ __html: message }}></div>
                            </div>
                        </div>
                    </div>
                }
                {
                    adminReply ||
                    <div>


                        <div className=' relative flex justify-end mt-1 mb-1 items-start'>
                            <div className='bg-base-200 p-4 shadow-inner w-fit max-w-[80%]  rounded-3xl'>
                                <div dangerouslySetInnerHTML={{ __html: message }}></div>
                            </div>
                            <div className="avatar ml-1 mt-6">
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