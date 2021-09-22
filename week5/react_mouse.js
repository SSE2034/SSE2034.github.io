const menu_arr = document.querySelectorAll(".nav-link");

const MOUSEON_TXT_COLOR = "text-muted";

function outMouse(e){
    if (e.target !== e.currentTarget) return
    const index = parseInt(e.srcElement.id);
    menu_arr[index].classList.remove(MOUSEON_TXT_COLOR);
}

function enterMouse(e){
    if (e.target !== e.currentTarget) return
    const index = parseInt(e.srcElement.id);
    menu_arr[index].classList.add(MOUSEON_TXT_COLOR);
}


function init(){

    for(var i=0; i<menu_arr.length; i++){
        menu_arr[i].addEventListener("mouseover", enterMouse)
        menu_arr[i].addEventListener("mouseleave", outMouse)
    }
}


init();