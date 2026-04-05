  // Recebe o nome do usuário
  let nome = prompt("Digite seu nome:");

  // Pergunta se deseja criar a pasta
  let criar = confirm(`Deseja criar uma pasta com seu nome em /home/eriveltonlima/Documentos?`);

  if (criar) {
    // Simula a criação da pasta
    alert(`A pasta "${nome}" seria criada em /home/eriveltonlima/Documentos com sucesso!`);
  } else {
    // Mensagem de despedida
    alert(`Operação cancelada. Até logo, ${nome}!`);
  }
