
<!-- ===========================================================

Projeto: Atividade Somativa 2 (Site para empresa de Catering Fraternité Crêpe)
Nome do Arquivo: listar.php
Descrição: Página que exibe em HTML a lista de clientes do banco de dados com opções de editar,
           excluir e adicionar novos, protegida para usuários logados.
Autor: Thiago Bortolan de Oliveira
Data Criação: 29/11/2025

=========================================================== -->


<?php
// Protege a página e conecta ao banco
require 'protecao.php';
require 'db.php';

// Busca todos os clientes ordenados pelo ID decrescente
$result = $conn->query("SELECT * FROM cliente ORDER BY id_cliente DESC");
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Clientes</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

</head>
<body class="bg-light">

<div class="container mt-5">

    <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="fw-bold">Lista de Clientes</h1>
        <div>
            <a href="inserir.php" class="btn btn-primary">+ Novo Cliente</a>
            <a href="logout.php" class="btn btn-secondary">Sair</a>
        </div>
    </div>

    <div class="card shadow">
        <div class="card-body">

            <table class="table table-striped table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    <?php 
                    // Inicia um loop que percorre todos os registros de clientes retornados da consulta ao banco
                    while($row = $result->fetch_assoc()): ?>
                        <tr>
                            <td><?= $row['id_cliente'] ?></td>
                            <td><?= $row['nome'] ?></td>
                            <td><?= $row['sobrenome'] ?></td>
                            <td><?= $row['email'] ?></td>
                            <td><?= $row['telefone'] ?></td>
                            <td>
                                <!-- Botão de edição, leva para editar.php passando o ID do cliente na URL -->
                                <a href="editar.php?id=<?= $row['id_cliente'] ?>" class="btn btn-sm btn-warning">
                                    Editar
                                </a>
                                <a href="excluir.php?id=<?= $row['id_cliente'] ?>"
                                class="btn btn-sm btn-danger"
                                onclick="return confirm('Excluir mesmo?')">
                                Excluir
                                </a>
                            </td>
                        </tr>
                    <?php endwhile; ?>
                </tbody>

            </table>

        </div>
    </div>

</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>