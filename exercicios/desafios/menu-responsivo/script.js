function clicar(){
    if(menu.style.display == 'flex'){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'flex'
    }
}

function mudouTam(){
    if(window.innerWidth >= 600){
        menu.style.display = 'flex'
    }else{
        menu.style.display = 'none'
    }
}