//A rigor, a função abaixo não seria necessária, pois, usando recursos nativos do JS, poderíamos escrever x ** 2 ou Math.pow(x, 2)

//Característica desta função:
// 1) Tem apenas um parâmetro 
// 2)Seu corpo tem apenas uma linha, retornando valor
function quadrado(x){
    return x * x
}
console.log (quadrado(9))
//o fotmato de função acima é perfeito para conversão em attow function, que é um modo "abreviado"de encrever uma função em JS

// 1) O parênteses em toeno do parâmetro foram omitidos
// 2) A palavra *function*, que vinha ANTES do parâmetro, foi substituída pelo símbolo => do parâmetro
// 3) As chaves fotam omitidas
// 4) A palavra-chave *return* foi omitida
// 5) Uma arrow function é uma função anônima. Portanto, caso se deseje
// chamá-la posteriormente, é necessáriamente atribuí-la a uma variável.
const quadrado2 = x => x * x
console.log(quadrado2(9))

// Função com mais de um parâmetro 
function potencia(b, e){ //base = b, expoente = e
return b ** e
}
console.log(potencia(2, 10))

// Arrow function equivalente 
const potencia2 = (b, e) => b ** e
console.log(potencia2(2, 10))
 
 // Função sem parâmentros, que retorna um número aleatório entre 1 e 60
 function megasena(){
    // Math.random() -> retoena um número aleatório entre 0 (inclusive) e 1 (exclusive)
    return Math.random() * 60
 }
console.log(megasena(),megasena(),megasena(),megasena(),megasena(),megasena())


