
<!-- ===========================================================

Projeto: Site para empresa de Catering Fraternité Crêpe
Nome do Arquivo: editar.php
Descrição: Exibe um formulário HTML com os dados de um cliente já cadastrado para edição,
           permitindo alterar informações e enviar para editarAction.php.
Autor: Thiago Bortolan de Oliveira
Data Criação: 29/11/2025

=========================================================== -->


<?php
// Protege a página e conecta ao banco
require 'protecao.php';
require 'db.php';

// Recebe o ID do cliente, busca os dados no banco e armazena em um array
$id = $_GET['id'];
$result = $conn->query("SELECT * FROM cliente WHERE id_cliente=$id");
$cliente = $result->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Editar Cliente</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

</head>
<body class="bg-light">
<div class="container mt-5">
    <div class="card shadow p-4">
        <h2 class="fw-bold mb-4">Editar Cliente</h2>
        <form action="editarAction.php" method="POST">

            <input type="hidden" name="id" value="<?= $cliente['id_cliente'] ?>">

            <div class="mb-3">
                <label class="form-label">Nome</label>
                <input type="text" class="form-control" name="nome" value="<?= $cliente['nome'] ?>" required>
            </div>

            <div class="mb-3">
                <label class="form-label">Sobrenome</label>
                <input type="text" class="form-control" name="sobrenome" value="<?= $cliente['sobrenome'] ?>" required>
            </div>

            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" name="email" value="<?= $cliente['email'] ?>" required>
            </div>

            <div class="mb-3">
                <label class="form-label">Telefone</label>
                <input type="text" class="form-control" name="telefone" value="<?= $cliente['telefone'] ?>" required>
            </div>

            <button type="submit" class="btn btn-primary">Salvar</button>
            <a href="listar.php" class="btn btn-secondary">Voltar</a>

        </form>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>