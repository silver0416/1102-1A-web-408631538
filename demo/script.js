function change(index){
    const p = document.querySelector('.show-demo')
    switch(index){
        case 1:
            p.innerHTML = `<iframe src="./20220301/pokeman.html" width="100%" height="100%"/>`
            break
        case 2:
            p.innerHTML = `<iframe src="./20220308/imageGallary.html" width="100%" height="100%"/>`
            break
        case 3:
            p.innerHTML = `<iframe src="./20220308/blog.html" width="100%" height="100%"/>`
            break
        case 4:
            p.innerHTML = `<iframe src="./w06/div.html" width="100%" height="100%"/>`
            break
    }
}