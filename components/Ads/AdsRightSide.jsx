import React from 'react';
import AdsPostSideMd from './AdsPostSideMd';

const AdsRightSide = () => {
    const ads = [

        {
            title: 'Install Apps and Quick Access',
            thumbnail: '/ads/ads2.png',
            url: '/profile',
            html: '',
            details: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, inventore repellendus. Eius corporis, similique aspernatur saepe, magni illo ipsa rerum provident ducimus suscipit, ut quo nisi consequuntur! Asperiores, repellendus voluptasm ipsum dolor sit amet consectetur adipisicing elit. Dolorem, inventore repellendus. Eius corporis, similique aspernatur saepe, magni illo ipsa rerum provident ducimus susci'
        },
        {
            title: 'Install Apps and Quick Access',
            thumbnail: '/ads/ads2.png',
            url: '/profile',
            html: '',
            details: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, inventore repellendus. Eius corporis, similique aspernatur saepe, magni illo ipsa rerum provident ducimus suscipit, ut quo nisi consequuntur! Asperiores, repellendus voluptasm ipsum dolor sit amet consectetur adipisicing elit. Dolorem, inventore repellendus. Eius corporis, similique aspernatur saepe, magni illo ipsa rerum provident ducimus susci'
        }
        ,
        {
            title: 'Install Apps and Quick Access',
            thumbnail: '/ads/ads2.png',
            url: '/profile',
            html: '',
            details: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, inventore repellendus. Eius corporis, similique aspernatur saepe, magni illo ipsa rerum provident ducimus suscipit, ut quo nisi consequuntur! Asperiores, repellendus voluptasm ipsum dolor sit amet consectetur adipisicing elit. Dolorem, inventore repellendus. Eius corporis, similique aspernatur saepe, magni illo ipsa rerum provident ducimus susci'
        }
        ,
        {
            title: 'Install Apps and Quick Access',
            thumbnail: '/ads/ads2.png',
            url: '/profile',
            html: '',
            details: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, inventore repellendus. Eius corporis, similique aspernatur saepe, magni illo ipsa rerum provident ducimus suscipit, ut quo nisi consequuntur! Asperiores, repellendus voluptasm ipsum dolor sit amet consectetur adipisicing elit. Dolorem, inventore repellendus. Eius corporis, similique aspernatur saepe, magni illo ipsa rerum provident ducimus susci'
        },
        {
            title: 'Install Apps and Quick Access',
            thumbnail: '/ads/ads2.png',
            url: '/profile',
            html: '',
            details: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, inventore repellendus. Eius corporis, similique aspernatur saepe, magni illo ipsa rerum provident ducimus suscipit, ut quo nisi consequuntur! Asperiores, repellendus voluptasm ipsum dolor sit amet consectetur adipisicing elit. Dolorem, inventore repellendus. Eius corporis, similique aspernatur saepe, magni illo ipsa rerum provident ducimus susci'
        },
        {
            title: 'Install Apps and Quick Access',
            thumbnail: '/ads/ads1.png',
            url: '/profile',
            html: '',
            details: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, inventore repellendus. Eius corporis, similique aspernatur saepe, magni illo ipsa rerum provident ducimus suscipit, ut quo nisi consequuntur! Asperiores, repellendus voluptasm ipsum dolor sit amet consectetur adipisicing elit. Dolorem, inventore repellendus. Eius corporis, similique aspernatur saepe, magni illo ipsa rerum provident ducimus susci'
        },
        {
            title: 'Install Apps and Quick Access',
            thumbnail: '/ads/ads1.png',
            url: '/profile',
            html: '',
            details: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, inventore repellendus. Eius corporis, similique aspernatur saepe, magni illo ipsa rerum provident ducimus suscipit, ut quo nisi consequuntur! Asperiores, repellendus voluptasm ipsum dolor sit amet consectetur adipisicing elit. Dolorem, inventore repellendus. Eius corporis, similique aspernatur saepe, magni illo ipsa rerum provident ducimus susci'
        }


    ]
    return (
        <div className='mt-4 flex flex-col gap-4'>
            {
                ads?.map((ads, index) => <AdsPostSideMd key={index} ads={ads} />)
            }
        </div>
    );
};

export default AdsRightSide;