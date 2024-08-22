'use strict';

const kohde = document.querySelector('#target');

const suvi1 = +prompt('syötä eka sivu');
const sivu2 = +prompt('syötä toka sivu');
const sivu3 = +prompt('syötä kolmas sivu');

console.log(sivu1 === sivu2 && sivu2 === sivu3);

if(sivu1 === sivu2 && sivu2 === sivu3) {
    //tasasivuinen
    kohde.innerHTML = 'kolmio on tasasivuinen';
} else if (sivu1  !== sivu2 && sivu2 !== sivu3  ) {
    //epäsäännölinen
    kohde.innerHTML = 'kolmio epäsäännöllinen';
} else {
    kohde.innerHTML = 'kolmio tasakylkinen'
} 


