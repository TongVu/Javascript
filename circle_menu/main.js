var btnHamburger = document.getElementById('btn');
var nav = document.querySelector('#nav');
var line = document.querySelector('#btn');

var clicked = false;

btnHamburger.addEventListener('click', show);
function show() {
    if (clicked === false) {
        nav.classList.add('clip');
        line.children[0].classList.add('top');
        line.children[1].classList.add('middle');
        line.children[2].classList.add('bottom');

        clicked = true;
    } else {
        nav.classList.remove('clip');

        line.children[0].classList.remove('top');
        line.children[1].classList.remove('middle');
        line.children[2].classList.remove('bottom');

        clicked = false;
    }

};
