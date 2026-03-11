
<!-- ===========================================================

Projeto: Atividade Somativa 2 (Site para empresa de Catering Fraternité Crêpe)
Nome do Arquivo: db.php
Descrição: Conecta o sistema ao banco de dados MySQL e verifica se a conexão foi bem-sucedida.
Autor: Thiago Bortolan de Oliveira
Data Criação: 27/11/2025

=========================================================== -->

<?php
// Configurações de conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$database = "fratsitecrepe";

// Cria a conexão com o MySQL
$conn = new mysqli($servername, $username, $password, $database);

// Verifica se houve erro na conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>

