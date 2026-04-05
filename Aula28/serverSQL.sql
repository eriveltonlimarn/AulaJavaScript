-- 1. Cria o banco de dados da agenda
CREATE DATABASE agenda_db;

-- 2. Entra no banco de dados
USE agenda_db;

-- 3. Cria a tabela para salvar os contatos (linha por linha)
CREATE TABLE contatos (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único de cada contato
    nome VARCHAR(100) NOT NULL,        -- Nome com até 100 caracteres
    telefone VARCHAR(20) NOT NULL      -- Telefone como texto (para aceitar parênteses e traços)
);