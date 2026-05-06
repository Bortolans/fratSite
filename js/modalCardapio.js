

/* ===========================================================

Projeto: Site para empresa de Catering Fraternité Crêpe
Nome do Arquivo: modalCardapio.js
Descrição: Responsável por controlar a abertura e o fechamento
           do modal de visualização dos cardápios no formulário de orçamento.
Autor: Thiago Bortolan de Oliveira
Data Criação: 15/05/2026

=========================================================== */

let currentIndex = 0;

const cardapios = [
    { nome: "Marselha", src: "pages/cardapios/cardapio-marselha.html" },
    { nome: "Premier", src: "pages/cardapios/cardapio-premier.html" },
    { nome: "Paris", src: "pages/cardapios/cardapio-paris.html" },
    { nome: "Le Grand", src: "pages/cardapios/cardapio-legrand.html" }
];

function abrirModal(index) {
    currentIndex = index;

    const overlay = document.getElementById("modal");
    if (!overlay) return;

    overlay.classList.add("ativo");

    document.body.style.overflow = "hidden";

    carregarCardapio("right");

    // fechar o modal clicando fora
    overlay.onclick = (e) => {
        if (e.target === overlay) fecharModal();
    };

    // fechar o modal com a tecla ESC
    document.onkeydown = (e) => {
        if (e.key === "Escape") fecharModal();
    };
}


function carregarCardapio(direcao = "right") {
    const conteudo = document.getElementById("modal-conteudo");
    const cardapio = cardapios[currentIndex];

    const oldContent = conteudo.querySelector(".slide-content");

    const newContent = document.createElement("div");
    newContent.className = "slide-content";

    fetch(cardapio.src)
    .then(res => res.text())
    .then(html => {
        newContent.innerHTML = html;

        // entrada
        newContent.classList.add(
            direcao === "right" ? "slide-enter-right" : "slide-enter-left"
        );

        conteudo.appendChild(newContent);

        // saída do antigo
        if (oldContent) {
            oldContent.classList.add(
                direcao === "right" ? "slide-exit-left" : "slide-exit-right"
            );

            setTimeout(() => oldContent.remove(), 300);
        }

        adicionarBotoes();
    });
}


function adicionarBotoes() {
    const overlay = document.getElementById("modal");

    // remove botões antigos
    document.querySelectorAll(".btnPrev, .btnNext, .btnClose")
        .forEach(el => el.remove());

    // PREV
    const btnPrev = document.createElement("span");
    btnPrev.className = "btnPrev";
    btnPrev.innerHTML = '<i class="bi bi-arrow-left-short"></i>';
    btnPrev.onclick = (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + cardapios.length) % cardapios.length;
        carregarCardapio("left");
    };

    // NEXT
    const btnNext = document.createElement("span");
    btnNext.className = "btnNext";
    btnNext.innerHTML = '<i class="bi bi-arrow-right-short"></i>';
    btnNext.onclick = (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % cardapios.length;
        carregarCardapio("right");
    };

    // CLOSE
    const btnClose = document.createElement("span");
    btnClose.className = "btnClose";
    btnClose.innerHTML = '<i class="bi bi-x"></i>';
    btnClose.onclick = (e) => {
        e.stopPropagation();
        fecharModal();
    };

    overlay.appendChild(btnPrev);
    overlay.appendChild(btnNext);
    overlay.appendChild(btnClose);
}

function fecharModal() {
    const overlay = document.getElementById("modal");
    if (overlay) overlay.classList.remove("ativo");

    document.body.style.overflow = "auto";
}
