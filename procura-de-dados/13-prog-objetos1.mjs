const forma1 = {      //Quadrilátero
    base: 12,
    altura: 7.5,
    tipo: 'Q'
 }
 
 const forma2 = {      //Triângulo
    base: 15,
    altura: 9.4,
    tipo: 'T'
 }
 
 const forma3 = {      //Elipse
    base: 6.2,
    altura: 8.8,
    tipo: 'E'
 }
 
 const forma4 = {      //Foma desconhecida
    base: 16,
    altura: 11,
    tipo: 'S'
 }

 const forma5 = {      
    base: "abrobrinha",
    altura: "melao",
    tipo: 'T'
 }

 const forma6 = {      
    medida1: 5.5,
    medida2: 7,
    tipo: 'E'
 }
 /* O problema dessa abordagem com obejetos é que fica impossível controlar a criação de objetos. 
    Objetos podem ser criados de forma "defeituosa", não aderindo aos requisitos necessários para
    sua utilização (é o caso da forma4, forma5 e forma6).
 */ 
 
 function calcularArea(forma) {
    switch(forma.tipo){
       case 'Q':
          return forma.base * forma.altura
       case 'T':
          return forma.base * forma.altura / 2
       case 'E':
          return (forma.base / 2) * (forma.altura / 2) * Math.PI
       default:
          return NaN    
    }
 }
 
 console.log("Área da formula1:", calcularArea(forma1))
 console.log("Área da formula2:", calcularArea(forma2))
 console.log("Área da formula3:", calcularArea(forma3))
 console.log("Área da formula4:", calcularArea(forma4))
 console.log("Área da formula5:", calcularArea(forma5))
 console.log("Área da formula6:", calcularArea(forma6))