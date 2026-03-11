
<!-- ===========================================================

Projeto: Site para empresa de Catering Fraternité Crêpe
Nome do Arquivo: login.php
Descrição: Página de login com formulário em HTML que envia usuário e senha para validação,
           redireciona automaticamente usuários já logados para a página principal.
Autor: Thiago Bortolan de Oliveira
Data Criação: 29/11/2025

=========================================================== -->


<?php
// Inicia a sessão
session_start();
if(isset($_SESSION['usuario'])){
    header("Location: listar.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Login</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

</head>
<body class="bg-light">

<div class="container d-flex justify-content-center align-items-center vh-100">

    <div class="card shadow p-4" style="width: 380px;">
        <h3 class="text-center fw-bold mb-4">Login</h3>

        <form action="loginAction.php" method="POST">

            <div class="mb-3">
                <label class="form-label">Usuário</label>
                <input type="text" class="form-control" name="usuario" required>
            </div>

            <div class="mb-3">
                <label class="form-label">Senha</label>
                <input type="password" class="form-control" name="senha" required>
            </div>

            <button type="submit" class="btn btn-primary w-100">
                Entrar
            </button>

        </form>
    </div>

</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>