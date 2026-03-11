
<!-- ===========================================================

Projeto: Site para empresa de Catering Fraternité Crêpe
Nome do Arquivo: logout.php
Descrição: Encerra a sessão do usuário e o redireciona para a página de login.
Autor: Thiago Bortolan de Oliveira
Data Criação: 29/11/2025

=========================================================== -->


<?php
session_start();
session_destroy();
header("Location: login.php");
exit;
?>