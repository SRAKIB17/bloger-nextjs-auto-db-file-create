import About from "../../PublicProfile/About";
import { Delete, Email, Info, MessageDotDotDot } from "../../ReactRSIcon";
import maleAvatar from '../../../public/maleAvatar.png'
import femaleAvatar from '../../../public/femaleAvatar.png'
import { useRouter } from "next/router";
import style from './allUser.module.css'
import { useId, useState } from "react";
/* eslint-disable @next/next/no-img-element */
const ViewUser = ({ user, isLoadingAbout }) => {
    const { cover, email, facebook, gender, instagram, linkedin, location, name, profile, quote, roll, school, twitter, userID, work, youtube } = user;
    const router = useRouter()

    const navigate = (path) => {
        router.push(path)
        router.prefetch(path)
    }
    const [showInfo, setShowInfo] = useState(null)
    const showInfoHandle = (id) => {
        try {
            setShowInfo(!showInfo)
            const aboutDetailsAdmin = document.getElementById('aboutDetailsAdmin' + id);
            if (aboutDetailsAdmin.offsetHeight < 10) {
                aboutDetailsAdmin.style.height = '100%'
            }
            else {
                aboutDetailsAdmin.style.height = '0'
            }
        }
        catch {

        }
    }
    return (
        <div>
            <div className='p-2'>
                <div className='flex  gap-2 items-center justify-between'>
                    {/* *****FOR PROFILE PICTURE************* */}
                    <div className='flex gap-2 items-center '>
                        <div
                            onClick={() => navigate(`/profile/${userID}`)}
                            className="w-[22px] cursor-pointer h-[22px] overflow-hidden rounded-full ring ring-inherit ring-offset-base-100 ring-offset-1"
                        >
                            {/* **********PROFILE AVATAR */}
                            {
                                (profile == '' || !profile) ?
                                    <img
                                        src={gender == 'Female' ? femaleAvatar.src : maleAvatar?.src}
                                        alt=''
                                        className='w-full bg-base-100'
                                    />
                                    :
                                    <img
                                        src={profile}
                                        alt=''
                                    />
                            }
                        </div>
                        <div>
                            <h1 onClick={() => navigate(`/profile/${userID}`)} className='cursor-pointer' >
                                {
                                    name || 'User'
                                }
                            </h1>
                            <h1
                                className='flex items-center gap-1 text-[9px]'> <Email />{email}
                            </h1>
                        </div>
                    </div>
                    <div className='flex gap-1 relative'>
                        <button className={(showInfo ? ' text-white ' : 'btn-outline') + ' btn btn-info  btn-xs'} onClick={() => showInfoHandle(userID)}>
                            <Info />
                        </button>
                        <button className='btn btn-success btn-outline btn-xs' onClick={() => navigate('/inbox/support/' + userID)}>
                            <MessageDotDotDot/>
                        </button>
                        <button className='btn btn-warning btn-outline btn-xs'>
                            <Delete />
                        </button>
                    </div>
                </div>

                <div>
                    <div className={style.userDetails + ' overflow-hidden'} id={'aboutDetailsAdmin' + userID} >
                        <About props={{ isLoadingAbout, user }} />
                    </div>
                </div>

            </div>
        </div >
    )
}
export default ViewUser