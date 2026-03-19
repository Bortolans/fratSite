
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | Fraternité Crêpe</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet">
    <script defer src="../js/mainMenu.js"></script>
    <link rel="stylesheet" href="../css/mainMenu.css">
</head>


<body>
<header>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">

            <a class="navbar-brand" href="index.html">
                <img id="logoMenu" src="../img/Logo_Fraternite_Crepe.png" alt="Fraternité Crêpe" class="img-fluid">
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#menuNav" aria-controls="menuNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="menuNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="../index.html">Início</a></li>
                    <li class="nav-item"><a class="nav-link" href="../picsPage.html">Fotos</a></li>
                    <li class="nav-item"><a class="nav-link" href="../form.html">Orçamento</a></li>
                    <li class="nav-item"><a class="nav-link" href="../about.html">História do Crepe</a></li>
                    <li class="nav-item"><a class="nav-link active" href="php/login.php">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>


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

            <button type="submit" class="btn btn-danger w-100">
                Entrar
            </button>
        </form>
    </div>
</div>


<div class="whatsapp-float">
    <a href="https://wa.me/5541991319322" target="_blank">
        <img src="img/logos/whatsappLogo.png" alt="WhatsApp">
    </a>
</div>

<footer class="footer">
    <div class="container">

        <div class="footer-row">

            <div class="social-links">
                <a href="https://www.instagram.com/fraternitecrepe/" target="_blank">
                    <img src="img/logos/instagramLogo.png" alt="Instagram">
                </a>
                <a href="https://www.facebook.com/Fraternitecrepecuritiba" target="_blank">
                    <img src="img/logos/facebookLogo.png" alt="Facebook">
                </a>
            </div>

            <div class="footer-center">
                <div class="footer-text">
                    <p>Copyright 2022 © Fraternité Crêpe</p>
                </div>

                <div class="payment-methods">
                    <img class="payment-visa" src="img/logos/visaLogo.png" alt="visa">
                    <img class="payment-mastercard" src="img/logos/mastercardLogo.png" alt="mastercard">
                </div>
            </div>

        </div>

    </div>
</footer>

</body>
</html>