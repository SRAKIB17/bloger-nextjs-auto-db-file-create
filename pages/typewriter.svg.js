import React from 'react';

const Index = () => {
    return (
        <div>

        </div>
    );
};

export default Index;


export async function getServerSideProps(context) {

    const res = context?.res;
    const req = context?.req;

    const line = context.query?.line?.split(';');
    const colors = context.query?.colors?.split(';');
    const { font_size } = context.query


    const defaultColor = ['#004D33', '#211B50', '#DD4124', '#F5DF4D', '#FAE03C', '#79C753', '#DD3420', '#004d33', '#00477e', '#ffab00']
    if (line?.length != colors?.length) {
        for (let index = colors.length; index < line.length; index++) {
            const choose = defaultColor[Math.floor(Math.random() * defaultColor?.length)]
            colors?.push(choose)
        }
    }

    let y = 0
    const font = eval(font_size)
    if (font < 80) {
        y = font - font / 8;
    }
    else if (font <= 200) {
        y = font - font / 6;
    }

    else if (font >= 200) {
        y = font - font / 6;
    }


    const js = `
const words = ${JSON.stringify(line)},
    colors = ${JSON.stringify(colors)},
    svg = document.getElementById('text');

let line = ''

function generator() {
    let index = 0;
    return () => {
        if (index >= words.length) {
            index = 0;
        }
        return index++
    }
}




let gen = generator();

// GENERATE SVG
const svgGenerate = (line, fill = 'gold', font) => {

    var svgNS = "http://www.w3.org/2000/svg";
    var newText = document.createElementNS(svgNS, "text");
    newText.setAttributeNS(null, "x", 0);

    newText.setAttributeNS(null, "y", ${y});
    newText.setAttributeNS(null, "fill", fill);
    newText.setAttributeNS(null, "font-size", ${font_size});
    newText.setAttributeNS(null, "font-family", "Verdana");

    var textNode = document.createTextNode(line);
    newText.appendChild(textNode);
    document.getElementById("text").append(newText);
}

let index = 0
// Typing effect
function typeChar(word) {
    let i = 0;

    let id = setInterval(() => {
        if (i >= word.length) {
            deleteChar();
            clearInterval(id);
        }
        else {
            line += word[i];
            svg.textContent = ''
            index = words.indexOf(word)
            svgGenerate(line, colors[words.indexOf(word)])
            i++;
        }
    }, 300);

}

// Deleting effect
function deleteChar() {
    let word = line;
    let i = word.length - 1;
    let id = setInterval(() => {
        if (i >= 0) {
            line = line.substring(0, line.length - 1);
            i--;
            svg.textContent = ''
            svgGenerate(line, colors[index])
        }
        else {
            typeChar(words[gen()]);
            clearInterval(id);
        }
    }, 100);
}

// Initializing generator

typeChar(words[gen()]);
    
    `

    const svg = `
   <svg  height='${y + 15}' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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

    return {
        props: {},
    }
}