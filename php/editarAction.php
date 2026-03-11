
<!-- ===========================================================

Projeto: Atividade Somativa 2 (Site para empresa de Catering Fraternité Crêpe)
Nome do Arquivo: editarAction.php
Descrição: Atualiza os dados de um cliente no banco de dados com base no ID recebido 
           do formulário e redireciona para a lista de clientes.
Autor: Thiago Bortolan de Oliveira
Data Criação: 29/11/2025

=========================================================== -->


<?php
// Protege e conecta ao banco
require 'protecao.php';
require 'db.php';

// Recebe os dados enviados pelo formulário via POST
$id = $_POST['id'];
$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];

// Monta a query para atualizar os dados do cliente no banco
$sql = "UPDATE cliente SET
        nome='$nome',
        sobrenome='$sobrenome',
        email='$email',
        telefone='$telefone'
        WHERE id_cliente=$id";

$conn->query($sql);

// Redireciona de volta para a página a página listar.php
header("Location: listar.php");
exit;
?>
