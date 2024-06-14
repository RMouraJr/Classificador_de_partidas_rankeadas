
const prompt = require('prompt-sync')();

console.log("Seja bem-vindo caro Héroi, se você chegou até aqui é porque quer saber seu nivél nas partidas rankeadas, então vamos lá!");

let numWins = parseInt (prompt("Me fale o seu número de vitórias ? "));
let numLoses = parseInt(prompt("Agora preciso do seu número  de derrotas ? "));

let nvRankeado;

let eloRankeado;

numVictory();

rankeadas();

console.log ("Caro Herói você possui o de saldo de " + nvRankeado + " vitórias. " + eloRankeado );

function numVictory() {
    
        nvRankeado = numWins - numLoses
}


function rankeadas() {
    if (nvRankeado < 10) {
        eloRankeado = "Seu nivél rankeado é FERRO !";
    }
    else if (nvRankeado >= 11 && nvRankeado <= 20) {
        eloRankeado = "Seu nível rankeado é BRONZE !";
    }
    else if (nvRankeado >= 21 && nvRankeado<= 50) {
        eloRankeado = "Seu nível rankeado é PRATA !";
    }
    else if (nvRankeado >= 51 && nvRankeado<= 80 ) {
        eloRankeado = "Seu nível rankeado é OURO !";
    }
    else if (nvRankeado >= 81 && nvRankeado <= 90) {
        eloRankeado = "Seu nívell rankeado é DIAMANTE !";
    }
    else if (nvRankeado >= 91 && nvRankeado <= 100) {
        eloRankeado = "Seu nível rankeado é LENDÁRIO !";
    }
    else {
        eloRankeado = "Seu nível rankeado é IMORTAL !";
    }
}
