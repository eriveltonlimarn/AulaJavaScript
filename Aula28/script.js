// --- SELEÇÃO DE ELEMENTOS DO HTML (DOM) ---

// Seleciona o campo de entrada do nome pelo ID
const inputNome = document.getElementById('nome');

// Seleciona o campo de entrada do telefone pelo ID
const inputTel = document.getElementById('telefone');

// Seleciona o botão de salvar para gerenciar os cliques
const btnSalvar = document.getElementById('btnSalvar');

// Seleciona a lista (ul) onde os contatos aparecem
const listaContatos = document.getElementById('listaContatos');

// VARIÁVEL DE CONTROLE: Armazena o ID do contato quando estamos editando.
// Se for null, o sistema entende que deve CRIAR um novo contato.
// Se tiver um número, o sistema entende que deve ATUALIZAR o contato existente.
let idEdicao = null;


// --- 1. BUSCAR DADOS AO CARREGAR A PÁGINA (READ) ---

// Executa assim que o navegador termina de carregar o HTML
document.addEventListener('DOMContentLoaded', function() {
    // Faz uma requisição GET para buscar todos os contatos salvos no MySQL
    fetch('http://localhost:3000/contatos')
        .then(response => response.json()) // Converte a resposta para JSON
        .then(dados => {
            // Para cada contato que veio do banco, desenha ele na tela
            dados.forEach(contato => {
                criarElementoContato(contato.id, contato.nome, contato.telefone);
            });
        })
        .catch(error => console.error('Erro ao buscar dados do banco:', error));
});


// --- 2. EVENTO DO BOTÃO SALVAR (CREATE OU UPDATE) ---

btnSalvar.addEventListener('click', function() {
    // Captura os valores atuais dos campos de texto
    const nomeValue = inputNome.value;
    const telValue = inputTel.value;

    // Validação básica para não enviar campos vazios
    if (nomeValue === '' || telValue === '') {
        alert("Atenção! Preencha o nome e o telefone.");
        return; 
    }

    // VERIFICAÇÃO: Estamos editando ou criando um novo?
    if (idEdicao !== null) {
        // --- LÓGICA DE ATUALIZAR (PUT) ---
        fetch(`http://localhost:3000/contatos/${idEdicao}`, {
            method: 'PUT', // Método HTTP para atualização
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome: nomeValue, telefone: telValue })
        })
        .then(response => response.json())
        .then(data => {
            alert("Contato atualizado com sucesso!");
            // Recarrega a página para limpar a interface e mostrar os dados atualizados do banco
            location.reload(); 
        })
        .catch(error => console.error('Erro ao atualizar:', error));

    } else {
        // --- LÓGICA DE CRIAR NOVO (POST) ---
        fetch('http://localhost:3000/contatos', {
            method: 'POST', // Método HTTP para criação
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome: nomeValue, telefone: telValue })
        })
        .then(response => response.json())
        .then(data => {
            // Desenha o novo contato na tela com o ID gerado pelo banco
            criarElementoContato(data.id, data.nome, data.telefone);
            alert("Salvo no banco de dados!");
            limparFormulario(); // Limpa os campos após salvar
        })
        .catch(error => console.error('Erro ao salvar:', error));
    }
});


// --- 3. FUNÇÃO PARA DESENHAR O CONTATO E GERENCIAR AÇÕES ---

function criarElementoContato(id, nome, telefone) {
    // Cria o item da lista (li) e define a classe CSS
    const li = document.createElement('li');
    li.className = 'contact-item';

    // Insere o HTML interno com os dados e botões
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

    // --- LÓGICA DE EXCLUIR (DELETE) ---
    const btnExcluir = li.querySelector('.btn-delete');
    btnExcluir.addEventListener('click', function() {
        if (confirm(`Deseja excluir ${nome}?`)) {
            // Faz a requisição DELETE enviando o ID na URL
            fetch(`http://localhost:3000/contatos/${id}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(() => {
                li.remove(); // Remove o item da tela após confirmar no banco
            })
            .catch(error => alert("Erro ao excluir do banco"));
        }
    });

    // --- LÓGICA DE EDITAR (PREPARAR PARA UPDATE) ---
    const btnEditar = li.querySelector('.btn-edit');
    btnEditar.addEventListener('click', function() {
        // 1. Devolve os dados do contato para as caixas de texto (inputs)
        inputNome.value = nome;
        inputTel.value = telefone;

        // 2. Guarda o ID deste contato na variável global de controle
        idEdicao = id;

        // 3. Altera visualmente o botão para indicar que o usuário está editando
        btnSalvar.innerText = "Atualizar Contato";
        btnSalvar.style.backgroundColor = "#f1c40f"; // Cor amarela (alerta/edição)
        
        // 4. Leva o foco do teclado para o campo nome
        inputNome.focus();
    });

    // Adiciona o contato pronto à lista visível
    listaContatos.appendChild(li);
}


// --- 4. FUNÇÃO AUXILIAR PARA LIMPAR O FORMULÁRIO ---

function limparFormulario() {
    inputNome.value = '';
    inputTel.value = '';
    idEdicao = null; // Reseta o ID de edição para que o próximo clique seja um novo cadastro
    btnSalvar.innerText = "Salvar Contato"; // Restaura o texto original do botão
    btnSalvar.style.backgroundColor = ""; // Restaura a cor original do CSS
}