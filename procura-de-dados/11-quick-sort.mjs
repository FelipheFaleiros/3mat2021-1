/*
    Quick Sort

    Escolhe um dos elementos do vetor para ser o pivô(na nossa implementação, o último elemento) e, na primera
    passada, divide o vetor, a partir da posição final, em um subvetor à esquerda contendo apenas valores manores
    que o vetor subvetor à direita, que contém apenas valores maiores que o pivô.

    Em seguida, recursividade, repete o processo em cada um dos subvetores até que todo o vetor esteja ordenado.

*/

let comps, trocas, passadas

function quickSort(vetor, ini = 0, fim = vetor.length -1){
    if(fim > ini){  //Deve ter mais de um elemento para ordenar 
        passadas++
        let pivot = fim
        let div = ini - 1 
        //for indo do primeiro elemento até o PENÚLTIMO
        for(let i = ini; i < fim; i++){
            if(vetor[i] < vetor[pivot]){
                div++
                [vetor [i], vetor[div] ] = [vetor [div], vetor[i] ]
                trocas++
            }   
            comps++
        }
        div++
        //Colocar o pivô em seu lugar definitivo
        if(vetor[pivot] < vetor[div]){
            [ vetor[pivot], vetor[div] ] = [ vetor[div], vetor[pivot] ]
            trocas++
        }
        comps++
        //QuickSort à esquerda 
        quickSort(vetor, ini, div - 1)

        //QuickSort à direita 
        quickSort(vetor, div + 1, fim)
    }
}
/*
comps = 0, trocas = 0, passadas = 0 
//let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
//let nums = [9,8,7,6,5,4,3,2,1,0]
let nums = [0,1,2,3,4,5,6,7,8,9]
quickSort(nums)
console.log(nums)
console.log({comps, trocas, passadas})
*/


import { nomes } from "../includes/100-mil-nomes.mjs"

comps = 0, trocas = 0, passadas = 0 
//console.log("Antes:", nomes)
console.time("Ordenando Nomes...")
quickSort(nomes)
console.timeEnd("Ordenando Nomes...")
let memoria = process.memoryUsage().heapUsed / 1024 / 1024   //divide em 1024 para cair para Kili-byte e dpois por 1024 para cair para Mega-byte
console.log({trocas,comps,passadas,memoria})
console.log("Depois:", nomes)
