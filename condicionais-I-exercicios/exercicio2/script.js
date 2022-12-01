let idade;
let isTerminouEnsinoMedio;
let isCursandoOutraFaculdade;


function dados(idade, isTerminouEnsinoMedio, isCursandoOutraFaculdade)
{
    if (idade > 18) {
        console.log("A pessoa é maior de idade")
    }else{
        console.log("A pessoa é menor de idade")        
    }

    if (isTerminouEnsinoMedio) {
        console.log("Terminou o ensino medio")
    }else{
        console.log("Não terminou o ensino medio")        
    }

    if (isCursandoOutraFaculdade) {
        console.log("Cursando faculdade")
    }else{
        console.log("Não está cursando faculdade")        
    }

}

