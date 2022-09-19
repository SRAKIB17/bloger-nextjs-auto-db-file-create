const words = ["I am a Devloper", " I am a Designer", "I am a Programmer"],
    colors = ["blue", "green", "yellow"],
    text = document.querySelector(".text");


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



// Typing effect
function typeChar(word) {
    let i = 0;

    text.innerHTML = "";
    text.classList.add(colors[words.indexOf(word)]);


    let id = setInterval(() => {
        if (i >= word.length) {
            deleteChar();
            clearInterval(id);
        }
        else {
            text.innerHTML += word[i];
            i++;
        }
    }, 300);


}

// Deleting effect
function deleteChar() {
    let word = text.innerHTML;
    let i = word.length - 1;
    let id = setInterval(() => {
        if (i >= 0) {
            text.innerHTML = text.innerHTML.substring(0, text.innerHTML.length - 1);
            i--;
        }
        else {
            text.classList.remove(colors[words.indexOf(word)]);
            typeChar(words[gen()]);
            clearInterval(id);
        }
    }, 100);
}

// Initializing generator

typeChar(words[gen()]);
