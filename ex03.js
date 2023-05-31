function fizzBuzz (n) {
    if (typeof n !== 'number') return n
    if (n % 5 === 0 && n % 3 === 0 ) return 'fizzBuzz'; /*Esta condição deve vir primeiro que as outras duas, pois ela checa 02 possibilidades. Caso estivesse por ultimo, se o numero for "fizzBuzz", retornaria somente "fizz" ou "buzz" ja que o numero condiz com as duas possibilidades. Passando como primeiro código a ser executado, ele passa os valores certo para os 03 casos: "fizz, buzz,e fizzBuzz"*/
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
}