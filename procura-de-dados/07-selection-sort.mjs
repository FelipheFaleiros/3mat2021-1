/* 
    SELECTION SORT

    Trata-se de uma otimização do bubble sort, diminuindo drasticamente
    o número de trocas necessárias para fazer  a orde

*/
let  trocas, pass, comps

function selectionSort(vetor){

    trocas = 0, pass = 0, comps = 0

    function encontrarMenor(inicio) {
        let menor = inicio
        for (let j = inicio + 1; j < vetor.length; j++){
            if (vetor[j] < vetor[menor]) menor = j 
            comps++
        }
        return menor
    }
    //0 vetor será percorrido da primeira até a PENULTIMA posição 
    for(let i=0; i <= vetor.length - 2; i++){
        let menor = encontrarMenor(i+1)
        pass++
        let menor = encontraMenor(i+1)
        //console.log("i:", vetor[i], "menor:", vetor[menor])   debug
        if(vetor[menor] < vetor[i]) {
            [vetor [menor], vetor[i]] = [vetor[i], vetor[menor]]
            trocas++
        }
        comps++
    }
}

//let nums = [7,4,9,0,6,1,8,2,5,3]
//Pior caso
let nums = [9,8,7,6,5,4,3,2,1,0]
selectionSort(nums)
//console.log(nums)
//console.log({trocas, pass, comps})