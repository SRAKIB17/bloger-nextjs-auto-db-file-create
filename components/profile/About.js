import React from 'react';

import { FacebookSquare, Github, Youtube, LinkedinNew, Instagram, Twitter, TwitterSquare, Quote, Gender, School, Location, Worker } from '../ReactRSIcon/index';


const About = () => {



    return (
        <div className='p-1'>
            <table className='table-auto'>
                <tr>
                    <td className='flex items-center gap-1'> <Worker />Worked at Student </td>
                </tr>
                <tr>
                    <td className='flex items-center gap-1'> <Location /> From Nageswari ,Rajshahi</td>
                </tr>
                <tr>
                    <td className='flex items-center gap-1'><School /> Studies at MEC </td>
                </tr>
                {/* <tr>
                    <td><img src={relationship} alt="" /> Single</td>
                </tr> */}
                {/* <tr>
                    <td><img src={birthday} alt="" /> Birthday</td>
                </tr> */}
                <tr>
                    <td className='flex items-center gap-1'><Github />github</td>
                </tr>

                <tr>
                    <td className='flex items-center gap-1'><Youtube /> youtube</td>
                </tr>
                <tr>
                    <td className='flex items-center gap-1'><FacebookSquare className='rounded-sm' /> facebook</td>
                </tr>
                <tr>
                    <td className='flex items-center gap-1'><LinkedinNew /> link</td>
                </tr>
                <tr>
                    <td className='flex items-center gap-1'> <Instagram /> linkdin</td>
                </tr>
                <tr>
                    <td className='flex items-center gap-1'><Twitter /> tewtter</td>
                </tr>
                <tr>
                    <td className='flex items-center gap-1'><Gender /> Gender</td>
                </tr>
                {/* <tr>
                    <td> <img src={religion} alt="" /> riligion</td>
                </tr> */}
                <tr>
                    <td className='flex items-center gap-1'><Quote /> Favorite Quote:</td>

                </tr>
            </table>
            {/* <button >See More</button> */}
        </div>
    );
};

export default About;