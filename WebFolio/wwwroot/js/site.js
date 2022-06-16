// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const sel = document.getElementById('self');
const para = document.getElementById('para');
const last = document.getElementById('last');
last.style.display = 'none';
sel.style.display = 'none';
para.style.display = 'none';

setTimeout(() => {
    sel.style.display = 'inline-block';
}, 3000);

setTimeout(function () {
    para.style.display = 'inline-block';
}, 5000);

setTimeout(function () {
    last.style.display = 'inline-block';
}, 7000);

















