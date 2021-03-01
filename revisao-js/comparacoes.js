let a = 10, b = 15, c = 10 //Números
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)
console.log("-------------------")

a = "MARIA"
b = "DINAH"
c = "MARIA"
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)
console.log("-------------------")

//Booleans
a = true
b = false
c = true
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)
console.log("-------------------")

//Vetor
a = [1,2,3,4,5]
b = [10,20,30,40,50]
c = [1,2,3,4,5]
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)
console.log("-------------------")
//Na comparação de vetores, os resultados não são consistentes.
//CONCLUSÃO vetores NÂO SÂO diretamentes comparáveis entre si

//Objetos
a = {marca: "Volkswagen", modelo: "Fusca", ano: 1976}
b = {marca: "Fiat", modelo: "147", ano: 1980}
c = {marca: "Volkswagen", modelo: "Fusca", ano: 1976}
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)
console.log("-------------------")
//Objetos também apresentam inconsistência quando comparados diretamente
//CONCLUSÃO Geral:
//Tipos de dados que são comparáveis em JS : number, string, boolean.
