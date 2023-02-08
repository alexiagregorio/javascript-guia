//Os arrays e objetos podem conter outros arrays e objetos:
var points = [     //Um array com dois elementos.
    {x:0, y:0},    //Cada elemento é um objeto.
    {x:1, y:1}
];

var data = {                  // Um objeto com 2 propriedades
    trial1: [[1,2], [3,4]],   // O valor de cada propriedade é um array.
    trial2: [[2,3], [4,5]],   // Os elementos dos arrays são arrays.
}

console.log(points)
console.log(points[0])
console.log(points[1])
console.log(data.trial1[0])
console.log(data.trial1[1])
console.log(data.trial2[0])
console.log(data.trial2[1])
console.log(data.trial1)
console.log(data["trial2"])