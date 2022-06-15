function putRandomBGImage() {
    path = "./media/"
    const p = document.querySelector('.hero-BGImg')
    i = Math.floor(Math.random() * 28 + 1);
    var url = (path + i + ".png");
    document.body.style.backgroundImage = "url("+url+")";
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = '100% 100%';
}