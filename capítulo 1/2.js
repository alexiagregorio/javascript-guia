/*
//JavaScript também aceita arrays (listas indexadas numericamente) de valores.
var primes = [2,3,5,7];   //Um array de 4 valores, delimitados com [e].
primes[0]                   //2: O primeiro elemento (índice 0) do array.
primes.length               //4: quantidade de elementos no array.
primes[primes.length-1]     //7: último elemento do array.
primes[4] = 9;              //Adiciona um novo elemento por meio de atribuição.
primes[4] = 11;             //Ou altera um elemento existente por meio de atribuição.
var empty = [];             //[] é um array vazio, sem qualquer elemento.
empty.length                // => 0
*/

var prime = [2,3,5,7]
console.log(prime[0])
console.log(prime)
console.log(prime.length)
console.log(prime.length-1)
prime[1] = 4
console.log(prime[1])
console.log(prime)
////////////////////////////
var empty = []
console.log(empty.length)
