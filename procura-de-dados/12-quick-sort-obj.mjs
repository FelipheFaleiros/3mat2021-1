let comps, trocas, passadas

function quickSort(vetor, fnComp, ini = 0, fim = vetor.length -1){
    if(fim > ini){  //Deve ter mais de um elemento para ordenar 
        passadas++
        let pivot = fim
        let div = ini - 1 
        //for indo do primeiro elemento até o PENÚLTIMO
        for(let i = ini; i < fim; i++){
            //if(vetor[i] < vetor[pivot]){
            if(fnComp(vetor[pivot], vetor[i])){     //Parâmetro invertidos
                div++
                [vetor [i], vetor[div] ] = [vetor [div], vetor[i] ]
                trocas++
            }   
            comps++
        }
        div++
        //Colocar o pivô em seu lugar definitivo
        //if(vetor[pivot] < vetor[div]){
        if(fnComp(vetor[div], vetor[pivot])){        //Parâmetro invertidos
            [ vetor[pivot], vetor[div] ] = [ vetor[div], vetor[pivot] ]
            trocas++
        }
        comps++
        //QuickSort à esquerda 
        quickSort(vetor, fnComp, ini, div - 1)

        //QuickSort à direita 
        quickSort(vetor, fnComp,div + 1, fim)
    }
}


import {candidatos} from "../includes/candidatos-2018.mjs"

comps = 0, trocas = 0, passadas = 0 
//Ordenando pelo nome de registro do candidato 
//console.log("ANTES", candidatos)
console.time("Ordenar por nome de registro...")
//quickSort(candidatos,(a,b) => a.NM_CANDIDATO > b.NM_CANDIDATO)

//Função de comparação considerando múltiplos níveis de ordenação:
//primeiro por SG_EU, depois por DS_CARGO e por fim, por NR_CANDIDATO 
//        Ordem Crescente
quickSort(candidatos,(a,b) => {
    if(a.SG_UE == b.SG_UE){
        if(a.DS_CARGO == b.DS_CARGO) return a.NR_CANDIDATO > b.NR_CANDIDATO
        else return a.DS_CARGO > b.DS_CARGO
    }
    else return a.SG_UE > b.SG_UE
})
/*          Ordem decrescente
quickSort(candidatos,(a,b) => {
    if(a.SG_UE == b.SG_UE){
        if(a.DS_CARGO == b.DS_CARGO) return a.NR_CANDIDATO < b.NR_CANDIDATO
        else return a.DS_CARGO < b.DS_CARGO
    }
    else return a.SG_UE < b.SG_UE
}) */
console.log("DEPOIS: ", candidatos)
console.timeEnd("Ordenar por nome de registro...")
console.log({trocas, comps, passadas})