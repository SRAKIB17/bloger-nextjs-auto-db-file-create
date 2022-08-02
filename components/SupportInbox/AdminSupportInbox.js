/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { UserFullInfoProvider } from '../../pages/_app';
import LoadingSpin from '../LoadingSpin';
import maleAvatar from '../../public/maleAvatar.png'
import femaleAvatar from '../../public/femaleAvatar.png'


const AdminSupportInbox = ({ setInboxMessage: { setInboxMessage, inboxUserId, setInboxUserId } }) => {

    const { user, user_details, isLoading, isAdmin } = useContext(UserFullInfoProvider);

    const { data, isLoading: adminInboxLoading } = useQuery(['SupportInboxAdmin', inboxUserId, user_details], () => axios.get(`/api/inbox/support/?email=${user_details?.email}`,
        {
            headers: {
                access_token: sessionStorage.getItem('accessAutoG'),
                token: localStorage.getItem('token')
            }
        }
    ))
    const messageALl = data?.data?.result || []

    const uniqueUserId = [];
    messageALl?.forEach(message => {
        if (!uniqueUserId.includes(message?.userID)) {
            uniqueUserId.push(message?.userID)
        }
    });
    const showInboxSpecific = (id) => {
        setInboxUserId(id)
    }
    return (
        <div>
            <div>
                {
                    adminInboxLoading &&
                    <div>
                        <LoadingSpin />
                    </div>
                }
                {
                    uniqueUserId?.map((userID, index) =>
                        <UserListComponent userID={userID} setInboxUserId={setInboxUserId} key={index} />
                    )
                }
            </div>
        </div>
    );
};

const UserListComponent = ({ userID, setInboxUserId }) => {
    // GET COMMENT USER DETAILS 
    const inboxUserInfo = useQuery(['inboxUserId', userID], () => axios.get(`/api/public_user_details/${userID}`,
        {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        }));

    const user_details = inboxUserInfo?.data?.data?.user_details;
    const isLoading = inboxUserInfo.isLoading;
    return (
        <div className='border-2 btn btn-sm w-fit p-0 pr-2' onClick={() =>setInboxUserId(userID)}>
            {
                isLoading ?
                    <p className='absolute animate-spin border-b-2 border-r-2 w-4 h-4 rounded-[50%]'>
                    </p>
                    :
                    <div className='flex items-center'>
                        <div className="avatar ml-2">
                            <div className="w-[20px] rounded-full ">
                                {
                                    (user_details?.profile == '' || !user_details?.profile) ?
                                        <img
                                            src={user_details?.gender == 'Female' ? femaleAvatar.src : maleAvatar?.src}
                                            alt=''
                                            className='w-full bg-base-100'
                                        />
                                        :
                                        <img
                                            src={user_details?.profile}
                                            alt=''
                                        />
                                }
                            </div>
                        </div>
                        <div className='ml-1 w-full '>
                            <div
                                className='break-words overflow-hidden text-sm cursor-pointer font-extralight '
                                
                            >
                                {
                                    user_details?.name || 'User'
                                }
                            </div>
                        </div>
                    </div>
            }

        </div >
    )
}
export default AdminSupportInbox;

// adminId: ""
// adminReply: false
// emoji: null
// message: "<code> </code> "
// userID: "314a78fa90c2ab69e439eba5"
// _id: "62e94cc7fac6fece28ba3f5f"
// {/* <div
//                             onClick={() => showInboxSpecific(k)}
//                             key={index}
//                             className='bg-base-200 flex p-3 shadow-inner relative rounded-3xl w-full justify-end mt-1 mb-1 items-center cursor-pointer'
//                         >
//                             <div className="avatar ml-1">
//                                 <div className="w-[20px] rounded-full ">
//                                     <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
//                                 </div>
//                             </div>
//                             <div className='ml-1 w-full '>
//                                 <div className='break-words overflow-hidden text-lg font-bold'>
//                                     {
//                                         k
//                                     }
//                                 </div>
//                             </div>
//                         </div> */}