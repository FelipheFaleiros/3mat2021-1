let frutas = ['laranja', 'maça', 'banana', 'pera', 'uva', 'mamão']
//Exibir o vetor
console.log (frutas)

//Tirar o último elemento do vetor
let ultimaFruta = frutas.pop()

console.log(frutas)
console.log(ultimaFruta)
 
//Tirar o primeiro elemento do vetor
let primeiraFruta = frutas.shift()

console.log (frutas)
console.log (primeiraFruta)

//Removendo posições intermediárias
//splice()
// 1º parâmetro : posição que será removida (lembre-se que a contagem começa em 0)
// 2º parâmetro : quantidade de elementos que serão removi
let terceiraFruta = frutas.splice(2,1)//Fruta na posição 2

console.log (frutas)
console.log (terceiraFruta)// splice() sempre retorna um vetor

//inserindo um elemento no fim  vetor
frutas.push('jubuticaba')

console.log (frutas)

//Inserindo um elemento no inicio do vetor
frutas.unshift('amora')

console.log(frutas)

//Inserindo em posição intermediária
//splice () para inserção
//1º parâmetro: a posição onde ocaorrerá a inserção
//2º parâmetro: quantos elementos serão excluidos (0)
//Parâmetros seguintes: elementos a serem inseridos 

//Inserindo na 4ª posição
frutas.splice(3,0,'pêssego')
console.log (frutas)

//Inserindo duas frutas na 3ª posição
frutas.splice(2,0,'caqui', 'jaca')
console.log (frutas)

//Subistituindo 6ª fruta
frutas.splice(5, 1, 'abacate')
console.log(frutas)