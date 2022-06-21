import React, { useEffect, useState } from 'react';
import Comment_textarea from '../Comment/Comment_textarea';

const PostMap = () => {
    const [postBody, setPostBody] = useState('')
    useEffect(() => {
        setPostBody(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus maiores magnam expedita beatae iste consectetur, reiciendis consequatur voluptate libero inventore obcaecati voluptas cepturi ratione, in voluptatum sequi architecto, error ab nesciunt voluptate corrupti et delectus. Similique obcaecati exe`)
    }, [])
    const handleSeeMorePost = () => {
        setPostBody(`
        nt laborum labore obcaecati earum dolore necessitatibus suscipit quis eveniet facere ab veritatis? Fugit eaque minima aut natus tenetur nihil? Sit beatae ipsa aliquid nobis.
        Fugit repudiandae necessitatibus sequi neque cum incidunt ut aperiam quibusdam reiciendis doloremque consequatur ipsam inventore, explicabo eius, eum ducimus rerum quisquam molestias qui debitis odio minima. Id atque dolorem aut!
        Quaerat dolore numquam reiciendis consectetur officiis harum dolores quis, alias illum quo, unde sint incidunt sit suscipit amet culpa laudantium, atque fuga esse similique. Maxime iure dolore ducimus perspiciatis dignissimos!
        Enim id maiores explicabo amet asperiores officiis exercitationem aut quos, omnis sit recusandae ullam iusto. Consequuntur culpa, ab, facere, corporis molestias consectetur dignissimos alias eos omnis nesciunt ipsum maiores magni?
        Nihil quaerat velit dolorum reiciendis! Optio consequatur quia atque velit. Neque, ullam, necessitatibus alias minima ut dolorem veniam, recusandae repellat omnis quam a impedit magni. Sequi voluptate repudiandae quia esse?
        Ducimus perferendis adipisci rerum. Mollitia esse iusto praesentium quisquam repudiandae pariatur! Cum quisquam ratione minima blanditiis laudantium maxime dicta aliquam voluptatum labore. Aliquam fugit libero pariatur, tempora unde architecto veritatis.
        Unde error, iure possimus eveniet autem quas vel nesciunt dignissimos animi reprehenderit provident cum amet officia libero doloribus quidem recusandae blanditiis doloremque mollitia magni fugit. Quae vitae a adipisci ut.
        Sunt odit nihil, iusto quis minus recusandae maxime asperiores aliquid accusantium quo eum repellendus assumenda laborum dolores, ipsa illum unde! Laborum provident voluptatibus deserunt, sequi temporibus labore nesciunt adipisci accusamus.
        Nesciunt quisquam, molestiae nam quia mollitia incidunt sint dolores tenetur iste aperiam error quae quod eveniet ducimus doloribus earum id veritatis voluptate velit iure impedit est repellendus! Vero, consectetur id?
        Dolores doloremque explicabo architecto laboriosam excepturi illo dignissimos delectus suscipit inventore corporis animi, expedita unde odio. Corrupti omnis porro neque hic sequi ullam, eius accusantium molestiae earum, et sunt praesentium.
        Laboriosam consequatur doloremque cupiditate maiores nam a eaque eum nulla doloribus molestias deleniti ratione aliquid repellendus debitis quaerat rem, accusantium dolorum natus, similique reprehenderit, temporibus tempore! Libero voluptate architecto quisquam.
        Nostrum, ullam explicabo. Reprehenderit voluptatum a incidunt provident harum quae, saepe vel illum dicta similique deserunt, eum atque dolores optio eaque ipsam quisquam nemo quis debitis, cupiditate explicabo. Quos, voluptatem!
        Eos delectus quisquam provident quibusdam maiores. Deleniti a hic doloribus dolorem ea ad incidunt architecto atque. Provident repudiandae reprehenderit id eveniet tempore? Facilis praesentium ipsum delectus voluptatem placeat voluptates porro.
        Quis excepturi qui nam obcaecati doloribus saepe, necessitatibus optio veritatis consequuntur nostrum explicabo eveniet magnam placeat perspiciatis quos et consectetur, minus sit! Alias repudiandae ipsam amet totam vitae perferendis cum.
        `)
    }
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl mt-2">
                <div className='flex gap-2 justify-start items-center border-b-[1px] m-2'>
                    <div className='avatar p-2 mb-1'>
                        <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title">Shoes!</h2>
                        <h1 className='text-xs'>dec 15, 2021 | tech</h1>
                    </div>
                </div>

                <div className='card-body pb-2 pt-3'>
                    <h2 className="card-title">Title!</h2>

                    <p className='text-justify'>
                        {
                            postBody
                        }
                    </p>

                    <div className="card-actions justify-end">
                        <button className="link-primary" onClick={handleSeeMorePost}>See More</button>
                    </div>

                    <figure>
                        <img src="https://api.lorem.space/image/shoes?w=400&h=225" className='w-full' alt="Shoes" />
                    </figure>

                    <div>
                        {/* like unlike  */}
                        <div className='border-b-[1px] p-2 border-t-[1px]'>
                            <button className='btn btn-xs btn-secondary ml-2 btn-outline'>b-1</button>
                            <button className='btn btn-xs btn-secondary ml-2 btn-outline'>b-2</button>
                            <button className='btn btn-xs btn-secondary ml-2 btn-outline'>b-3</button>
                        </div>
                    </div>

                    <div>
                        <Comment_textarea />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostMap;