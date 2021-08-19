

let iconElt = document.getElementById('menu_burger')
iconElt.addEventListener('click', function(){
    menuElt = document.querySelector('ul.menu_principal')
    if(menuElt.classList.contains('is_visible')){
        menuElt.classList.remove('is_visible')
    }else{
        menuElt.classList.add('is_visible')
    }
})