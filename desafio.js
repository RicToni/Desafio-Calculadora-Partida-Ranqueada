

function saldo(vitorias, derrotas) {
    let produtoSaldo = vitorias - derrotas
    return produtoSaldo
}

let produto = saldo(20, 8)

switch (true) {
    case produto < 10:
        console.log(`O Herói tem saldo de ${produto} e está no nível Ferro`);
        break;
    case produto >= 10 && produto < 20:
        console.log(`O Herói tem saldo de ${produto} e está no nível Bronze`);
        break;
    case produto >= 20 && produto < 50:
        console.log(`O Herói tem saldo de ${produto} e está no nível Prata`);
        break;
    case produto >= 50 && produto < 80:
        console.log(`O Herói tem saldo de ${produto} e está no nível Ouro`);
        break;
    case produto >= 80 && produto < 90:
        console.log(`O Herói tem saldo de ${produto} e está no nível Diamante`);
        break;
    case produto >= 90 && produto <= 100:
        console.log(`O Herói tem saldo de ${produto} e está no nível Lendário`);
        break;
    case produto > 100:
        console.log(`O Herói tem saldo de ${produto} e está no nível Imortal`);
        break;
    default:
        console.log("Seu Herói não o saldo mínimo");
}




