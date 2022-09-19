const words = ["I am a Devloper", " I am a Designer", "I am a Programmer"],
    colors = ["blue", "green", "gold"],
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

    newText.setAttributeNS(null, "y", 45);
    newText.setAttributeNS(null, "fill", fill);
    newText.setAttributeNS(null, "font-size", "45");
    newText.setAttributeNS(null, "font-family", "Verdana");

    // `<text fill=${fill} font-size="45" font-family="Verdana" x="50" y="86" id="text">${line}</text>`

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
