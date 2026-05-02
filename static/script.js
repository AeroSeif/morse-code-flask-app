const morseText = document.getElementById("morse-output").innerText;
const eyes = document.querySelectorAll(".eye");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function blinkMorse() {
    for (let char of morseText) {

        if (char === ".") {
            blink(200);   // dot = short
            await sleep(400);
        }
        else if (char === "-") {
            blink(600);   // dash = long
            await sleep(800);
        }
        else if (char === " ") {
            await sleep(600);  // gap between letters
        }
        else if (char === "/") {
            await sleep(1200); // gap between words
        }
    }
}

function blink(duration) {
    eyes.forEach(eye => eye.classList.add("blink"));

    setTimeout(() => {
        eyes.forEach(eye => eye.classList.remove("blink"));
    }, duration);
}

// Start animation automatically
if (morseText.length > 0) {
    blinkMorse();
}