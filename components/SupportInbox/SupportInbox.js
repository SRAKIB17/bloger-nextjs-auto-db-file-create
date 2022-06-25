import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import classTagShortcutInput from '../hooks/hooks/useFindClassAttr';
import styles from '../profile/NewPost/NewPost.module.css'


const SupportInbox = () => {

    const [quickVideoPost, setQuickVideoPost] = useState(false);
    const [quickTextPost, setQuickTextPost] = useState(true);
    const [quickImagePost, setQuickImagePost] = useState(false);

    function closeSupportInbox() {
        document.getElementById("SupportInbox").style.width = "0";
    }

    const postHandle = async (event) => {
        event.preventDefault();
        const body = event.target.postBody.value;




        // const post = {
        //     userID: '54fsdlj53',
        //     post_id: '534fsdfjo345',
        //     post_title: event.target.title.value,
        //     thumbnail: 'https://api.lorem.space/image/shoes?w=400&h=225',
        //     image: '',
        //     time: 'dec 15, 2021',
        //     short_description: event.target.short_description.value,
        //     category: event.target.category.value,
        //     postBody: body,
        //     sort: '5345345345',
        //     tags: event.target.tags.value.split(','),
        //     postRefMode: postRefMode
        // }
        // console.log(post)
        // const { data } = await axios.post('/api/test', post);
        // // console.log(data)
    }

    const textareaRef = useRef();



    const shortcutKeyboard = (e) => {
        // classTagShortcutInput(e, textareaRef)
    }
    const onchangeInput = (e) => {
        heightAutoHandle(e)
        classTagShortcutInput(e, textareaRef)
    }
    useEffect(() => {
        const sendMessageSupportInboxForm = document.getElementById('sendMessageSupportInboxForm');
        sendMessageSupportInboxForm.style.marginTop = sendMessageSupportInboxForm.offsetHeight + 'px';
    }, [])
    const heightAutoHandle = (e) => {
        const sendMessageSupportInboxForm = document.getElementById('sendMessageSupportInboxForm');
        sendMessageSupportInboxForm.parentNode.style.marginTop = sendMessageSupportInboxForm.offsetHeight + 'px'


        e.target.style.height = 'auto';
        if (e.target.scrollHeight < 150) {
            e.target.style.height = e.target.scrollHeight + 'px'
        }
        else {
            e.target.style.height = 150 + 'px'
        }
    }
    return (
        <div>
            <div id="SupportInbox" className={styles.NewPostNav + ' bg-base-100 '}>
                <a href="#" className={styles.closebtn} onClick={closeSupportInbox}>&times;</a>


                <div className=' max-w-md mx-auto shadow-2xl h-full pt-4 relative ' id='supportMessageBody'>
                    <div className='p-4 overflow-auto overflow-x-hidden h-full' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam nostrum molestias reprehenderit facilis quae vitae similique nesciunt, voluptates nihil nemo amet, aspernatur tempore quo inventore! Consequatur similique unde voluptatum.
                        Porro, odio! Eaque tempora error necessitatibus provident impedit velit deleniti consequuntur ducimus beatae explicabo perspiciatis quibusdam quidem quis dolorum sequi veniam fugit vero officiis magnam eveniet quia, consequatur exercitationem doloremque!
                        Inventore, cupiditate itaque. Sapiente iure cupiditate vero perferendis recusandae accusamus obcaecati veniam harum ducimus illum. Quas temporibus pariatur deleniti animi? Maxime delectus ipsa beatae quisquam porro dignissimos tempora animi deleniti?
                        Soluta officiis vitae quidem itaque accusantium distinctio saepe ipsa quaerat ab mollitia doloribus velit quo a animi odit fuga iure excepturi quam illo possimus, quisquam deserunt natus libero! Minima, natus?
                        Obcaecati tempore odio error ipsa iusto voluptatibus quaerat saepe natus veniam, nulla molestiae, laborum nam dignissimos dicta possimus. Ex placeat porro debitis fuga, laborum at vel earum optio quasi libero.
                        Nisi laborum ullam tempora officia, voluptatibus minima fugiat sed labore, deleniti culpa illo dolor at dignissimos repellat? At impedit tenetur quibusdam nulla itaque. Veritatis inventore excepturi fuga culpa, repellendus tempora.
                        Temporibus, recusandae qui nesciunt fuga a minus consequuntur delectus voluptatibus veniam ad alias hic, similique ducimus! Quia enim saepe eos maiores quisquam nam soluta tenetur, aliquid animi ullam necessitatibus? Velit.
                        Iure tempore perspiciatis aliquid reprehenderit laudantium, nisi eum neque placeat dolor molestias ducimus eaque, molestiae illum? Pariatur voluptatibus optio necessitatibus, animi magni quibusdam, quaerat earum neque fuga rerum at ab!
                        Iusto unde ex deserunt repellat? Totam provident consequatur sequi porro omnis illo dicta nemo, aliquid nulla est qui cumque ipsam voluptates commodi ab asperiores? Cumque error amet repellat consequatur repellendus.
                        Cumque ullam animi voluptatem eius ea dicta dolorum. Tempore rerum praesentium accusantium tenetur odit aut error non nulla, quia autem beatae alias sint quibusdam ipsa deserunt nostrum aperiam optio mollitia!
                    </div>


                    <div className='relative mt-[80px]' id='sendMessageSupportInboxFormParent'>
                        <div id='sendMessageSupportInboxForm' className='absolute bottom-0 bg-base-300 max-w-md w-full mb-0' >
                            <form action="" onSubmit={postHandle} className='flex  flex-col m-4'>

                                <div className='relative flex items-center'>
                                    <textarea ref={textareaRef}
                                        id='textForm'
                                        className='input input-success font-mono  w-[300px]'
                                        name="postBody"
                                        onBlur={onchangeInput}
                                        onKeyUp={(e) => shortcutKeyboard(e)}
                                        onChange={onchangeInput}
                                        onInput={onchangeInput}
                                        onCut={heightAutoHandle}
                                        onPaste={heightAutoHandle}
                                        onDrop={heightAutoHandle}
                                        onKeyDown={heightAutoHandle}
                                    >
                                    </textarea>
                                    <div className='align-bottom absolute right-[0%] ml-6 bottom-0'>
                                        <button className='btn btn-sm btn-primary ml-2 text-xs'>send</button>
                                    </div>
                                </div>
                                {/* <TextArea /> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};



export default SupportInbox;