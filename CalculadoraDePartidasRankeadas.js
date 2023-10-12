
let vitorias = 10;
let derrotas = 0;


function saldoVitorias (vitorias, derrotas){
    return vitorias - derrotas;
}

function rank (saldoVitorias){
    if (saldoVitorias <=10){
        return "Ferro";
    }else if (saldoVitorias >10 && saldoVitorias <=20){
        return "Bronze";
    }else if (saldoVitorias >20 && saldoVitorias <=50){
        return "Prata";
    }else if (saldoVitorias >50 && saldoVitorias <=80){
        return "Ouro";
    }else if (saldoVitorias >80 && saldoVitorias <=90){
        return "Diamante";
    }else if (saldoVitorias >90 && saldoVitorias <=100){
        return "Lendário";
    }else{
        return "Imortal";
    }
}

const saldo = saldoVitorias(vitorias, derrotas);
const nivel = rank(saldo);

console.log(`O Herói tem saldo de ${saldo}, está no nível ${nivel}`);