import React, { useEffect, useState } from 'react';
import InboxBody from '../../components/BLOG/Inbox/InboxBody';
import InboxUserList from '../../components/BLOG/Inbox/InboxUserList';
import Right_arrow from '../../components/BLOG/Settings/SvgComponent/Right_arrow';

const Index = () => {
    const messages = [
        {
            user_one: "1",
            emoji: "",
            message: "\n                    Successfully delete your post.. \n                    ",
            time: "2022-09-11T17:41:48.996Z",
            user_two: "2",
            _id: "631e1ddc9a0f58eae414598b"
        }
        ,
        {
            user_one: "5",
            emoji: "",
            message: "\n                    Successfully delete your post.. \n                    ",
            time: "2022-09-11T17:41:48.996Z",
            user_two: "1",
            _id: "631e1ddc9a0f58eae414598b"
        }
        , {
            user_one: "1",
            emoji: "",
            message: "\n                    Successfully delete your post.. \n                    ",
            time: "2022-09-11T17:41:48.996Z",
            user_two: "2",
            _id: "631e1ddc9a0f58eae414598b"
        }
        , {
            user_one: "1",
            emoji: "",
            message: "\n                    Successfully delete your post.. \n                    ",
            time: "2022-09-11T17:41:48.996Z",
            user_two: "2",
            _id: "631e1ddc9a0f58eae414598b"
        }
        , {
            user_one: "2",
            emoji: "",
            message: "\n                    Successfully delete your post.. \n                    ",
            time: "2022-09-11T17:41:48.996Z",
            user_two: "1",
            _id: "631e1ddc9a0f58eae414598b"
        }
        , {
            user_one: "1",
            emoji: "",
            message: "\n                    Successfully delete your post.. \n                    ",
            time: "2022-09-11T17:41:48.996Z",
            user_two: "4",
            _id: "631e1ddc9a0f58eae414598b"
        }
        , {
            user_one: "3",
            emoji: "",
            message: "\n                    Successfully delete your post.. \n                    ",
            time: "2022-09-11T17:41:48.996Z",
            user_two: "1",
            _id: "631e1ddc9a0f58eae414598b"
        }
        ,
    ]

    const userList = []
    messages?.forEach(message => {
        if (message?.user_one == 1 && !userList?.includes(message?.user_two)) {
            userList?.push(message?.user_two)
        }
        else if (message?.user_two == 1 && !userList?.includes(message?.user_one)) {
            userList?.push(message?.user_one)
        }
    })

    const [showSpecificUserMessage, setShowSpecificUserMessage] = useState([])
    const [specificId, setSpecificId] = useState('')
    const showSpecificUserMessageHandle = (id) => {
        setSpecificId(id)
    }

    useEffect(() => {
        const getMessages = messages?.filter(message => message?.user_one == specificId || message?.user_two == specificId);
        setShowSpecificUserMessage(getMessages);
    }, [specificId])

    return (
        <div>
            <div>
                <div className="drawer drawer-mobile">
                    <input id="settingsMenuContent" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col ">
                        {/* <!-- Page content here --> */}
                        <div>
                            <label
                                htmlFor="settingsMenuContent"
                                className="btn btn-ghost drawer-button lg:hidden m-1"
                            >
                                <Right_arrow strokeWidth='16' />
                            </label>
                        </div>
                        <div>
                            <InboxBody inbox_body={showSpecificUserMessage} />
                        </div>
                    </div>
                    {/* ************** DRAWER MENU****************** */}
                    <InboxUserList showSpecificUserMessageHandle={showSpecificUserMessageHandle} userList={userList} />
                </div>


            </div>
        </div>
    );
};

export default Index;