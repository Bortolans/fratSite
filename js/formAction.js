
/* ===========================================================

Projeto: Site para empresa de Catering Fraternité Crêpe
Nome do Arquivo: formAction.js
Descrição: Script responsável por recuperar os dados armazenados no localStorage
           (salvos pelo form.js), montar dinamicamente uma tabela de confirmação para exibição
           ao usuário, preencher os campos ocultos do formulário e permitir o envio do formulário
           confirmado para submit_form.php.
Autor: Thiago Bortolan de Oliveira
Data Criação: 05/11/2025

=========================================================== */


/* Recupera os valores do formulário armazenados no localStorage */
window.addEventListener('load', function() {
    const destino = document.getElementById('formEnviado');

    // Lista de todos os campos do formulário
    const campos = [
        'nome','sobrenome','email','telefone','idade','cardapio','cep','rua','numeroCasa',
        'bairro','cidade','estado','data','adultos','criancas','garcom','pratos','copeira','bio','referencia','terms_and_conditions'
    ];

    // Dicionário para mostrar nomes amigáveis na tabela
    const nomesCampos = {
        nome: "Nome:",
        sobrenome: "Sobrenome:",
        email: "E-mail:",
        telefone: "Telefone:",
        idade: "Idade:",
        cardapio: "Cardápio:",
        cep: "CEP:",
        rua: "Rua:",
        numeroCasa: "Número da residência:",
        bairro: "Bairro:",
        cidade: "Cidade:",
        estado: "Estado:",
        data: "Data:",
        adultos: "Adultos:",
        criancas: "Crianças:",
        garcom: "Serviço de garçom:",
        pratos: "Serviço de pratos e copos:",
        copeira: "Serviço de copeira:",
        bio: "Informações adicionais:",
        referencia: "Como conheceu:",
        terms_and_conditions: "Termos e Condições:"
    };

    // Monta a tabela
    let tabela = "<table id='tabela' class='tabela'>";
    tabela += "<tr><th>Campo</th><th>Dados</th></tr>";

    campos.forEach(campo => {
        // Pega o valor do localStorage
        const valor = localStorage.getItem(campo) || '';

        // Formata data para padrão brasileiro 
        let displayValue = valor;
        if (/^\d{4}-\d{2}-\d{2}$/.test(valor)) {
            const [ano, mes, dia] = valor.split('-');
            displayValue = `${dia}/${mes}/${ano}`;
        }

        // Adiciona linha na tabela com nome e valor
        tabela += `<tr>
            <td class="colunaCampo">${nomesCampos[campo]}</td>
            <td class="colunaValor">${displayValue}</td>
        </tr>`;

        // Preenche também os campos ocultos do form
        const inputHidden = document.getElementById(campo);
        if (inputHidden) {
            inputHidden.value = valor;
        }
    });

    tabela += "</table>";

    // Insere a tabela antes do botão
    const voltarEnviar = document.getElementById('voltarEnviar');
    destino.insertBefore(
        document.createRange().createContextualFragment(tabela),
        voltarEnviar
    );
});

// Função para enviar o formulário oculto
function submitForm() {
    const formulario = document.getElementById('formularioConfirmado');
    if (formulario) {
        formulario.submit();
    }
}