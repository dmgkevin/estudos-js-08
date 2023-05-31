/*Exercicio para encontrar o maior número entre 02 possibilidades*/

// function numeroMaior (x, y) {
//     Math.max(x, y)
// };
// console.log (Math.max(5, 4));

/*##################################################################*/

// function max (x, y) { /*Devido o fato do if nao ser grande, podemos tirar as chaves e reixar so o return*/
//     if (x > y) return x;
//     return y;
// }

/*##################################################################*/

function max (x, y) {
    return x > y ? x : y;
}