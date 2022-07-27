/* eslint-disable @next/next/no-img-element */
import React from 'react';

import FooterBg from '../../public/footer.png'

const Footer = () => {
    return (
        <div className="w-full relative">
            <div className='relative top-0'>
                <img src={FooterBg?.src} alt=""  className='w-full absolute top-0 h-60'/>
            </div>
            <div className='text-justify'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet ducimus maiores iusto nulla error rem placeat animi nam magnam odit? Eum odio magni, officia asperiores eligendi fugiat deserunt. Odio, perspiciatis!
                Iste minima iusto quibusdam dolor distinctio placeat corporis repellendus incidunt aut velit error nisi, molestiae sint, quidem tenetur. Officia eaque ut id quis et. Provident consequuntur eius molestiae quis explicabo?
                Laborum, ipsam ve lorem*10niam? Illum beatae magni debitis odio modi eligendi, error ad quis voluptas cum ut quidem aliquid iure mollitia repellat deleniti distinctio, ipsam a saepe? Inventore a ex neque.
                Optio repudiandae laborum aperiam quia assumenda cum cupiditate dolore consectetur quos quaerat vitae, animi illo? Maiores nesciunt distinctio, beatae, ducimus quod assumenda cupiditate maxime neque iste unde omnis recusandae. Officia?
            </div>
        </div>
    );
};

export default Footer;