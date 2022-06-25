import React from 'react';

const MessageBody = ({ messageBody }) => {
    const { adminId, userID, adminReply, message } = messageBody
    console.log(message)
    return (
        <div>
            <div>
                {
                    adminReply &&
                    <div className='shadow-2xl rounded-md relative left-0 h-fit'>
                        <div className='text-left p-4'>
                            <div dangerouslySetInnerHTML={{ __html: message }}></div>
                        </div>
                    </div>
                }
                {
                    adminReply ||
                    <div className='shadow-2xl rounded-md relative right-0 w-[90%]'>
                        <div className=' text-right p-4'>
                            <div dangerouslySetInnerHTML={{ __html: message }}></div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default MessageBody;