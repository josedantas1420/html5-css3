function clicar(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    }else{
        itens.style.display = 'block'
    }
}

function mudouTam(){
    if(window.innerWidth >= 600){
        itens.style.display = 'flex'
    }else{
        itens.style.display = 'none'
    }
}