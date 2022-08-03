import About from "../../PublicProfile/About";
import { Delete, Email, Info, MessageDotDotDot, warningCircle, WarningTriangle } from "../../ReactRSIcon";
import maleAvatar from '../../../public/maleAvatar.png'
import femaleAvatar from '../../../public/femaleAvatar.png'
import { useRouter } from "next/router";
import style from './allUser.module.css'
import { useContext, useId, useState } from "react";
import axios from "axios";
import { UserFullInfoProvider } from "../../../pages/_app";
/* eslint-disable @next/next/no-img-element */
const ViewUser = ({ user, isLoadingAbout, refetch }) => {
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
    const { user_details, isLoading, isAdmin } = useContext(UserFullInfoProvider);

    const [deleteUserLoading, setUserDeleteLoading] = useState(null);
    const deleteUserHandle = async (id) => {
        setUserDeleteLoading(true)
        const { data } = await axios.delete(`/api/admin/all-user/?userID=${id}&email=${user_details?.email}`,
            {
                headers: {
                    access_token: sessionStorage.getItem('accessAutoG'),
                    token: localStorage.getItem('token')
                }
            }
        )
        if (data?.message === 'success') {
            alert('success')
            setUserDeleteLoading(false)
            refetch()
            if (data?.result?.acknowledged) {
                refetch()
            }
        }
        else if (data?.message === 'error') {
            alert(data?.error)
        }
        setUserDeleteLoading(false)

    }

    //FOR WARNING USER UPDATE
    const [warningLoading, setWarningUser] = useState(false)
    const updateUserWarning = async (e, id) => {
        const warnBody = {
            warning: e.target.value
        }
        setWarningUser(true)
        const { data } = await axios.put(`/api/admin/all-user/?userID=${id}&email=${user_details?.email}`, warnBody,
            {
                headers: {
                    access_token: sessionStorage.getItem('accessAutoG'),
                    token: localStorage.getItem('token')
                }
            }
        )
        if (data?.message === 'success') {
            alert('success')
            setWarningUser(false)
            refetch()
            if (data?.result?.acknowledged) {
                refetch()
            }
        }
        else if (data?.message === 'error') {
            alert(data?.error)
        }
        setWarningUser(false)
    }
    return (
        <div>
            <div className='p-2 border-t border-b border-gray-500'>
                <div className='flex  gap-2 items-center justify-between'>
                    {/* *****FOR PROFILE PICTURE************* */}
                    <div className='flex gap-2 items-center '>
                        <div
                            onClick={() => navigate(`/profile/${userID}`)}
                            className="w-[16px] cursor-pointer h-[16px] overflow-hidden rounded-full ring ring-inherit ring-offset-base-100 ring-offset-1"
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
                            <h1 onClick={() => navigate(`/profile/${userID}`)} className='flex items-center cursor-pointer text-sm' >
                                {
                                    name || 'User'
                                }
                                {
                                    user?.warning &&
                                    <div className="ml-[1px]">
                                        <WarningTriangle size="10" color="red" />
                                    </div>
                                }
                            </h1>
                            <h1
                                className='flex items-center gap-1 text-[9px]'> <Email />{email}
                            </h1>
                        </div>
                    </div>
                    <div className='flex gap-1 relative'>
                        {/* ALERT USER */}
                        <div>
                            {
                                warningLoading ?
                                    <div className="relative">
                                        <select
                                            name=""
                                            id=""
                                            className=" select-xs select-primary select text-xs"
                                        >
                                            <option value="false"> Status</option>
                                            <option value="false">Unalert</option>
                                            <option value="true">Warning</option>

                                        </select>
                                        <p className='absolute animate-spin border-b-2 border-red-500 border-r-2 w-4 h-4 rounded-[50%] top-[6px] left-[50%] '>
                                        </p>
                                    </div>
                                    :
                                    <select
                                        onChange={(e) => updateUserWarning(e, userID)}
                                        name=""
                                        id=""
                                        className="select-xs select-primary select text-xs"
                                    >
                                        <option value="false"> Status</option>
                                        <option value="false">Unalert</option>
                                        <option value="true">Warning</option>
                                    </select>
                            }

                        </div>
                        {/* INFORMATION */}
                        <button className={(showInfo ? ' text-white ' : 'btn-outline') + ' btn btn-info  btn-xs'} onClick={() => showInfoHandle(userID)}>
                            <Info />
                        </button>
                        {/* Messaging */}
                        <button className='btn btn-success btn-outline btn-xs' onClick={() => navigate('/inbox/support/' + userID)}>
                            <MessageDotDotDot />
                        </button>
                        {/* Delete User */}
                        {
                            deleteUserLoading ?
                                <button className='btn btn-warning btn-outline btn-xs'>
                                    <Delete />
                                    <p className='absolute animate-spin border-b-2 border-r-2 w-4 h-4 rounded-[50%]'>
                                    </p>
                                </button>
                                :
                                <button className='btn btn-warning btn-outline btn-xs' onClick={() => deleteUserHandle(userID)}>
                                    <Delete />
                                </button>
                        }


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