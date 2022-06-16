// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const sel = document.getElementById('self');
const para = document.getElementById('para');
const last = document.getElementById('last');
last.style.visibility = 'hidden';
sel.style.visibility = 'hidden';
para.style.visibility = 'hidden';

setTimeout(() => {
    sel.style.visibility = 'visible';
}, 3000);

setTimeout(function () {
    para.style.visibility = 'visible';
}, 5000);

setTimeout(function () {
    last.style.visibility = 'visible';
}, 7000);

















