
let totTrocas, comps, pass

function bubbleSort(vetor,fnComp){
    totTrocas = 0, comps = 0, pass = 0
    let trocas
    do {
        trocas = 0 //Início de uma nova passada
         pass++//quantidade de passadas

        //Percurso do vetor do início até o PENÚLTIMO elemento  
        for(let i = 0; i <= vetor.length - 2; i++){ //-2 pq vai até o penultimo número
            //if(vetor[i] > vetor[i+1]){
            if (fnComp(vetor[i],vetor[i + 1])){
                
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
//Função de comparação precisa retornar:
//true -> se o primeiro objeto for maior que o segundo
//false -> caso contrário

/*
import { candidatos } from "../includes/candidatos-2018.mjs" 
//Ordenando pelo nome de registro do candidato 
console.log ("ANTES:", candidatos)
console.time ("Ordenando por nome de registro...")
bubbleSort(candidatos, (a,b) => a.NM_CANDIDATO > b.NM_CANDIDATO)
console.timeEnd("Ordenando por nome de registro...")
console.log("DEPOIS:", candidatos)
console.log ({totTrocas,comps,pass})
*/

//Ordenando pelo nome de urna do candidato
import { candidatos } from "../includes/candidatos-2018.mjs" 
//Ordenando pelo nome de registro do candidato 
console.log ("ANTES:", candidatos)
console.time ("Ordenando por nome de registro...")
bubbleSort(candidatos, (a,b) => a.NM_URNA_CANDIDATO > b.NM_URNA_CANDIDATO)
console.timeEnd("Ordenando por nome de registro...")
console.log("DEPOIS:", candidatos)
console.log ({totTrocas,comps,pass})