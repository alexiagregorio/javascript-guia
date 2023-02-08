//O tipo de dado mais importante no JavaScript é o objeto
//Um objeto é uma coleção de pares/valor ou uma string para mapa de valores.
var book = {                 //Objetos são colocados entre chaves
    topic: "JavaScript",     //A propriedade "topic" tem o valor "JavaScript"
    fat: true                //A propriedade "fat" tem o valor true.
};                           //A chave marca o fim do objeto.

//Acesse as propriedades de um objeto com . ou []
book.topic                   // =>"JavaScript"
book["fat"]                  // =>true: outro modo de acessar valores de propriedade.
book.author = "Flanagan";    //Crie novas propriedades por meio de atribuição.
book.contents = {};          //{} é um objeto vazio sem qualquer propriedade.

