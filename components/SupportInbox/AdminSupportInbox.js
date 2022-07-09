/* eslint-disable @next/next/no-img-element */
import React from 'react';

const AdminSupportInbox = ({ setInboxMessage: { setInboxMessage, inboxUserId, setInboxUserId } }) => {
    const support = [
        {
            userID: '1',
            adminReply: false,
            adminId: '534fsdf545534',
            message: '543fsf5645',
            support_id: 54435345
        },
        {
            userID: '2',
            support_id: 54465435345
            ,
            adminReply: true,
            adminId: '11',
            message: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quam quis amet enim qui illo facilis corrupti libero molestias commodi itaque voluptate molestiae, ab ducimus? Quis perspiciatis quam quod voluptas?'
        },
        {
            userID: '3',
            adminReply: false,
            adminId: '534545534',
            message: 'গিয়েছিলাম খিচুড়ি নিয়ে, সবাই আনন্দ করে খাইলো কিন্তু ৫০ টির মতো হিন্দু ধর্মাবলম্বী পরিবার খিচুড়ি গ্রহন কর রেনি। কারণ তাদের ধর্মের বিধানানুযায়ী আজকের জন্য তা গ্রহন করতে নিষেধ করা হয়েছে। তাই তড়িঘড়ি করে এ ৫০ টি পরিবারের জন্য ফল-ফ্রুটসের ব্যবস্থা করলাম। আহা তাদের খুশি কে দেখে! কিছু কিছু সময় নিজেকে বিলিয়ে দিতে ইচ্ছে করে।',
            support_id: 54435345454445

        },
        {
            userID: '4',
            adminReply: false,
            adminId: '534545534',
            message: 'গিয়েছিলাম খিচুড়ি নিয়ে, সবাই আনন্দ করে খাইলো কিন্তু ৫০ টির মতো হিন্দু ধর্মাবলম্বী পরিবার খিচুড়ি গ্রহন কর রেনি। কারণ তাদের ধর্মের বিধানানুযায়ী আজকের জন্য তা গ্রহন করতে নিষেধ করা হয়েছে। তাই তড়িঘড়ি করে এ ৫০ টি পরিবারের জন্য ফল-ফ্রুটসের ব্যবস্থা করলাম। আহা তাদের খুশি কে দেখে! কিছু কিছু সময় নিজেকে বিলিয়ে দিতে ইচ্ছে করে।',
            support_id: 54435345454445

        },
        {
            userID: '5',
            adminReply: false,
            adminId: '534545534',
            message: 'গিয়েছিলাম খিচুড়ি নিয়ে, সবাই আনন্দ করে খাইলো কিন্তু ৫০ টির মতো হিন্দু ধর্মাবলম্বী পরিবার খিচুড়ি গ্রহন কর রেনি। কারণ তাদের ধর্মের বিধানানুযায়ী আজকের জন্য তা গ্রহন করতে নিষেধ করা হয়েছে। তাই তড়িঘড়ি করে এ ৫০ টি পরিবারের জন্য ফল-ফ্রুটসের ব্যবস্থা করলাম। আহা তাদের খুশি কে দেখে! কিছু কিছু সময় নিজেকে বিলিয়ে দিতে ইচ্ছে করে।',
            support_id: 54435345454445

        },
        {
            userID: '5',
            adminReply: false,
            adminId: '534545534',
            message: 'গিয়েছিলাম খিচুড়ি নিয়ে, সবাই আনন্দ করে খাইলো কিন্তু ৫০ টির মতো হিন্দু ধর্মাবলম্বী পরিবার খিচুড়ি গ্রহন কর রেনি। কারণ তাদের ধর্মের বিধানানুযায়ী আজকের জন্য তা গ্রহন করতে নিষেধ করা হয়েছে। তাই তড়িঘড়ি করে এ ৫০ টি পরিবারের জন্য ফল-ফ্রুটসের ব্যবস্থা করলাম। আহা তাদের খুশি কে দেখে! কিছু কিছু সময় নিজেকে বিলিয়ে দিতে ইচ্ছে করে।',
            support_id: 54435345454445

        },
        {
            userID: '5',
            adminReply: false,
            adminId: '534545534',
            message: 'গিয়েছিলাম খিচুড়ি নিয়ে, সবাই আনন্দ করে খাইলো কিন্তু ৫০ টির মতো হিন্দু ধর্মাবলম্বী পরিবার খিচুড়ি গ্রহন কর রেনি। কারণ তাদের ধর্মের বিধানানুযায়ী আজকের জন্য তা গ্রহন করতে নিষেধ করা হয়েছে। তাই তড়িঘড়ি করে এ ৫০ টি পরিবারের জন্য ফল-ফ্রুটসের ব্যবস্থা করলাম। আহা তাদের খুশি কে দেখে! কিছু কিছু সময় নিজেকে বিলিয়ে দিতে ইচ্ছে করে।',
            support_id: 54435345454445

        },
     
    ]
    const getUserId = support.map(inbox => {
        return {userID: inbox?.userID}
    });
    const showInboxSpecific = (id) => {
        setInboxUserId(id)
    }
    return (
        <div>
            <div>
                {
                    getUserId.map((k, index) =>
                        <div
                            onClick={() => showInboxSpecific(k?.userID)}
                            key={index}
                            className='bg-base-200 flex p-3 shadow-inner relative rounded-3xl w-full justify-end mt-1 mb-1 items-center cursor-pointer'
                        >
                            <div className="avatar ml-1">
                                <div className="w-[20px] rounded-full ">
                                    <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                                </div>
                            </div>
                            <div className='ml-1 w-full '>
                                <div className='break-words overflow-hidden text-lg font-bold'>
                                    {
                                        k.userID
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AdminSupportInbox;