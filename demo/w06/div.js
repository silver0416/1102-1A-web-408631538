function changeVideo(index){
    const player = document.querySelector('.player');
    console.log('index player',index,player)
    switch(index){
        case 1:
            player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` 
            break;
        case 2:
            player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` 
            break;
        case 3:
            player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` 
            break;
        case 4:
            player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` 
            break;
        case 5:
            player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` 
            break;
    }
}
function changeColor(index){
    const section = document.querySelector('.main section');
    switch(index){
        case 1:
            section.style.backgroundColor = "yellow";
            section.style.width = "60%";
            section.style.padding = '0.5rem'
            console.log('section style',section.style)
            break
        case 2:
            section.style.backgroundColor = "purple";
            section.style.width = "60%";
            section.style.padding = '0.5rem'
            console.log('section style',section.style)
            break
        case 3:
            section.style.backgroundColor = "black";
            section.style.width = "60%";
            section.style.padding = '0.5rem'
            console.log('section style',section.style)
            break
    }
}