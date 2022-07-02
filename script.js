let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick =()=>{
    menu.classList.toggle('fa-times')
    header.classList.toggle('active')

};
window.onscroll =()=>{
    menu.classList.remove('fa-times')
    header.classList.remove('active')

};

let cursorEvent1 = document.querySelector('.cursor-1');
let cursorEvent2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
    cursorEvent1.style.top = e.pageY + 'px';
    cursorEvent1.style.left = e.pageX + 'px';
    cursorEvent2.style.top = e.pageY + 'px';
    cursorEvent2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links => {
    links.onmouseenter = ()=>{
        cursorEvent1.classList.add('active')
        cursorEvent2.classList.add('active')
    }
    links.onmouseleave = ()=>{
        cursorEvent1.classList.remove('active')
        cursorEvent2.classList.remove('active')
    }
})
