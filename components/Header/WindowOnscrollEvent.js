
const WindowOnscrollEvent = () => {
    const winScroll = document.documentElement.scrollTop;
    const header = document.getElementById('header')
    if (winScroll > 0) {
        header.className = ' m-0 border-b-2 sticky z-[100] top-0 w-full'
    }
    else {
        header.className = ' m-0 border-b-2 sticky z-[100] top-0 w-full'
    }

};

export default WindowOnscrollEvent;