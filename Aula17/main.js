// Solicita o nome do usuário
let nome = prompt("Digite seu nome completo:");

// Solicita as notas e converte para número
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

// Calcula a média
let media = (nota1 + nota2) / 2;

// Exibe as informações do usuário
alert(
    "Nome: " + nome + "\n" +
    "Nota 1: " + nota1 + "\n" +
    "Nota 2: " + nota2 + "\n" +
    "Média: " + media.toFixed(2)
);

// Verifica situação
if (media >= 7) {
    alert("Parabéns, você foi aprovado!");
} else {
    alert("Você está reprovado. Estude mais!");
}