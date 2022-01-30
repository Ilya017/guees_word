
window.onload = function () {
    let words = ["apple", "pear"];
    gen(words);
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = checkWord;
    }
}
function checkWord(event) {
    let k = prompt("Введите название фрукта");
    let image = event.target;
    let word = image.id;
    if (k == word) {
        alert("Верно");
    }
    else {
        alert("Неверно");
    }
}

function gen(words) {
    for (let i = 0; i < words.length; i++) {
        document.write(`<img src="images/${words[i]}.png" id = "${words[i]}">`);
    }
}