var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

var scores = [1, 10, 2, 21];
scores.sort(); // [1, 10, 2, 21]
// Observe que 10 vem antes do 2,
// porque '10' vem antes de '2' em ponto de código Unicode.

var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// Em Unicode, números vêem antes de letras maiúsculas,
// as quais vêem antes das minúsculas.

function comparar(a, b) {
    if (a é menor que b em algum critério de ordenação) {
      return -1;
    }
    if (a é maior que b em algum critério de ordenação) {
      return 1;
    }
    // a deve ser igual a b
    return 0;
  }


  var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numeros = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compararNumeros(a, b) {
  return a - b;
}

    var numeros = ['50', '50', '52','52','52','52','52','52','54','53','53','53','53','51','51','51','51','51','53','53'];
    console.log('numeros:', numeros.join());
    console.log('Ordenada sem função de comparação:', numeros.sort());
    console.log('numeros:', numeros.join());

console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('Ordenada sem função de comparação:', mixedNumericArray.sort());
console.log('Ordenada com compararNumeros:', mixedNumericArray.sort(compararNumeros));