const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  button.classList.toggle('active');
});

/*

document.getElementById('myButton')
O que faz: procura no seu HTML um elemento que tenha o id="myButton".

addEventListener
O que é: é uma função que "escuta" eventos no elemento.

click'
É o primeiro argumento da função addEventListener.
Significa o tipo de evento que você quer ouvir.
Nesse caso: "click" → quando o usuário clicar no botão.

() => { ... } → função arrow
Isso é o que chamamos de arrow function do JavaScript (função de seta).

Explicando cada parte:

() → parênteses para parâmetros da função.
No seu caso, a função não precisa de parâmetros, então fica vazio.
Se precisasse do evento, poderia ser event => { ... }.

=> → seta, indica “a função faz isto:”.
{ ... } → chaves, delimitam o bloco de código que será executado quando o evento acontecer.

classList.toggle('active')
O que faz: adiciona ou remove a classe 'active' do elemento automaticamente.

classList
Cada elemento HTML (como <button>) pode ter várias classes CSS.
classList é uma lista de todas as classes que o elemento tem.
Exemplo: <button id="myButton" class="btn primary">Clique</button>

oggle('active')
toggle é um método que adiciona ou remove uma classe automaticamente.

*/