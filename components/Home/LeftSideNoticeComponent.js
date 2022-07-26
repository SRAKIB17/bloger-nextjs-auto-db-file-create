/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Refresh } from '../ReactRSIcon';
import styles from './mobileAndroid.module.css'

const LeftSideNoticeComponent = () => {
    const [url, setUrl] = useState('')
    const onSearchHandle = () => {
        console.log(345354)
    }
    return (
        <div>
            <div className={styles.mobile + ' overflow-hidden'} >
                <div className={styles.speaker}>
                    <div>
                        ○ ○ ○
                    </div>
                </div>
                <div className='p-1 overflow-auto h-full pt-10'>
                    <form onSubmit={onSearchHandle}>
                        <input type="text" name="" id="" defaultValue='flsdflsfjsdflj3454fdslfjdfjdfldsjfrtoj' />
                    </form>
                    <iframe src={url} frameBorder="0"></iframe>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus et inventore quod. Quae vel quidem, vitae temporibus porro sit rem non. Inventore molestias, vel earum nostrum nemo aliquam sequi harum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odio ex numquam modi adipisci, officiis debitis, vel nisi exercitationem, harum atque. Esse maiores dignissimos praesentium, odit incidunt tempore corporis nulla!
                    Culpa id facere corrupti sunt labore voluptatum cupiditate quidem, distinctio repudiandae ullam consequuntur, eos, explicabo rerum recusandae aperiam impedit? Rerum nihil voluptatum minima nisi atque quam, necessitatibus corporis quidem voluptatem!
                    Placeat, sequi. Aspernatur maxime fugit quos, voluptas optio et nihil nobis perspiciatis, animi ex obcaecati officiis corporis autem quidem distinctio rerum corrupti inventore repellat possimus delectus facilis quis? Veritatis, molestias?
                    Consequuntur alias voluptatibus quam omnis a ipsam harum quae distinctio, praesentium voluptatum, quos maiores consectetur eveniet cupiditate veniam eum mollitia suscipit illum dolor consequatur natus? Nemo magnam consectetur esse iste.
                    Eveniet voluptatibus omnis voluptatum. Magni officia numquam alias! Ut dolorum itaque at mollitia quam quos facilis fugit culpa nihil quibusdam, perspiciatis temporibus nulla. Odio dolor, doloremque distinctio quibusdam ad debitis?
                    Vitae voluptates magni labore illo natus maiores ea facilis iure ad animi hic ipsum minus deserunt architecto qui consequuntur delectus voluptatum, dolor fuga quaerat eum in aspernatur harum blanditiis! Hic.
                    Fugiat, ipsa a! Temporibus hic iusto quasi praesentium eius nobis architecto voluptas natus maxime magni soluta sit aliquam accusantium perspiciatis, ipsum reiciendis id neque voluptatem laudantium enim autem ab voluptates!
                    Quidem consequatur earum incidunt corrupti nostrum voluptatem eum quam ullam necessitatibus harum. Debitis nobis aut praesentium. Optio, molestiae, quia modi quis eius dolore quisquam aperiam perferendis, amet perspiciatis esse quo.
                    Vero dolorem assumenda explicabo debitis consequatur, quod temporibus necessitatibus quasi, nobis libero officiis numquam blanditiis saepe corrupti ducimus voluptatum impedit aliquam ratione id quia maxime eligendi harum enim. Incidunt, nam?
                    Laborum tempora aut id pariatur, quae fuga, veniam deserunt tempore, quos nesciunt facere. Similique voluptatem velit nisi tempora odio natus eos repudiandae ad mollitia quod. Qui voluptatem laudantium suscipit non?
                </div>
                <div className={styles.refresh}>
                    <div>
                        <button >
                            <Refresh color='white' />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LeftSideNoticeComponent;