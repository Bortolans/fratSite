
<!-- ===========================================================

Projeto: Site para empresa de Catering Fraternité Crêpe
Nome do Arquivo: excluir.php
Descrição: Exclui um cliente do banco de dados com base no ID recebido pela URL 
           e redireciona para a lista de clientes.
Autor: Thiago Bortolan de Oliveira
Data Criação: 29/11/2025

=========================================================== -->


<?php
// Protege e conecta ao banco
require 'protecao.php';
require 'db.php';

// Recebe o ID do cliente a ser excluído
$id = $_GET['id'];

// Executa a query para deletar o cliente com o ID especificado
$conn->query("DELETE FROM cliente WHERE id_cliente=$id");

// Redireciona de volta para a página a página listar.php
header("Location: listar.php");
exit;
?>