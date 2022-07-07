import React from 'react';
import styles from '../NewPost/NewPost.module.css'
import { FacebookSquare, Github, Youtube, LinkedinNew, Instagram, Twitter, TwitterSquare, Quote, Gender, School, Location, Worker } from '../../ReactRSIcon/index';

const ProfileEdit = () => {
    function closeNewPost() {
        document.getElementById("profileEdit").style.width = "0";
    }

    const postHandle = async (event) => {
        event.preventDefault();
        const body = event.target.postBody.value;
        const post = {
            body: body
        }
        // console.log()
        const { data } = await axios.post('/api/test', post);
        console.log(data)
    }
    return (
        <div>
            <div id="profileEdit" className={styles.NewPostNav + ' bg-base-100'}>
                <a href="#" className={styles.closebtn} onClick={closeNewPost}>&times;</a>
                <div>
                    <form action="" onSubmit={postHandle} className='flex flex-col gap-2 m-10'>


                        <div className='p-1'>
                            <table className='table-auto'>
                                <tbody className='flex flex-col gap-2'>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Worker />
                                            <input
                                                type="text"
                                                name="title"
                                                id=""
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Title'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Location />
                                            <input
                                                type="text"
                                                name="title"
                                                id=""
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Title'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <School />
                                            <input
                                                type="text"
                                                name="title"
                                                id=""
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Title'
                                            />
                                        </td>
                                    </tr>
                                    {/* <tr>
                    <td><img src={relationship} alt="" /> Single</td>
                </tr> */}
                                    {/* <tr>
                    <td><img src={birthday} alt="" /> Birthday</td>
                </tr> */}
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Github />
                                            <input
                                                type="text"
                                                name="title"
                                                id=""
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Title'
                                            />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Youtube />
                                            <input
                                                type="text"
                                                name="title"
                                                id=""
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Title'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <FacebookSquare className='rounded-sm' />
                                            <input
                                                type="text"
                                                name="title"
                                                id=""
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Title'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <LinkedinNew />
                                            <input
                                                type="text"
                                                name="title"
                                                id=""
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Title'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Instagram />
                                            <input
                                                type="text"
                                                name="title"
                                                id=""
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Title'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Twitter />
                                            <input
                                                type="text"
                                                name="title"
                                                id=""
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Title'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Gender />
                                            <select className="select select-primary select-sm select-bordered select-md w-full max-w-xs">
                                                <option disabled selected>Gender</option>
                                                <option value='Male'>Male</option>
                                                <option value='Female'>Female</option>
                                            </select>
                                        </td>
                                    </tr>
                                    {/* <tr>
                    <td> <img src={religion} alt="" /> riligion</td>
                </tr> */}
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Quote />
                                            <input
                                                type="text"
                                                name="title"
                                                id=""
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Title'
                                            />
                                        </td>

                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <input type="submit" value="Post" className='btn btn-sm rounded-3xl btn-primary text-white w-fit' />
                                        </td>

                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ProfileEdit;