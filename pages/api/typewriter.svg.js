
import fs from 'fs/promises'

export default async function handler(req, res) {
    const js = await fs.readFile('test/index.js', 'utf-8');
    console.log(req.query)

    const svg = `
   <svg  height="100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="text">
    </g>
    <script>//<![CDATA[
            ${js}
        //]]>
    </script>
</svg>
        `
    res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
    res.write(svg);
    res.end();


}
