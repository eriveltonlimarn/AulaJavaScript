// --- SELEÇÃO DE ELEMENTOS DO HTML ---

// Armazena o campo de entrada do nome na variável 'inputNome'
const inputNome = document.getElementById('nome');

// Armazena o campo de entrada do telefone na variável 'inputTel'
const inputTel = document.getElementById('telefone');

// Armazena o botão de salvar na variável 'btnSalvar'
const btnSalvar = document.getElementById('btnSalvar');

// Armazena a lista (ul) onde os contatos serão mostrados na variável 'listaContatos'
const listaContatos = document.getElementById('listaContatos');

// --- EVENTO PRINCIPAL: CLIQUE NO BOTÃO SALVAR ---

// Adiciona um 'ouvinte' que executa a função sempre que o botão Salvar for clicado
btnSalvar.addEventListener('click', function() {
    
    // Captura o que foi digitado no campo nome
    const nomeValue = inputNome.value;
    
    // Captura o que foi digitado no campo telefone
    const telValue = inputTel.value;

    // Validação: Se o nome OU o telefone estiverem vazios...
    if (nomeValue === '' || telValue === '') {
        // ...mostra um alerta educativo para o aluno
        alert("Atenção! Você precisa preencher o nome e o telefone.");
        // O 'return' para o código aqui e não deixa criar o contato
        return; 
    }

    // Chama a função que vai construir o contato visualmente na tela
    criarElementoContato(nomeValue, telValue);

    // Após salvar, limpa o texto que ficou na caixa do nome
    inputNome.value = '';
    
    // Limpa o texto que ficou na caixa do telefone
    inputTel.value = '';

    // Coloca o cursor de digitação de volta no campo nome (foco)
    inputNome.focus();
});

// --- FUNÇÃO PARA CRIAR E GERENCIAR O CONTATO ---

// Esta função recebe o nome e o telefone como 'parâmetros'
function criarElementoContato(nome, telefone) {
    
    // Cria uma nova tag <li> (item de lista) no documento
    const li = document.createElement('li');
    
    // Adiciona a classe de estilo para que o CSS reconheça esse item
    li.className = 'contact-item';

    // Define o código HTML que vai dentro do <li>
    // Usamos 'nome-txt' e 'tel-txt' como classes para facilitar a edição depois
    li.innerHTML = `
        <div class="contact-info">
            <b class="nome-txt">${nome}</b>
            <span class="tel-txt">${telefone}</span>
        </div>
        <div class="actions">
            <button class="btn-edit">Editar</button>
            <button class="btn-delete">Excluir</button>
        </div>
    `;

    // --- LÓGICA DO BOTÃO EXCLUIR ---

    // Busca o botão excluir que está DENTRO deste item de lista específico
    const btnExcluir = li.querySelector('.btn-delete');
    
    // Ao clicar em excluir, removemos o item (li) da tela
    btnExcluir.addEventListener('click', function() {
        li.remove();
    });

    // --- LÓGICA DO BOTÃO EDITAR ---

    // Busca o botão editar que está DENTRO deste item de lista
    const btnEditar = li.querySelector('.btn-edit');
    
    // Define o que acontece ao clicar no botão Editar
    btnEditar.addEventListener('click', function() {
        // 1. Localiza o texto do nome que já está salvo no contato
        const nomeParaEditar = li.querySelector('.nome-txt').innerText;
        
        // 2. Localiza o texto do telefone que já está salvo no contato
        const telParaEditar = li.querySelector('.tel-txt').innerText;

        // 3. Devolve esses textos para as caixas de entrada (inputs) lá no topo
        inputNome.value = nomeParaEditar;
        inputTel.value = telParaEditar;

        // 4. Remove o item atual da lista para que o usuário salve a 'nova versão' atualizada
        li.remove();
        
        // 5. Coloca o cursor no campo nome para facilitar a alteração
        inputNome.focus();
    });

    // Adiciona o item pronto (com botões e eventos) dentro da lista principal (ul)
    listaContatos.appendChild(li);
}