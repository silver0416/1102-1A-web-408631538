function change(index){
    const p = document.querySelector('.show-content')
    switch(index){
        case 0:
            p.innerHTML = `<iframe src="./resume.html" width="100%" height="100%"/>`
            break
        case 1:
            p.innerHTML = `<iframe src="./BOTPu.html" width="100%" height="100%"/>`
            break
        case 2:
            p.innerHTML = `<iframe src="./gallery.html" width="100%" height="100%"/>`
            break
    }
}