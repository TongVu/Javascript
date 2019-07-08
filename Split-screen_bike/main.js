var main = document.querySelector('main');
var spliter = document.querySelector('.spliter');
var topElement = document.querySelector('.top');

main.addEventListener('mousemove', split);
function split(e) {
    spliter.style.left = `${e.x}px`;
    topElement.style.width = `${e.x}px`;
}