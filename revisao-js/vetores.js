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

/******************* 
 *Percursos de Vetor 
 */
// 1) Percurso via for tradicional
// É o mais flexível, permitindo persursos parcial (pode começar em um elemento que não seja o primeiro e terminar em um elemento que não seja o último)
for(let i = 0; i < frutas.length; i++){
    console.log (i, frutas[i])
}

console.log("----------------------")

// 2) Percurso via for tradicional, em ordem inversa
for (let i = frutas.length -1; i>=0; i--){
    console.log(i,frutas[i])
}

console.log("-----------------")
// 3) Percurso usando for..of
//Percorre totalmente um vetor, sem nescessidade de manter uma variável contadora
//Variáveis:
//frutas -> o nome do vetor que receberá cada elemento (pode ser qqr nome válido de variável) 
//frutas -> o nome do vetor que está sendo percorrido 
for(let f of frutas){
    console.log(f)
}

console.log("-----------------")

// 4) Percurso utilizando forEach()
//forEach() recebe como argumento uma função cujo argumento
//é cada um dos elementos do vetor percorrido
//o nome do parâmetro da função passada pode ser qualquer nome válido de identificar
frutas.forEach(function(elemento) {
    console.log(elemento) 
})

//forEach() utilizando arrow function como parâmetro
//teste
frutas.forEach(elemento => console.log(elemento))