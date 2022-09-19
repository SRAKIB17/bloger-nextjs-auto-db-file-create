
const GenerateSVG = () => {

    const svg = `
<svg  height="100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="text">
    </g>
    <script>//<![CDATA[
            ${"js"}
        //]]>
    </script>
</svg>
        `
    return {svg}
};

export default GenerateSVG;