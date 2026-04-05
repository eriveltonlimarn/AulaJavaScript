// Para rodar este código, salve como script.js e execute com Node.js: node script.js
const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Função para perguntar algo no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta o nome do usuário
rl.question("Digite seu nome: ", function(nome) {
    
    // Pergunta se deseja criar a pasta (sim/não)
    rl.question(`Deseja criar uma pasta com seu nome na pasta Documentos? (ok/cancelar): `, function(resposta) {

        // Pega a pasta Documentos do usuário
        const homeDir = require("os").homedir();
        const documentos = path.join(homeDir, "Documentos");
        const pastaUsuario = path.join(documentos, nome);

        if (resposta.toLowerCase() === "ok") {
            // Cria a pasta se não existir
            if (!fs.existsSync(pastaUsuario)) {
                fs.mkdirSync(pastaUsuario);
                console.log(`Pasta "${nome}" criada em Documentos com sucesso!`);
            } else {
                console.log(`A pasta "${nome}" já existe em Documentos.`);
            }
        } else {
            console.log(`Operação cancelada. Até logo, ${nome}!`);
        }

        rl.close();
    });
});