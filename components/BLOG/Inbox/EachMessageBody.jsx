/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import { UserFullInfoProvider } from '../../../pages/_app';
import EachReplyOwner from './EachReplyOwner';
import EachReplyUser from './EachReplyUser';


const EachMessageBody = ({ messageBody, specificId }) => {

    const { emoji, user_one, user_two, message, time } = messageBody;

    const { user, user_details, isLoading, isAdmin } = useContext(UserFullInfoProvider);
   
    return (
        <div>
            <div className='w-full text-sm' id='supportInboxBody'>
                {
                    (user_one == specificId || user_two == specificId) &&
                    <div className='flex flex-col'>
                        <EachReplyUser messageBody={messageBody} specificId={specificId} />
                    </div>
                }
                {
                    (user_one == user_details?.userID || user_two == user_details?.userID) &&
                    <div>
                        <EachReplyOwner
                            messageBody={messageBody}
                        />
                    </div>

                }
            </div>
        </div>
    );
};


export default EachMessageBody;