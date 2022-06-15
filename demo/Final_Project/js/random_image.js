path = "./media/"
const p = document.querySelector('.hero-BGImg')
i = Math.floor(Math.random() * 28 + 1);
var url = (path + i + ".png");
p.innerHTML = "<img src=" + url + " class='hero-BGImg-img'>"