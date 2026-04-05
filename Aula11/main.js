//Exemplo: conversão de texto para número
function converterParaNumero(valor) {
    if (isNaN(valor)) {
        // Lança um erro se não for número
        throw new Error("O valor fornecido não é um número");
    }
    return Number(valor);
}

try {
    let entradaUsuario = "abc"; // simule entrada inválida
    let numero = converterParaNumero(entradaUsuario);
    console.log("Número convertido:", numero);
} catch (erro) {
    console.log("Ocorreu um erro:", erro.message);
}

console.log("O programa continua rodando normalmente...");

/*isNaN significa “is Not a Number” → “não é um número”.
É uma função que verifica se um valor não pode ser convertido para um número válido.
O isNaN é frequentemente usado em validação de entrada de usuário.*/