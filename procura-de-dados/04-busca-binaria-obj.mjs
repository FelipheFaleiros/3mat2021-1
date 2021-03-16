let comps = 0 
function buscaBinaria(vetor, fnComp) {
    let ini = 0
    let fim = vetor.length - 1
    let meio
    while (fim >= ini) {
        meio = Math.floor((fim + ini) / 2) //Math.floor() arredonda para baixo
        if (fnComp(vetor[meio] === 0)) {
            comps++
            return meio //achou
        }

        else if (fnComp(vetor[meio]) < 0) {
            comps += 2
            fim = meio - 1
        }

        else {
            comps += 2
            ini = meio + 1
        }
    }
    return -1 //valor não existe 
}

 import { objNomes } from '../includes/vetor-obj-nomes.mjs'

//Retornos da arrow function para busca binária
// 0 : igualdade
// 1 : 
// -1 : 
const comparaNomeBin = obj => {
    if(obj.first_name == "FELIPHE") return 0
    else if("FELIPHE" < obj.first_name) return -1
    else return 1
}
 console.time('Buscando ZILMAR')
 console.log(buscaBinaria(objNomes, obj =>{
    const valorBusca = 'ZILMAR'
    if(obj.first_name === valorBusca) return 0
    else if (valorBusca < obj.first_name) return -1
    else return 1   
 }), {comps})
 console.timeEnd('Buscando ZILMAR')
