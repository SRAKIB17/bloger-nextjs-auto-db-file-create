/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

const Home = () => {
    let isScrolling = false;
    let x = 0;
    let y = 0;
    let count = 0
    const autoShow = (e) => {
        isScrolling = true;
    }
    const mouseMove = (e) => {
        if (isScrolling) {
            const getId = document.getElementById('aaa')
            x = e.pageX;
            y = e.pageY
            getId.scrollTo(getId.scrollLeft - e.movementX, 0)
            count = getId.scrollLeft - e.movementX

        }
    }
    useEffect(() => {

        let end = false
        setInterval(() => {
            const getId = document.getElementById('aaa');
            const getTotalWidth = (getId.scrollWidth - document.documentElement.clientWidth + 10)
            if (getTotalWidth <= count && !end) {
                end = true
                count = count - 10
                console.log('con 1')
            }

            else if (getTotalWidth >= count && end) {
                count--
                console.log('con 2')
                console.log(end)
                console.log(getId.scrollLeft)
                if (getId.scrollLeft == 0) {
                    end = false
                }
            }


            if (getTotalWidth >= count && !end) {
                count++
                end = false;
                console.log(end)
                console.log('con 3')

            }
            getId.scrollTo(count, 0)


        }, 100)
        document.documentElement.onmouseup = (e) => {
            isScrolling = false
        }

    }, [])



    // }, 400);
    return (
        <div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloremque, quis architecto earum cum facilis in provident aperiam alias expedita ducimus quibusdam, incidunt maxime ab officiis dicta quod voluptatibus ipsa.

            </div>

            <div className='flex gap-2 overflow-auto p-2 ' id='aaa' onMouseDown={autoShow} onMouseMove={mouseMove} data->
                <button className="btn">1</button><button className="btn">2</button><button className="btn">3</button><button className="btn">4</button><button className="btn">5</button><button className="btn">6</button><button className="btn">7</button><button className="btn">8</button><button className="btn">9</button><button className="btn">10</button><button className="btn">11</button><button className="btn">12</button><button className="btn">13</button><button className="btn">14</button><button className="btn">15</button><button className="btn">16</button><button className="btn">17</button><button className="btn">18</button><button className="btn">19</button><button className="btn">20</button><button className="btn">21</button><button className="btn">22</button><button className="btn">23</button><button className="btn">24</button><button className="btn">25</button><button className="btn">26</button><button className="btn">27</button><button className="btn">28</button><button className="btn">29</button><button className="btn">30</button><button className="btn">31</button><button className="btn">32</button><button className="btn">33</button><button className="btn">34</button><button className="btn">35</button><button className="btn">36</button><button className="btn">37</button><button className="btn">38</button><button className="btn">39</button><button className="btn">40</button><button className="btn">41</button><button className="btn">42</button><button className="btn">43</button><button className="btn">44</button><button className="btn">45</button><button className="btn">46</button><button className="btn">47</button><button className="btn">48</button><button className="btn">49</button><button className="btn">50</button><button className="btn">51</button><button className="btn">52</button><button className="btn">53</button><button className="btn">54</button><button className="btn">55</button><button className="btn">56</button><button className="btn">57</button><button className="btn">58</button><button className="btn">59</button><button className="btn">60</button><button className="btn">61</button><button className="btn">62</button><button className="btn">63</button><button className="btn">64</button><button className="btn">65</button><button className="btn">66</button><button className="btn">67</button><button className="btn">68</button><button className="btn">69</button><button className="btn">70</button><button className="btn">71</button><button className="btn">72</button><button className="btn">73</button><button className="btn">74</button><button className="btn">75</button><button className="btn">76</button><button className="btn">77</button><button className="btn">78</button><button className="btn">79</button><button className="btn">80</button><button className="btn">81</button><button className="btn">82</button><button className="btn">83</button><button className="btn">84</button><button className="btn">85</button><button className="btn">86</button><button className="btn">87</button><button className="btn">88</button><button className="btn">89</button><button className="btn">90</button><button className="btn">91</button><button className="btn">92</button><button className="btn">93</button><button className="btn">94</button><button className="btn">95</button><button className="btn">96</button><button className="btn">97</button><button className="btn">98</button><button className="btn">99</button><button className="btn">100</button>

            </div>
        </div>
    );
};

export default Home;