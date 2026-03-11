
<!-- ===========================================================

Projeto: Site para empresa de Catering Fraternité Crêpe
Nome do Arquivo: inserirAction.php
Descrição: Recebe os dados do formulário, insere um novo cliente no banco de 
           dados e redireciona para a lista de clientes.
Autor: Thiago Bortolan de Oliveira
Data Criação: 29/11/2025

=========================================================== -->


<?php
// Protege e conecta ao banco
require 'protecao.php';
require 'db.php';

// Recebe os dados enviados pelo formulário via POST
$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];

// Monta e executa a query para inserir um novo cliente na tabela
$sql = "INSERT INTO cliente (nome, sobrenome, email, telefone)
        VALUES ('$nome', '$sobrenome', '$email', '$telefone')";

$conn->query($sql);

// Redireciona o usuário para a página listar.php
header("Location: listar.php");
exit;
?>