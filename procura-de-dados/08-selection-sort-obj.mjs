let trocas, pass, comps

function selectionSort(vetor, fnComp) {
    trocas = 0, pass = 0, comps = 0

    function encontrarMenor(inicio) {
        let menor = inicio
        for(let j = inicio + 1; j < vetor.length; j++) {
            //if(vetor[j] < vetor[menor]) menor = j
            //Parâmetro passados em ordem inversa para fnComp
            if(fnComp(vetor[menor], vetor[j])) menor = j
            comps++
        }
        return menor
    }

    // O vetor será percorrido da primeira até a PENÚLTIMA posição
    for(let i = 0; i <= vetor.length - 2; i++) {
        pass++
        let menor = encontrarMenor(i + 1)
        // console.log('i:', vetor[i], 'menor: ', vetor[menor])
        //if(vetor[menor] < vetor[i]) {
        if(fnComp(vetor[i], vetor[menor])) {
            [ vetor[menor], vetor[i] ] = [ vetor[i], vetor[menor] ]
            trocas++
        }
        comps++
    }
}

import {candidatos} from "../includes/candidatos-2018.mjs"

//Ordenando pelo nome de registro do candidato 
console.log("ANTES", candidatos)
console.time("Ordenar por nome de registro...")
selectionSort(candidatos,(a,b) => a.NM_CANDIDATO > b.NM_CANDIDATO)
console.log("DEPOIS: ", candidatos)
console.timeEnd("Ordenar por nome de registro...")
console.log({trocas, comps, pass})