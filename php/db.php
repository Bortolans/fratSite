
<!-- ===========================================================

Projeto: Site para empresa de Catering Fraternité Crêpe
Nome do Arquivo: db.php
Descrição: Conecta o sistema ao banco de dados MySQL e verifica se a conexão foi bem-sucedida.
Autor: Thiago Bortolan de Oliveira
Data Criação: 27/11/2025

=========================================================== -->

<?php

// Carrega o autoload do Composer — ele registra todas as bibliotecas instaladas
require_once __DIR__ . '/../vendor/autoload.php';

// Carrega as variáveis do arquivo .env para o $_ENV
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

// Usa as variáveis de ambiente
$servername = $_ENV['DB_HOST'];
$username = $_ENV['DB_USER'];
$password = $_ENV['DB_PASS'];
$database = $_ENV['DB_NAME'];

// Cria a conexão com o MySQL
$conn = new mysqli($servername, $username, $password, $database);

// Verifica se houve erro na conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>

