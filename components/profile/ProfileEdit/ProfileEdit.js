import React from 'react';
import styles from '../NewPost/NewPost.module.css'
import { FacebookSquare, Github, Youtube, LinkedinNew, Instagram, Twitter, TwitterSquare, Quote, Gender, School, Location, Worker } from '../../ReactRSIcon/index';

const ProfileEdit = () => {
    function closeNewPost() {
        document.getElementById("profileEdit").style.width = "0";
    }

    const updateHandle = async (event) => {
        event.preventDefault();
        // const body = event.target.postBody.value;
        const updateForm = {
            work: event.target.work.value,
            location: event.target.address.value,
            school: event.target.study.value,
            github: event.target.github.value,
            youtube: event.target.youtube.value,
            facebook: event.target.facebook.value,
            linkedin: event.target.linkedin.value,
            linkedin: event.target.linkedin.value,
            instagram: event.target.instagram.value,
            twitter: event.target.twitter.value,
            gender: event.target.gender.value,
            quote: event.target.quote.value,

        }
        console.log(updateForm)
        // const { data } = await axios.post('/api/test', post);
        // console.log(data)
    }
    return (
        <div>
            <div id="profileEdit" className={styles.NewPostNav + ' bg-base-100'}>
                <a href="#" className={styles.closebtn} onClick={closeNewPost}>&times;</a>
                <div className='shadow-2xl max-w-md mx-auto p-4 h-full bg-base-300 rounded-3xl'>
                    <form action="" onSubmit={updateHandle} className='flex flex-col gap-2 m-10'>


                        <div className='p-1 mx-auto'>
                            <table className='table-auto '>
                                <tbody className='flex flex-col gap-2'>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Worker />
                                            <input
                                                type="text"
                                                name="work"
                                                id="work"
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Work'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Location />
                                            <input
                                                type="text"
                                                name="address"
                                                id="addressProfile"
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Address'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <School />
                                            <input
                                                type="text"
                                                name="study"
                                                id="study"
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Study'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Github />
                                            <input
                                                type="text"
                                                name="github"
                                                id="github"
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Github'
                                            />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Youtube />
                                            <input
                                                type="text"
                                                name="youtube"
                                                id="Youtube"
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Youtube'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <FacebookSquare className='rounded-sm' />
                                            <input
                                                type="text"
                                                name="facebook"
                                                id="Facebook"
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Facebook'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <LinkedinNew />
                                            <input
                                                type="text"
                                                name="linkedin"
                                                id="linkedin"
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Linkedin'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Instagram />
                                            <input
                                                type="text"
                                                name="instagram"
                                                id="Instagram"
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Instagram'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Twitter />
                                            <input
                                                type="text"
                                                name="twitter"
                                                id="Twitter"
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Twitter'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Gender />
                                            <select id='Gender' name='gender' className="select select-primary select-sm select-bordered select-md form-control max-w-xs">
                                                <option disabled selected>Gender</option>
                                                <option value='Male'>Male</option>
                                                <option value='Female'>Female</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <Quote />
                                            <input
                                                type="text"
                                                name="quote"
                                                id="Quote"
                                                className='input input-sm input-primary form-control w-56 sm:w-80'
                                                placeholder='Quote'
                                            />
                                        </td>

                                    </tr>
                                    <tr>
                                        <td className='flex items-center gap-1'>
                                            <input
                                                type="submit"
                                                value="Update"
                                                className='btn btn-sm rounded-3xl btn-primary font-light w-fit  '
                                            />
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