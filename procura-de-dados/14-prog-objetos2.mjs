/*  Uma classe (class) é uma estrutura que permite controlar a criação 
    de obejtos de acordo com seus requisitos de utilização.    

    Uma classe pode ser comparada a uma forma de bolo. Se uma forma de bolo é redonda, com 
    um furo no meio, não importam os ingredientes que serão utilizados na receita, o bolo 
    (ou pudim, ou quindim) sairão no formato determinado pela forma.
*/

//Por convenção, nomes de classe iniciam em letra Maiúscula em JavaScript
class FormaGeografica {

    //Quando uma função está dentro de uma classe, ela é denominada MÉTODO. constructor() é um
    //método especial que é chamado toda vez que se tenta criar um objeto a partir da classe.
    //Nele, é possível fazer as avaliações que permitirão ou não a existência de um objeto.
    //O precesso de criação de um objeto pode ser abortado se o constructor() 
    //gerar um erro do tipo Exception.
    constructor(base, altura, tipo){
        //base, altura e tipo são os PARÂMETROS do construtor

        if(isNaN(base) || base <=0)       
            throw new Error("A base deve ser numérica e maior que zero.")
        
        if(isNaN(altura) || altura <=0)       
            throw new Error("A altura deve ser numérica e maior que zero.")

        //tipos deve ser Q, T ou E
        // if(tipo !== 'Q' || tipo !== 'T' || tipo !== 'E')
        if(!['Q','T','E'].includes(tipo)){
            throw new Error("O tipo deve ser Q, T ou E.")
        } 

        //
    }
}