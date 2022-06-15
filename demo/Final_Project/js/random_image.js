path = "./media/"
path_BOTPu = "./media/spg/"


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

function putRandomBGImage() {
    //section_hero
    var section_hero = document.querySelector('.section-hero');
    section_hero.style.backgroundImage = "url("+random()+")";
    section_hero.style.backgroundAttachment = 'fixed';
    section_hero.style.backgroundSize = '100% 100%';
    // //section_resume
    // var section_resume = document.querySelector('.section-resume');
    // section_resume.style.backgroundImage = "url("+random()+")";
    // section_resume.style.backgroundAttachment = 'fixed';
    // section_resume.style.backgroundSize = '100% 100%';
    //section_BOTPu
    var section_BOTPu = document.querySelector('.section-BOTPu');
    section_BOTPu.style.backgroundImage = "url("+random_BOTPu()+")";
    section_BOTPu.style.backgroundAttachment = 'fixed';
    section_BOTPu.style.backgroundSize = '100% 100%';
}