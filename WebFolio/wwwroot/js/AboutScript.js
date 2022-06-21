'use strict';
const btnSoft = document.getElementById('btn-soft');
const btnTech = document.getElementById('btn-tech');

const imgLeft = document.querySelector('.img-poster');
const imgRight = document.querySelector('.img-second-poster');

function btnLeftShow() {
    btnSoft.classList.remove('hidden');
}

function btnRightShow() {
    btnTech.classList.remove('hidden');
}

function btnRightHide() {
    btnTech.classList.add('hidden');
}


function btnLeftHide() {
    btnSoft.classList.add('hidden');
}

imgLeft.addEventListener('mouseover', btnLeftShow);
imgLeft.addEventListener('mouseout', btnLeftHide)

imgRight.addEventListener('mouseover', btnRightShow);
imgRight.addEventListener('mouseout', btnRightHide);