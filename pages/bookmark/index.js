/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import { Camera } from '../../components/ReactRSIcon';
import { UserFullInfoProvider } from '../_app';
import axios from 'axios'
import { useQuery } from 'react-query';

const Index = () => {

    const { user, user_details } = useContext(UserFullInfoProvider);

    const userID = user_details?.userID
    const { data } = useQuery(['getBookmarkUser', userID], () => axios.get(`http://localhost:3000/api/bookmark/get-bookmark-db-user?email=${user_details?.email}&user_id=${userID}`,
        {
            headers: {
                access_token: sessionStorage.getItem('accessAutoG'),
                token: localStorage.getItem('token')
            }
        }));
    console.log(data)
    return (
        <div>
            <Header />
            <div className='bg-base-100 h-full w-full md:ml-16 p-2 mr-2'>
                {
                    [...Array(10).keys()].map((bookmark, index) => <Bookmark key={index} />)
                }
            </div>
        </div>
    );
};



const Bookmark = () => {
    return (
        <div>
            <div>
                <div className='w-full'>
                    <div className='float-left'>
                        {/* ----thumbnail------------ */}

                        {/* // (postRefMode === 'text' && thumbnail) ? */}
                        <div className='mr-4'>
                            <figure>
                                <img
                                    // src={thumbnail}
                                    alt=""
                                    className='max-w-[200px] h-[200px] md:max-w-[250px] md:h-[160px] rounded-md border-2'
                                />
                            </figure>
                        </div>

                        <div className='mr-4'>
                            <Camera size='150' className="border-2 rounded-md" />
                        </div>

                    </div>
                    {/* style={{ width: '100%', wordWrap: "break-word", whiteSpace: 'pre-line' }} */}
                    <div>
                        {
                            // short_description?.slice(0, 1000)
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Index;