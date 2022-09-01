import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import SinglePost from '../../../components/BLOG/post/single-post/SinglePost';
import PageTitle from '../../../components/hooks/PageTitle';
import LoadingSpin from '../../../components/LoadingSpin';


const Index = () => {
    const router = useRouter();
    const { id } = router.query;
    // find-specific-story
    const { data, refetch, isLoading } = useQuery(['find-specific-story', id], () => axios.get(`/api/post/find-specific-story?post_id=${id}`,
        {
            headers: { access_token: sessionStorage.getItem('accessAutoG') }
        }
    ))
    const post = data?.data || {}
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { title } = PageTitle()

    return (

        <div className='grid grid-cols-12'>
            <div className='col-span-12  lg:col-span-7  2xl:col-span-9 mb-20'>
                <div>
                    {
                        isLoading ?
                            <div className='mt-20'>
                                <LoadingSpin />
                            </div>
                            :
                            <SinglePost post={post} refetch={refetch} />
                    }
                </div>
            </div>
            <div className='hidden ml-2 pl-4 shadow-md lg:block col-span-12 lg:col-span-5  2xl:col-span-3 text-justify mb-20 rounded-md'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga beatae earum, repudiandae, porro cupiditate dolor soluta odio magni, ipsum saepe possimus minima consectetur pariatur. Dignissimos quod asperiores sint hic ipsa.
                Quasi laudantium officia voluptate distinctio dicta, maiores dolore reprehenderit, velit voluptatibus est veritatis ipsum fuga amet quibusdam eaque necessitatibus possimus animi autem eius! Laborum non reiciendis ullam possimus asperiores. Perspiciatis!
                Delectus, quo. Corrupti in nobis, non ut distinctio minima, rem repellat laboriosam quae aut hic reiciendis ducimus sed tempora voluptatum praesentium cumque facilis error nihil exercitationem dolor blanditiis placeat. Minus!
                Rerum voluptatum dolor suscipit praesentium sapiente voluptatem nam officia impedit, assumenda iste, repudiandae magni voluptate modi dolores aliquam quae quia fugiat pariatur distinctio maxime doloremque illum reiciendis sunt corrupti! Incidunt!
                Eligendi, nam impedit. Deleniti unde, animi veritatis ipsam aut odio rerum, mollitia dolore, placeat ea eveniet doloremque sint magni minima temporibus neque ad deserunt ex sequi cum dolores esse minus.
                Voluptates, omnis iure repellat dolorem optio praesentium dolore amet facilis ipsum nesciunt magnam voluptatum maiores pariatur quia vel doloremque, voluptas placeat quas necessitatibus. Voluptatum soluta, voluptatibus iste labore ratione nesciunt!
                Cum corporis aliquam perferendis praesentium natus, provident ipsum, quisquam, expedita quos saepe temporibus illum repudiandae quasi et officia quod error aut dolore vitae placeat libero dolor ab neque. Ipsam, iusto?
                Hic qui doloremque numquam ab, sit eos aliquam quasi distinctio iusto quaerat repellendus, libero similique assumenda nostrum impedit minima quis in, explicabo dolore id neque modi praesentium odio. Ipsa, dolore?
                Eos magni consectetur quidem vitae velit minima blanditiis voluptatem! Illo alias temporibus molestiae earum, eveniet voluptatum voluptatibus iure non. Eius sunt fugiat tempora sit accusamus, a voluptatem impedit. Labore, vel?
                Tenetur harum illo optio laboriosam dolorum, laudantium vitae, facere iure consequuntur iste cupiditate molestias odio vero sed. A maxime blanditiis iusto commodi expedita assumenda molestias, eum, perferendis mollitia, maiores explicabo!
            </div>
        </div>
    );
};

export default Index;