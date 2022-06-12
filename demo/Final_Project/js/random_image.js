path = "./media/"
const p = document.querySelector('.BGImg')
i = Math.floor(Math.random() * 28 + 1);
var url = (path + i + ".png");
p.innerHTML = "<img src=" + url + " width='1000' height='1000'>"