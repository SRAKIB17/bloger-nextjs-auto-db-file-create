/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const AdminSupportInbox = ({ setInboxMessage: { setInboxMessage, inboxUserId, setInboxUserId } }) => {
    const { data } = useQuery(['SupportInboxAdmin', inboxUserId], () => axios.get(`/api/support_inbox/`))
    const uniqueUserId = []
    data?.data?.forEach(inbox => {
        if (!uniqueUserId.includes(inbox?.userID)) {
            uniqueUserId.push(inbox?.userID)
        }
    });

    const showInboxSpecific = (id) => {
        setInboxUserId(id)
    }
    return (
        <div>
            <div>
                {
                    uniqueUserId?.map((k, index) =>
                        <div
                            onClick={() => showInboxSpecific(k)}
                            key={index}
                            className='bg-base-200 flex p-3 shadow-inner relative rounded-3xl w-full justify-end mt-1 mb-1 items-center cursor-pointer'
                        >
                            <div className="avatar ml-1">
                                <div className="w-[20px] rounded-full ">
                                    <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                                </div>
                            </div>
                            <div className='ml-1 w-full '>
                                <div className='break-words overflow-hidden text-lg font-bold'>
                                    {
                                        k
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AdminSupportInbox;