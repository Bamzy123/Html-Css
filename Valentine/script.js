const text = "Happy Valentine's Day Oyeiye";
const textElement = document.getElementById('valentine-text');
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();