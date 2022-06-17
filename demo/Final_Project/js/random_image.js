path = "./media/hero/"
path_BOTPu = "./media/spg/"
path_gallery = "./media/galleryForBG/"


function random(){
    i = Math.floor(Math.random() * 28 + 1);
    var url = (path + i + ".png");
    return url
}

function random_BOTPu(){
    i = Math.floor(Math.random() * 12 + 1);
    var url = (path_BOTPu + i + ".png");
    return url
}

function random_gallery(){
    i = Math.floor(Math.random() * 10 + 1);
    var url = (path_gallery + i + ".png");
    return url
}


function putRandomBGImage() {
    //section_hero
    var section_hero = document.querySelector('.section-hero');
    section_hero.style.backgroundImage = "url("+random()+")";
    section_hero.style.backgroundAttachment = 'fixed';
    section_hero.style.backgroundSize = '100% 100%';
    //section_resume
    var section_resume = document.querySelector('.section-resume');
    section_resume.style.backgroundColor = '#ffe100';
    //section-BOTPu
    var section_BOTPu = document.querySelector('.section-BOTPu');
    section_BOTPu.style.backgroundImage = "url("+random_BOTPu()+")";
    section_BOTPu.style.backgroundAttachment = 'fixed';
    section_BOTPu.style.backgroundSize = '100% 100%';
    var section_BOTPu_description = document.querySelector('.section-BOTPu-description');
    section_BOTPu_description.style.backgroundColor = '#ffe100';
    //section-gallery
    var section_gallery = document.querySelector('.section-gallery');
    section_gallery.style.backgroundImage = "url("+random_gallery()+")";
    section_gallery.style.backgroundAttachment = 'fixed';
    section_gallery.style.backgroundSize = '100% 100%';
    var section_gallery_box = document.querySelector('.section-gallery-box');
    section_gallery_box.style.backgroundColor = '#ffe100';
}