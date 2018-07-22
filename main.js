'use strict';

window.addEventListener('keydown', dropThatBass);
let key;

function dropThatBass(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    key = document.querySelector(`.key__container[data-key="${e.keyCode}"`);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    } else {
        return;
    }
}

function removeTransition(e) {
    if (e.propertyName === 'transform') {
        key.classList.remove('playing');
    } else {
        return;
    }
}

const keys = document.querySelectorAll('.key__container');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
console.log('funciono', keys.forEach);