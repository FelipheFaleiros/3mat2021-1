//Crian~]ao de um objeto vazio
let vazio1 = {}  //Forma "moderna"
let vazio2 = new Object   //Forma tradicional

//criação de objetos já com dados
let pessoa = {
    //Objetos organizam-se em partes de
    //propriedade: valor
    //também chamados de 
    //atributo: valor
    nome: 'Orkutilson da Silva',
    dataNasc: '2009-01-29',
    sexo: 'M',
    ocupacao: 'Estunte',
    //Nomes de propriedade podem ter espaços e/ou acentos
    //mas, nessa caso, precisam vir entre aspas 
    'cidade de origem' : 'Franca/SP',
}

//Acessando uma propriedade do objeto
console.log(pessoa.nome)
console.log(pessoa.ocupacao)
//Quando o nome da propriedade tem espaço e/ou acento não é possivel
//acessála pela sintaxe do ponto. Deve-se usar a sintaxe dos colchetes
console.log(pessoa['cidade de origem'])

//A sintaxe dos colchetes SEMPRE funciona
console.log(pessoa.dataNasc)      //Sintaxe com ponto
console.log(pessoa['dataNasc'])   //Sintaxe com colchetes

//A sintaxe dos colchetes é importante também quando o nome da propriedade
//está armazanada em uma variável
let prop = 'nome'
console.log (pessoa[prop])
prop = 'sexo'
console.log(pessoa[prop])
prop = 'cidade de origem'
console.log(pessoa[prop])

// Formas de exibição de um objeto inteiro no console
console.log (pessoa)
console.log ('-----------------')
console.table (pessoa)

let veiculo = {} //O objeto inicia-se vazio
//Foi criada a propriedade marca e colocado o valor 'Volkswagen' dentro dela
veiculo.marca = 'Volkswagen'
veiculo.modelo = 'Variant'
veiculo.ano = '1974'
//Propriedades com acento -> sintaxe dos colchetes
veiculo['combustível'] = 'gasolina'
veiculo.cor = 'azul'

console.log(veiculo)
console.table(veiculo)

//Listando todas as propriedades de um objeto
console.log ('-----------------------')

//for..in -> lista todos as propriedades de um objeto
//Variáveis:
//i -> a variável que irá conter o nome de cada uma das propriedades
//do objeto (pode ser qualquer nome válido de variável)
//pessoa -> o objeto do qual queremos listar as propriedades
for(let i in pessoa){
    console.log(i)
}
console.log ('-----------------------')
for(let x in veiculo){
    console.log(x)
}
console.log('-------------')
//Listando propriedades e valores do objeto veiculo com for..in 
for (let atrib in veiculo){
    console.log(atrib + ' -> ' + veiculo[atrib])
}
<<<<<<< HEAD
=======

>>>>>>> 1f79ddb2d1a2c1d0f35a118985c72d349579b137
//Objeto veiculo antes da exclusão da propriedade 
console.table(veiculo)

//Apagar uma propriedade de um objeto : delete
delete veiculo.ano
<<<<<<< HEAD

//Objeto veiculo depois da exclusão da propriedade
console.table(veiculo)
=======
//Objeto veiculo depois da exclusão da propriedade
console.table(veiculo)
>>>>>>> 1f79ddb2d1a2c1d0f35a118985c72d349579b137
