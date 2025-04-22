var teclado = require("prompt-sync")();
var cond = 0;
do {
    console.log("");
    console.log("Digite o numero desejado");
    console.log("1  +");
    console.log("2  -");
    console.log("3  |");
    console.log("4  *");
    console.log("0  Sair");
    cond = parseInt(teclado("Digite sua op\u00E7\u00E3o: "));
    console.clear();
    var n1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
    var n2 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
    if (cond == 1) {
        console.log("+");
    }
    else if (cond == 2) {
        console.log("-");
    }
    else if (cond == 3) {
        console.log("|");
    }
    else if (cond == 4) {
        console.log("*");
    }
    else if (cond == 0) {
        console.log("Fim de programa");
    }
} while (cond != 0);
