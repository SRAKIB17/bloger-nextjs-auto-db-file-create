
import fs from 'fs/promises'

export default async function handler(req, res) {

    const svg = `
   <svg  height="100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="text">
    <text fill='red' font-size="45" font-family="Verdana" x="50" y="86" id="text">line</text>
    </g>
    <script>//<![CDATA[
            ${"js"}
        //]]>
    </script>
</svg>
        `
    res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
    res.write(svg);
    res.end();


}
