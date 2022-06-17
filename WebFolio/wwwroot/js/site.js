// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const sel = document.getElementById('self');
const para = document.getElementById('para');
const last = document.getElementById('last');

let btnAbout = document.getElementById('btn1');
let btnProjects = document.getElementById('btn2');
let btnContact = document.getElementById('btn3');


/*btnAbout.textContent = 'About';*/
last.style.display = 'none';
sel.style.display = 'none';
para.style.display = 'none';

setTimeout(() => {
    sel.style.display = 'inline-block';
}, 3000);

setTimeout(function () {
    para.style.display = 'inline-block';
}, 4800);

setTimeout(function () {
    last.style.display = 'inline-block';
}, 7000);   


//BUTTON 1 HOVER EFFECT 
btnAbout.addEventListener('mouseover', aboutHover, false);
btnAbout.addEventListener('mouseout', aboutStill, false);

function aboutHover() {
    btnAbout.textContent = '<About/>';
}

function aboutStill() {
    btnAbout.textContent = 'About';
}


//BUTTON 2 HOVER EFFECT
btnProjects.addEventListener('mouseover', projectHover, false);
btnProjects.addEventListener('mouseout', projectStill, false);

function projectHover() {
    btnAbout.textContent = '<Projects/>';
}

function projectStill() {
    btnAbout.textContent = 'Projects';
}















