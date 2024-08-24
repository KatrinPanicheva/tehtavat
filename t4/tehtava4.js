

const pisteet = prompt('Syötä pisteiden määrä.');

if (pisteet >= 0 && pisteet <= 39) {
    arvosana = 'Arvosana on 0';
} else if (pisteet >= 40 && pisteet <= 51) {
    arvosana = 'Arvosana on 1';
} else if (pisteet >= 52 && pisteet <= 63) {
    arvosana = 'Arvosana on 2';
} else if (pisteet >= 64 && pisteet <= 75) {
    arvosana = 'Arvosana on 3';
} else if (pisteet >= 76 && pisteet <= 87) {
    arvosana = 'Arvosana on 4';
} else if (pisteet >= 88 && pisteet <= 100) {
    arvosana = 'Arvosana on 5';
} else {
    arvosana = 'Virheellinen pisteiden määrä';
}

document.getElementById('#target').innerHTML = arvosana;