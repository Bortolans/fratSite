
<!-- ===========================================================

Projeto: Atividade Somativa 2 (Site para empresa de Catering Fraternité Crêpe)
Nome do Arquivo: submit_form.php
Descrição: Script PHP que processa o formulário final enviado a partir de formAction.html.
           Ele recebe os dados via método POST, insere os dados do cliente no banco de dados
           e envia um e-mail ao administrador com as informações do cliente. Após a execução,
           redireciona o usuário para a página de sucesso (sucesso.html).
Autor: Thiago Bortolan de Oliveira
Data Criação: 27/11/2025

=========================================================== -->


<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Conecta ao banco de dados
require_once "db.php";

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Receber os dados do formulário via POST
    $nome = $_POST["nome"] ?? '';
    $sobrenome = $_POST["sobrenome"] ?? '';
    $telefone = $_POST["telefone"] ?? '';
    $email = $_POST["email"] ?? '';
    $idade = $_POST["idade"] ?? '';
    $cardapio = $_POST["cardapio"] ?? '';
    $cep = $_POST["cep"] ?? '';
    $rua = $_POST["rua"] ?? '';
    $numeroCasa = $_POST["numeroCasa"] ?? '';
    $bairro = $_POST["bairro"] ?? '';
    $cidade = $_POST["cidade"] ?? '';
    $estado = $_POST["estado"] ?? '';
    $data = $_POST["data"] ?? '';
    $adultos = $_POST["adultos"] ?? '';
    $criancas = $_POST["criancas"] ?? '';
    $garcom = $_POST["garcom"] ?? '';
    $pratos = $_POST["pratos"] ?? '';
    $copeira = $_POST["copeira"] ?? '';
    $bio = $_POST["bio"] ?? '';
    $referencia = $_POST["referencia"] ?? '';
    $terms_and_conditions = $_POST["terms_and_conditions"] ?? '';

    // inserção no banco de dados
    $sql = "INSERT INTO cliente (nome, sobrenome, telefone, email) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        die("Erro na preparação da query: " . $conn->error);
    }

    $stmt->bind_param("ssss", $nome, $sobrenome, $telefone, $email);

    if (!$stmt->execute()) {
        die("Erro ao inserir no banco de dados: " . $stmt->error);
    }

    $stmt->close();

    // Envia e-mail para o administrador
    $subject = "Novo Contato de Cliente";
    $message = "Um novo cliente entrou em contato:\n\n" .
        "Nome: $nome $sobrenome\n" .
        "Sobrenome: $sobrenome\n" .
        "Telefone: $telefone\n" .
        "E-mail: $email\n" .
        "Idade: $idade\n" .
        "Cardápio escolhido: $cardapio\n" .
        "CEP: $cep\n" .
        "Rua: $rua\n" .
        "Número da residência: $numeroCasa\n" .
        "Bairro: $bairro\n" .
        "Cidade: $cidade\n" .
        "Estado: $estado\n" .
        "Data do evento: $data\n" .
        "Adultos: $adultos\n" .
        "Crianças: $criancas\n" .
        "Serviço de garçom: $garcom\n" .
        "Serviço de pratos e copos: $pratos\n" .
        "Serviço de copeira: $copeira\n" .
        "Informações adicionais: $bio\n" .
        "Como conheceu: $referencia\n" .
        "Aceitou os termos e condições: $terms_and_conditions";

    $admin_email = "jack_bortolan@hotmail.com";
    @mail($admin_email, $subject, $message);

    // Redirecionar para a página de dados enviados
    header("Location: ../sucesso.html");
    exit;

} else {
    header("Location: form.html");
    exit;
}
