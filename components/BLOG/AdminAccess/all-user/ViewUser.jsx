import { Delete, Email, Info, MessageDotDotDot } from "../../../ReactRSIcon";
import { useRouter } from "next/router";
import style from './allUser.module.css'
import { useContext, useState } from "react";
import axios from "axios";
import About from "./About";
import { UserFullInfoProvider } from "../../../../pages/_app";
import WarningUserProfile from "../../hooks/WarningUserProfile";
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
    const { user_details: user_info, isLoading, isAdmin } = useContext(UserFullInfoProvider);

    const [deleteUserLoading, setUserDeleteLoading] = useState(null);
    const [deleteModal, setDeleteModal] = useState(null)
    const deleteUserHandle = async (id) => {
        setUserDeleteLoading(true)
        const { data } = await axios.delete(`/api/admin/all-user/?userID=${id}&email=${user_info?.email}`,
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
    const [warningLoading, setWarningUser] = useState(false);
    const [showWarningReason, setWarningMessage] = useState(null);
    const shwWarningReasonInputHandle = (e, id) => {
        const check = e.target.value;

        if (check === 'false') {
            updateUserWarning(e, id)
        }
        else if (check === 'true') {
            setWarningMessage(id)
        }

    }
    const updateUserWarning = async (e, id) => {
        e.preventDefault()
        let warnBody = {}
        if (showWarningReason) {
            warnBody = {
                reason: e.target.reason.value,
                warning: "true",
            }
        }
        else {
            warnBody = {
                reason: '',
                warning: "false"
            }
        }

        setWarningUser(true)
        const { data } = await axios.put(`/api/admin/all-user/?userID=${id}&email=${user_info?.email}`, warnBody,
            {
                headers: {
                    access_token: sessionStorage.getItem('accessAutoG'),
                    token: localStorage.getItem('token')
                }
            }
        )
        if (data?.message === 'success') {
            alert('success')
            setWarningMessage(null)
            setWarningUser(false)
            refetch()
            if (data?.result?.acknowledged) {
                refetch()
                setWarningMessage(null)
            }
        }
        else if (data?.message === 'error') {
            alert(data?.error)
            setWarningMessage(null)
        }
        setWarningMessage(null)
        setWarningUser(false)
    }
    const user_details = user
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
                                        src={gender == 'Female' ? '/femaleAvatar.png' : 'maleAvatar.png'}
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
                                <WarningUserProfile user_details={user} size="11" />
                            </h1>
                            <h1
                                className='flex items-center gap-1 text-[9px]'> <Email />{email}
                            </h1>
                        </div>
                    </div>

                    <div className='flex gap-1 relative'>
                        {/* ALERT USER */}
                        {
                            showWarningReason &&
                            <div className="absolute right-0 bg-base-100 h-full z-40">
                                <button
                                    className="absolute -top-[12px] btn btn-xs btn-ghost -left-[24px]"
                                    onClick={() => setWarningMessage(null)}
                                >
                                    X
                                </button>
                                <form className="flex" onSubmit={(e) => updateUserWarning(e, userID)}>

                                    <textarea type="text" name="reason" id="" className="textarea input-primary rounded-sm" >
                                    </textarea>
                                    <button className="btn btn-xs p-1 btn-secondary rounded-sm">
                                        send
                                    </button>
                                </form>
                            </div>
                        }
                        <div>


                            {
                                warningLoading ?
                                    <div className="relative">
                                        <select
                                            name=""
                                            id=""
                                            className=" select-xs select-primary select text-xs"
                                            defaultValue={user?.warning}
                                        >
                                            <option value="false" disabled> Status</option>
                                            <option value="false">Unalert</option>
                                            <option value="true">Warning</option>

                                        </select>
                                        <p className='absolute animate-spin border-b-2 border-red-500 border-r-2 w-4 h-4 rounded-[50%] top-[6px] left-[50%] '>
                                        </p>
                                    </div>
                                    :
                                    <select
                                        onChange={(e) => shwWarningReasonInputHandle(e, userID)}
                                        name=""
                                        defaultValue={user?.warning}
                                        className="select-xs select-primary select text-xs"
                                    >
                                        <option disabled> Status</option>
                                        <option value={false} disabled={user?.warning == 'false' ? true : false}>Unalert</option>
                                        <option value={true} disabled={user?.warning == 'true' ? true : false}>Warning</option>
                                    </select>
                            }
                        </div>

                        {/* INFORMATION */}
                        <button className={(showInfo ? ' text-white ' : 'btn-outline') + ' btn btn-info  btn-xs'} onClick={() => showInfoHandle(userID)}>
                            <Info />
                        </button>

                        {/* Messaging */}
                        <button className='btn btn-success btn-outline btn-xs' onClick={() => navigate('/inbox/' + userID)}>
                            <MessageDotDotDot />
                        </button>

                        <span className="relative">
                            <button className="btn btn-primary btn-xs btn-outline" onClick={() => setDeleteModal(true)}>
                                <Delete />
                            </button>
                            {/* Delete User */}
                            <span className="absolute right-0 bg-base-100 z-40 pl-4 pr-4">
                                {
                                    (
                                        deleteModal &&
                                        (deleteUserLoading ?

                                            <span className="flex gap-1 left-0 top-0">
                                                <button className="btn btn-xs btn-success text-white" onClick={() => setDeleteModal(null)}>
                                                    Cancel
                                                </button>
                                                <button className='btn btn-warning btn-outline btn-xs'>
                                                    Confirm
                                                    <p className='absolute animate-spin border-b-2 border-r-2 w-4 h-4 rounded-[50%]'>
                                                    </p>
                                                </button>
                                            </span>
                                            :
                                            <span className="flex gap-1">
                                                <button className="btn btn-xs btn-success text-white" onClick={() => setDeleteModal(null)}>
                                                    Cancel
                                                </button>
                                                <button className='btn bg-red-600 hover:bg-red-500 text-white btn-outline btn-xs' onClick={() => deleteUserHandle(userID)}>
                                                    Confirm
                                                </button>
                                            </span>
                                        )
                                    )
                                }
                            </span>


                        </span>
                    </div>
                </div>

                <div>
                    <div className={style.userDetails + ' overflow-hidden'} id={'aboutDetailsAdmin' + userID} >
                        <About props={{ isLoadingAbout, user_details }} />
                    </div>
                </div>

            </div>
        </div >
    )
}
export default ViewUser