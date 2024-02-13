//Variáveis
const readline = require('readline');

let nomeHeroi = "Nika";
let xpHeroi = 0;
let classeHeroi = definirClasse(xpHeroi);


let continuar = true;
//inicio 
console.log("O Herói de nome " + nomeHeroi + " está no nível de: " + classeHeroi);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function definirClasse(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp <= 2000) {
        return "Bronze";
    } else if (xp <= 5000) {
        return "Prata";
    } else if (xp <= 7000) {
        return "Ouro";
    } else if (xp <= 8000) {
        return "Platina";
    } else if (xp <= 9000) {
        return "Ascendente";
    } else if (xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

function adicionarXP() {
    rl.question('Deseja adicionar XP? (y/n): ', (resposta) => {
        if (resposta.toLowerCase() === 'y') {
            rl.question("Informe a quantidade de XP ganha: ",(xp)=>{
                xpHeroi += parseInt(xp);
                console.log(`XP adicionada. Novo total de XP: ${xpHeroi}`);
                classeHeroi = definirClasse(xpHeroi);
                console.log("O Herói de nome " + nomeHeroi + " está no nível de: " + classeHeroi+"\n");
                adicionarXP(); 
            });
        } else if(resposta.toLowerCase() === 'n'){
            console.log("Encerrando o programa...");
            continuar = false;
            rl.close();
        }else {
            console.log("Opção invalida tente novamente...\n");
            adicionarXP();
        }
    });
}


adicionarXP();
