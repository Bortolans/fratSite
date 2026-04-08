
/* ===========================================================

Projeto: Site para empresa de Catering Fraternité Crêpe
Nome do Arquivo: form.js
Descrição: Script responsável pela interação com o formulário de orçamento.
           Ele captura os dados inseridos pelo usuário, realiza validações em campos como telefone,
           CEP, número de adultos/crianças e nomes, formata automaticamente o telefone e preenche
           o endereço via API do VIACEP com base no CEP informado. Os dados validados são salvos
           no localStorage e o usuário é redirecionado para a página de confirmação (formAction.html).
Autor: Thiago Bortolan de Oliveira
Data Criação: 29/10/2025

=========================================================== */


// Captura o envio do formulário
document.getElementById('formOrcamento').addEventListener('submit', function(e) {
    e.preventDefault();
    // Lista de todos os campos do formulário
    const campos = [
        'nome', 'sobrenome',
        'telefone', 'email',
        'idade', 'cep', 'rua',
        'numeroCasa', 'bairro',
        'cidade', 'estado', 
        'cardapio', 'data', 'adultos',
        'criancas', 'garcom',
        'pratos', 'copeira',
        'bio', 'referencia',
        'terms_and_conditions'
    ];

    // Salva valores no localStorage
    campos.forEach(campo => {
        if (campo === "cardapio"){
            const selecionado = document.querySelector('input[name="cardapio"]:checked');
            if (selecionado) {
                localStorage.setItem(campo, selecionado.value);
            }
            return;
        }

        const el = document.getElementById(campo);
        if (el) {
            if(el.type === "checkbox"){
                localStorage.setItem(campo, el.checked ? "Sim" : "Não");
            } else {
                localStorage.setItem(campo, el.value);
            }
        }
    });

    // Redireciona para a página de confirmação
    window.location.href = 'formAction.html';
});

/* Formata automaticamente o número de telefone no padrão (XX) XXXXX-XXXX */
function formatarTelefone(input) {
    // Remove tudo que não for número
    let valor = input.value.replace(/\D/g, ''); 

    // Limita a 11 dígitos
    if (valor.length > 11) {
        valor = valor.substring(0, 11); 
    }

    // Formatação progressiva conforme o usuário digita
    if (valor.length <= 2) { 
        input.value = '(' + valor;
    } else if (valor.length <= 7) {
        input.value = '(' + valor.substring(0, 2) + ') ' + valor.substring(2);
    } else {
        input.value = '(' + valor.substring(0, 2) + ') ' + 
        valor.substring(2, 7) + '-' + 
        valor.substring(7, 11);
    }
}

/* Validação e limitação do CEP */
document.getElementById('cep').addEventListener('input', function() {
    // Remove caracteres não numéricos
    this.value = this.value.replace(/\D/g, ''); 

    // Limita o CEP a 8 dígitos
    if (this.value.length > 8) {
        this.value = this.value.slice(0, 8);
    }
});

/* Busca automática do CEP via API do VIACEP */
document.getElementById('cep').addEventListener('blur', function() {
    const cep = this.value;

    // Verifica se o CEP possui 8 dígitos
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById('rua').value = `${data.logradouro || ''}`;
                    document.getElementById('bairro').value = data.bairro || '';
                    document.getElementById('cidade').value = data.localidade || '';
                    document.getElementById('estado').value = data.uf || '';

                    // Chama campo número da residencia para o usuário preencher
                    document.getElementById('numeroCasa').value = '';
                    document.getElementById('numeroCasa').focus();  
                    document.getElementById('numeroCasa').setAttribute('title', 'Preencha o número da residência');
                } else {
                    alert('CEP não encontrado.');
                }
            })
            .catch(error => console.error('Erro ao buscar endereço:', error));
    } else {
        alert('Formato de CEP inválido.');
    }
});


/* Limitação do campo Número da residencia*/
document.getElementById('numeroCasa').addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');
});


/* Limitação do campo Número de adultos 0 a 200 */
document.getElementById('adultos').addEventListener('input', function () {
    // mantém apenas números
    const valor = parseInt(this.value);
    if (!isNaN(valor) && valor > 200) {
        this.value = 200;
    }
});

/* Limitação do campo Número de crianças 0 a 100 */
document.getElementById('criancas').addEventListener('input', function() {
    const valor = parseInt(this.value);
    if (!isNaN(valor) && valor > 100) {
        this.value = 100;
    }
});

/* Limitação do campo Nome e Sobrenome para somente letras */
document.getElementById('nome').addEventListener('input', function() {
    // Mantém apenas letras
    this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
});

document.getElementById('sobrenome').addEventListener('input', function() {
    // Mantém apenas letras
    this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
});