
<!-- ===========================================================

Projeto: Site para empresa de Catering Fraternité Crêpe
Nome do Arquivo: protecao.php
Descrição: Protege a página, permitindo acesso apenas a usuários logados; 
           caso contrário, redireciona para o login.
Autor: Thiago Bortolan de Oliveira
Data Criação: 29/11/2025

=========================================================== -->

<?php
session_start();
if(!isset($_SESSION['usuario'])) {
    header("Location: login.php");
    exit;
}
?>