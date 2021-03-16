/*
    ALGORITIMO DE ORDENAÇÃO BUBBLE SORT

    Percorre o vator, comparando um elemento com seu secessor. Caso o sucessor seja menor que o valor atual,ocorre a 
    troca entre eles. Esse processo se repete em várias passadas até que, no percurso final, nenhuma troca seja feita.

*/
let totTrocas, comps, pass

function bubbleSort(vetor){
    totTrocas = 0, comps = 0, pass = 0
    let trocas
    do {
        trocas = 0 //Início de uma nova passada
         pass++//quantidade de passadas

        //Percurso do vetor do início até o PENÚLTIMO elemento  
        for(let i = 0; i <= vetor.length - 2; i++){ //-2 pq vai até o penultimo número
            if(vetor[i] > vetor[i+1]){
                
                //forma padrão para trocar dois objs de lugar - usando uma variavel auxiliar
                //let aux = vetor[i]
                //vetor[i] = vetor[i + 1]
                //vetor[i + 1] = aux
                
                //Troca direta em JavaScript usando desestruturação de vetores
                [vetor[i],vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
            }
            comps++//contar quantas comparações foram feitas
        }
        totTrocas += trocas
    }while(trocas > 0) //enquanto houver trocas de elementos na varival *trocas* continuara no for
}

//Caso Aleatório
//let nums = [7,4,9,0,6,1,8,2,5,3]

//Pior caso
//let nums = [9,8,7,6,5,4,3,2,1,0]

//Melhor caso
let nums = [0,1,2,3,4,5,6,7,8,9]
/*
console.log("Antes:",nums)
bubbleSort(nums)
console.log("Depois:",nums)
console.log({totTrocas,comps,pass})
*/

import {empresas} from "../includes/15-mil-empresas.mjs"
console.log("Antes:",empresas)
console.time("Ordenando Empresas...")
bubbleSort(empresas)
console.timeEnd("Ordenando Empresas...")
console.log("Depois:",empresas)
console.log({totTrocas,comps,pass})