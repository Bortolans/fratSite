
/* ===========================================================

Projeto: Site para empresa de Catering Fraternité Crêpe
Nome do Arquivo: mainMenu.js
Descrição: Slideshow automático
Autor: Thiago Bortolan de Oliveira
Data Criação: 29/11/2025

=========================================================== */

/* ============ CONTROLE MENU FECHAR============ */
const menu = document.getElementById('menuNav');
const toggler = document.querySelector('.navbar-toggler');

// Bloquea o scroll do body
menu.addEventListener('shown.bs.collapse', () => {
  document.body.style.overflow = "hidden";
});

menu.addEventListener('hidden.bs.collapse', () => {
  document.body.style.overflow = "auto";
});

// Fecha o menuNav clicando fora
document.addEventListener('click', function (event) {
  if (!menu.classList.contains('show')) return;

  if (menu.contains(event.target) || toggler.contains(event.target)) return;

  const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menu);
  bsCollapse.hide();
});

// Fecha o menuNav com a tecla ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && menu.classList.contains('show')) {
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menu);
    bsCollapse.hide();
  }
});


/* ============ ICONE WHATSAPP ANIMATION ============ */
const whatsApp = document.querySelector('.whatsapp-float');

function chamarAtencao() {
  whatsApp.classList.remove('animate__animated', 'animate__shakeY');
  void whatsApp.offsetWidth;
  whatsApp.classList.add('animate__animated', 'animate__shakeY');
}

setTimeout(chamarAtencao, 3000);
setInterval(chamarAtencao, 10000);


/* ============ CONTROLE HOVER holder-sections============ */
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.body.classList.add("tem-hover");
}