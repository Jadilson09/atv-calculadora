var teclado = require("prompt-sync")();
var cond = 0;
do {
    console.log("");
    console.log("Digite a op\u00E7\u00E3o desejada: ");
    console.log("1 - Tralalelo Tralala");
    console.log("2 - Bombardilo Crocodilo");
    console.log("3 - La vaca Saturna Saturnita");
    console.log("4 - Truele Mero Trule Tina");
    console.clear();
    if (cond == 1) {
        console.log("Tralalelo Tralala");
    }
    else if (cond == 2) {
        console.log("Bombardilo Crocodilo");
    }
    else if (cond == 3) {
        console.log("La vaca Saturna Saturnita");
    }
    else if (cond == 0) {
        console.clear();
        console.log("Trule Mero Trule Tina");
    }
} while ();
