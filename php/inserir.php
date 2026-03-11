
<!-- ===========================================================

Projeto: Site para empresa de Catering Fraternité Crêpe
Nome do Arquivo: inserir.php
Descrição: Exibe um formulário em HTML para cadastrar um novo cliente, enviando os 
           dados para inserirAction.php.
Autor: Thiago Bortolan de Oliveira
Data Criação: 29/11/2025

=========================================================== -->

<?php
// Protege a página
require 'protecao.php';
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Novo Cliente</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

</head>
<body class="bg-light">

<div class="container mt-5">

    <div class="card shadow p-4">
        <h2 class="fw-bold mb-4">Cadastrar Cliente</h2>

        <form action="inserirAction.php" method="POST">

            <div class="mb-3">
                <label class="form-label">Nome</label>
                <input type="text" name="nome" class="form-control" required>
            </div>

            <div class="mb-3">
                <label class="form-label">Sobrenome</label>
                <input type="text" name="sobrenome" class="form-control" required>
            </div>

            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" name="email" class="form-control" required>
            </div>

            <div class="mb-3">
                <label class="form-label">Telefone</label>
                <input type="text" name="telefone" class="form-control" required>
            </div>

            <button type="submit" class="btn btn-success">Salvar</button>
            <a href="listar.php" class="btn btn-secondary">Voltar</a>
        </form>

    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

