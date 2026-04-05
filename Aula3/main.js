var num1 = 10; //cria uma variável
var num1 = 20;
const num2 = 50; //cria uma constante
//const num2 = 60; //a constante não posso utilziar a mesma 2x pois dará erro
let num3 = 30; //cria uma variável que pode ser reatribuída, mas não pode ser redeclarada no mesmo escopo.
//let num3 = 50; // erro: O identificador 'num3' já foi declarado
num3 = 40; //dessa forma o let pode ser reutilizado

num1 = 80;
//num2 = 90; //erro

console.log(num1, num2, num3);