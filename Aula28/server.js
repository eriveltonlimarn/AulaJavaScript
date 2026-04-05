// --- CONFIGURAÇÃO E IMPORTAÇÃO DE MÓDULOS ---

// Importa o framework Express, essencial para criar as rotas (URLs) do servidor
const express = require('express'); 

// Importa o driver 'mysql2' para permitir que o Node.js execute comandos SQL no banco
const mysql = require('mysql2');    

// Importa o 'cors' para liberar o acesso do seu site (front-end) ao servidor (back-end)
const cors = require('cors');       

// Importa o 'body-parser' para que o servidor consiga ler dados enviados em formato JSON
const bodyParser = require('body-parser'); 

// Inicializa a aplicação Express
const app = express();

// Ativa o CORS para evitar erros de bloqueio de segurança no navegador
app.use(cors()); 

// Configura o servidor para entender mensagens no formato JSON automaticamente
app.use(bodyParser.json()); 


// --- CONEXÃO COM O BANCO DE DADOS ---

// Define as credenciais de acesso ao seu MySQL Workbench
const db = mysql.createConnection({
    host: 'localhost',       // O banco está rodando na sua própria máquina
    user: 'root',            // Usuário padrão do MySQL
    password: 'root',        // A senha que você definiu no MySQL (ajuste se necessário)
    database: 'agenda_db'    // O nome do banco de dados que criamos
});

// Executa a conexão e verifica se houve erros
db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('✅ Conectado ao MySQL com sucesso!');
});


// --- ROTA PARA LISTAR TODOS OS CONTATOS (READ / GET) ---

app.get('/contatos', (req, res) => {
    // Comando SQL para buscar todos os registros da tabela
    const sql = 'SELECT * FROM contatos';

    db.query(sql, (err, results) => {
        if (err) return res.status(500).send(err);
        // Envia a lista de contatos encontrada para o front-end
        res.send(results); 
    });
});


// --- ROTA PARA SALVAR UM NOVO CONTATO (CREATE / POST) ---

app.post('/contatos', (req, res) => {
    // Extrai nome e telefone do corpo da requisição enviada pelo formulário
    const { nome, telefone } = req.body; 

    // Comando SQL para inserir um novo registro (usamos ? por segurança)
    const sql = 'INSERT INTO contatos (nome, telefone) VALUES (?, ?)';
    
    db.query(sql, [nome, telefone], (err, result) => {
        if (err) return res.status(500).send(err);
        
        // Retorna o ID que o banco acabou de gerar para o novo contato
        res.send({ id: result.insertId, nome, telefone }); 
    });
});


// --- ROTA PARA ATUALIZAR UM CONTATO (UPDATE / PUT) ---

// O ':id' na URL indica qual contato específico queremos alterar
app.put('/contatos/:id', (req, res) => {
    // Pega o ID da URL e os novos dados do corpo da mensagem
    const { id } = req.params;
    const { nome, telefone } = req.body;

    // Comando SQL para atualizar os campos de um ID específico
    const sql = 'UPDATE contatos SET nome = ?, telefone = ? WHERE id = ?';

    db.query(sql, [nome, telefone, id], (err, result) => {
        if (err) return res.status(500).send(err);
        
        // Avisa ao front-end que a alteração foi concluída
        res.send({ mensagem: 'Contato atualizado com sucesso!' });
    });
});


// --- ROTA PARA EXCLUIR UM CONTATO (DELETE / DELETE) ---

app.delete('/contatos/:id', (req, res) => {
    // Pega o ID que o navegador enviou na URL
    const { id } = req.params; 

    // Comando SQL para apagar o registro permanentemente
    const sql = 'DELETE FROM contatos WHERE id = ?'; 

    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).send(err);
        
        // Confirma a exclusão para o front-end
        res.send({ mensagem: 'Contato excluído com sucesso!' });
    });
});


// --- INICIALIZAÇÃO DO SERVIDOR ---

// O servidor fica "ouvindo" pedidos na porta 3000
app.listen(3000, () => {
    console.log('🚀 Servidor rodando em http://localhost:3000');
});