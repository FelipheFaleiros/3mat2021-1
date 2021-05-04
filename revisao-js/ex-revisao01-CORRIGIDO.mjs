/*
    1. Identifique o algoritmo abaixo.
    2. Comente o que faz cada uma das linhas.
    3. Introduza a função de comparação e faça os ajustes necessários para o
       respectivo funcionamento.
    4. Teste o algoritmo no arquivo dados/candidatos-2018.mjs, ordenando primeiramente
       por SG_UE e depois por NR_CANDIDATO.
*/

/*

    Algoritmo: Selection Sort

    Mapeamento das variáveis
    a -> função de ordenação
    b -> vetor passado como parâmetro à função de ordenação
    c -> subfunção de ordenação
    d -> é vetor dentro da subfunção c
    e -> posição??
    f -> valor inicial igual a e, que será a posição do menor valor dentro do subvetor
    g -> contador da subfunção, que começa em e + 1 e vai até a última posição do vetor d
    h -> contador do for da função principal, vai até a penúltima posição
    i -> menor posição dentro do subvetor representado por h + 1 até o final
*/

const a = (b, fnComp) => {
    const c = (d, e) => {
        let f = e
        // for(let g = e + 1; g < d.length; g++) if(d[g] < d[f]) f = g
        for(let g = e + 1; g < d.length; g++) if(fnComp(d[f], d[g])) f = g
        return f
    }
    for(let h = 0; h < b.length - 1; h++) {
        // Passado para a subfunção c: o vetor e o contador + 1
        let i = c(b, h + 1)
        // if(b[h] > b[i]) [b[h], b[i]] = [b[i], b[h]]
        if(fnComp(b[h], b[i])) [b[h], b[i]] = [b[i], b[h]]
    }
}

/*
    4. Teste o algoritmo no arquivo dados/candidatos-2018.mjs, ordenando primeiramente
       por SG_UE e depois por NR_CANDIDATO.
*/

import { candidatos } from './includes/candidatos-2018.mjs'

a(candidatos, (x, y) => {
    if(x.SG_UE === y.SG_UE) {
        return x.NR_CANDIDATO > y.NR_CANDIDATO
    }
    else return x.SG_UE > y.SG_UE
})
//a(candidatos, (x, y) => x.NM_CANDIDATO > y.NM_CANDIDATO)
console.log(candidatos)