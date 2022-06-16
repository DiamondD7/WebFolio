// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const intro = document.querySelector('.introduction-self');
const welcome = document.querySelector('.introduction-welcome');
const sel = document.getElementById('self');
sel.style.display = 'none';

setTimeout(() => {
    sel.style.display = 'inline-block';
}, 3000);