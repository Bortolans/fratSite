
/* ===========================================================

Projeto: Atividade Somativa 2 (Site Fraternité Crêpe)
Arquivo: fratCrepes.sql
Descrição: Script SQL responsável por criar as tabelas principais do banco de dados
           para a aplicação Fraternité Crêpe. Ele define a tabela 'cliente' para armazenar os
           dados dos clientes, a tabela 'orcamento' para registrar orçamentos vinculados aos
           clientes com integridade referencial via chave estrangeira, e a tabela 'admins' para
           gerenciar usuários administradores com senha hash. Também insere um usuário administrador
           inicial com login 'admin'.
Autor: Thiago Bortolan de Oliveira
Data Criação: 27/11/2025

=========================================================== */


CREATE TABLE cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL
);

CREATE TABLE orcamento (
    id_orcamento INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    data_orcamento DATETIME NOT NULL,
    descricao VARCHAR(255),
    valor DECIMAL(10,2),
    CONSTRAINT fk_cliente
        FOREIGN KEY (id_cliente)
        REFERENCES cliente(id_cliente)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE admins (
    id_admin INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL
);

INSERT INTO admins (usuario, senha_hash)
VALUES ('admin', '$2y$10$9i6/gH6sWlXvK3V3oA9dGuW4Rk8M5N7B6J4E3A2F1D0C8B7A6T5u2G0h2H4I6J8K0L');