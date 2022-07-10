import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Header from '../../components/Header/Header';
import SinglePostView from '../../components/Post-NewsFeed/SinglePostView';
import RightMenu from '../../components/Story/RightMenu';
import { useRouter } from 'next/router'
import LoadingSpin from '../../components/LoadingSpin'
import Login from '../../components/Login/Login';
import LoadingFlowCircle from '../../components/LoadingFlowCircle';

const Index = () => {
    const router = useRouter()
    const post = {
        _id: 55635435,
        userID: '54fsdlj53',
        post_id: '2',
        post_title: 'StackOverFlow',
        thumbnail: 'https://api.lorem.space/image/shoes?w=400&h=225',
        image: '',
        time: 'dec 15, 2021',
        short_description: 'গিয়েছিলাম খিচুড়ি নিয়ে, সবাই আনন্দ করে খাইলো কিন্তু ৫০ টির মতো হিন্দু ধর্মাবলম্বী পরিবার খিচুড়ি গ্রহন কর         রেনি। কারণ তাদের ধর্মের বিধানানুযায়ী আজকের জন্য তা গ্রহন করতে নিষেধ করা হয়েছে। তাই তড়িঘড়ি করে এ ৫০ টি পরিবারের জন্য ফল-ফ্রুটসের        ব্যবস্থা করলাম।  আহা তাদের খুশি কে দেখে! কিছু কিছু সময় নিজেকে বিলিয়ে দিতে ইচ্ছে করে।',

        postBody: `<script src="//d3js.org/d3.v3.min.js"></script>So, as has been mentioned, that really isn't possible. However, there are some ways you can still be smart about it.\n" +
            '\n' +
            'Three of the five major browsers all allow you to see the zoom level of the browser, furthermore, should the browser be zoomed a window.onresize event is fired.\n' +
            '\n' +
            'IE:      event.view.devicePixelRatio           OR window.view.devicePixelRatio\n' +
            'Chrome:  event.currentTarget.devicePixelRatio  OR window.devicePixelRatio\n' +
            'Firefox: event.originalTarget.devicePixelRatio OR window.devicePixelRatio\n' +
            'Safari:  /* Not possible */\n' +
            'Opera:   /* Not possible */\n' +
            "I think the stuff after OR works based on something I noticed as I was messing around. The first ones I know work in at least the latest version of each one. Note that Safari and Opera both have the devicePixelRatio, however both never change. It's always just 1.\n" +
            '\n' +
            "The above is your easy way if you don't care that much. If you do, then you could try out the detect-zoom script, which I came across while looking for solutions to Safari and Opera.\n" +
            '\n' +
            "So what you can now do is get the zoom level, and then offset your zoom to where it doesn't do anything. So if I force my browser to 50% zoom, you just go to 200%. Thus, no change. Of course it will be a bit more complicated, you'll have to store the last browser zoom, the new browser zoom, and do some slightly more complicated math, but based on what you already have, that should be a breeze.\n" +
            '\n' +
            'Another idea might be to just listen for a resize event, and calculate based off the new visible size, but that might cause issues if the window is just resized. I think the above is going to be your best option, with perhaps a fallback alert to warn the user not to zoom if necessary.',`,
        postBodyJs: `
            
            var w = 960,
            h = 500,
            z = 20,
            x = w / z,
            y = h / z;

            var svg = d3.select("body").append("svg")
            .attr("width", w)
            .attr("height", h);

            svg.selectAll("rect")
            .data(d3.range(x * y))
            .enter().append("rect")
            .attr("transform", translate)
            .attr("width", z)
            .attr("height", z)
            .style("fill", function(d) { return d3.hsl(d % x / x * 360, 1, Math.floor(d / x) / y); })
            .on("mouseover", mouseover);

            function translate(d) {
            return "translate(" + (d % x) * z + "," + Math.floor(d / x) * z + ")";
            }

            function mouseover(d) {
            this.parentNode.appendChild(this);
            
            d3.select(this)
              .style("pointer-events", "none")
            .transition()
              .duration(750)
              .attr("transform", "translate(480,480)scale(23)rotate(180)")
            .transition()
              .delay(1500)
              .attr("transform", "translate(240,240)scale(0)")
              .style("fill-opacity", 0)
              .remove();
            }

            `,
        postBodyCss: 'fsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd',
        sort: '5345345345',

        category: {
            name: 'Vegetables',
            tags: ['html'],
        },
        postRefMode: 'video'
    }


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='h-[100vh]'>
            <Header />

            <div className='grid grid-cols-12 gap-2'>
                <div className='hidden sm:block sm:col-span-4 md:col-span-4 text-justify lg:ml-16 p-1 relative bg-base-100'>
                    <div className='fixed h-[100vh] overflow-auto sm:w-[200px] md:max-w-[300px] lg:max-w-[350px] md:w-full'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, cumque adipisci nisi possimus nostrum porro atque temporibus rerum repellat. Maxime, cupiditate! Fuga nobis velit animi voluptatem quam quo ea rerum!
                    </div>
                </div>

                <div className='col-span-12 sm:mr-3 md:mr-0 sm:col-start-5 sm:col-end-[-1] md:col-span-8 lg:col-span-5' id='storyScroll'>

                    <SinglePostView key={post?._id} post={post} />

                    {/* {
                        isLoading ||
                        <div className=" p-4 mt-2 text-center w-full bg-base-100">
                            <button
                                className='btn btn-primary lg:btn-sm btn-xs w-32 btn-outline mb-4'
                                onClick={() => setShowPosts(shows + 10)}
                            >
                                Next
                            </button>
                        </div>
                    } */}
                    {/* {
                        (isLoading && getPost.length === 0) &&
                        <div className='flex flex-col justify-between pt-40 bg-base-100 h-[100vh] items-center'>
                            <div>
                                <LoadingFlowCircle />
                            </div>
                        </div>
                    }
                    {
                        (isLoading && getPost.length !== 0) && <div className='flex flex-col justify-between pt-4 bg-base-100 pb-4 items-center'>

                            <div>
                                <LoadingFlowCircle />
                            </div>
                        </div>
                    } */}

                </div>

                <div className=' col-span-3 hidden lg:block relative bg-base-100 p-3'>
                    <div className='fixed h-full overflow-auto text-justify p-2'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;