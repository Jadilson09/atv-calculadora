let teclado = require (`prompt-sync`)();
let cond: number = 0;

do{
    console.log(``);
    console.log(`Digite o número desejado`);
    console.log(`1  +`);
    console.log(`2  -`);
    console.log(`3  /`);
    console.log(`4  *`);
    console.log(`0  Sair`);
    cond = parseInt(teclado(`Digite sua opção: `));
    console.clear();
    let n1: number= parseInt(teclado(`Digite o primeiro número: `));
    let n2: number= parseInt(teclado(`Digite o primeiro número: `));

    if(cond == 1){
        console.log (`+`);
    }
else if(cond == 2){
    console.log (`-`);
}
else if(cond == 3){
    console.log (`/`);
}
else if(cond == 4){
    console.log (`*`);
}
else if(cond == 0){
    console.log (`Fim de programa`);
}

}while (cond != 0);
console.log(`Resultado é `);