
<!-- ===========================================================

Projeto: Site para empresa de Catering Fraternité Crêpe
Nome do Arquivo: loginAction.php
Descrição: Valida o login do administrador, iniciando sessão se usuário 
           e senha estiverem corretos.
Autor: Thiago Bortolan de Oliveira
Data Criação: 29/11/2025

=========================================================== -->


<?php
// Sessão e conexão com banco
session_start();
require 'db.php';

// Recebe usuário e senha
$usuario = $_POST['usuario'];
$senha = $_POST['senha'];

// Busca o usuário no banco
$sql = "SELECT * FROM admins WHERE usuario = '$usuario' LIMIT 1";
$result = $conn->query($sql);

if($result->num_rows === 1){
    $admin = $result->fetch_assoc();

    // Verifica a senha HASH
    if(password_verify($senha, $admin['senha_hash'])){
        
        $_SESSION['usuario'] = $admin['usuario'];
        header("Location: listar.php");
        exit;

    } else {
        echo "Senha incorreta!";
    }

} else {
    echo "Usuário não encontrado!";
}
?>