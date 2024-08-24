'use strict';

const numero = prompt('Syötä luonnolline numero.');

let summa = 0;

for (let i=1; i <= numero; i++ ) {
    summa += i;
}

document.getElementById("#target").innerHTML =`Summa on: ${summa}`;