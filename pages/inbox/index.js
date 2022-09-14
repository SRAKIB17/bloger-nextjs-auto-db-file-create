import React from 'react';
import InboxBody from '../../components/BLOG/Inbox/InboxBody';
import InboxUserList from '../../components/BLOG/Inbox/InboxUserList';
import Right_arrow from '../../components/BLOG/Settings/SvgComponent/Right_arrow';

const Index = () => {
    const message = {
        adminId: "9b836a9c57a91ce7805cc6a0",
        adminReply: true,
        emoji: "",
        message: "\n                    Successfully delete your post.. \n                    ",
        time: "2022-09-11T17:41:48.996Z",
        userID: "9b836a9c57a91ce7805cc6a0",
        _id: "631e1ddc9a0f58eae414598b"
    }
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
                            <InboxBody />
                        </div>
                    </div>
                    {/* ************** DRAWER MENU****************** */}
                    <InboxUserList />
                </div>


            </div>
        </div>
    );
};

export default Index;