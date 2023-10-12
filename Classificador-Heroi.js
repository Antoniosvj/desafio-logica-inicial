const nomeHeroi = "Zabata"
let experiencia = 11000

switch (true){
    case experiencia < 1000:
        console.log(`O Heroi ${nomeHeroi} está no nível de Ferro`);
        break;
    case experiencia > 1000 && experiencia <= 2000:
        console.log(`O Heroi ${nomeHeroi} está no nível de Bronze`);
        break;
    case experiencia > 2000 && experiencia <= 5000:
        console.log(`O Heroi ${nomeHeroi} está no nível de Prata`);
        break;
    case experiencia > 5000 && experiencia <= 7000:
        console.log(`O Heroi ${nomeHeroi} está no nível de Ouro`);
        break;        
    case experiencia > 7000 && experiencia <= 8000:
        console.log(`O Heroi ${nomeHeroi} está no nível de Platina`);
        break;
    case experiencia > 8000 && experiencia <= 9000:
        console.log(`O Heroi ${nomeHeroi} está no nível de Ascendente`);
        break;
    case experiencia > 9000 && experiencia <= 10000:
        console.log(`O Heroi ${nomeHeroi} está no nível de Imortal`);
        break;  
    default:
        console.log(`O Heroi ${nomeHeroi} está no nível Radiante`);
}

