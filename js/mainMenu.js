
/* ===========================================================

Projeto: Site para empresa de Catering Fraternité Crêpe
Nome do Arquivo: mainMenu.js
Descrição: Slideshow automático
Autor: Thiago Bortolan de Oliveira
Data Criação: 29/11/2025

=========================================================== */

/* ============ CONTROLE MENU FECHAR============ */

document.addEventListener('click', function (event) {
  const menu = document.getElementById('menuNav');
  const toggler = document.querySelector('.navbar-toggler');

  if (!menu.classList.contains('show')) return;

  if (menu.contains(event.target) || toggler.contains(event.target)) return;

  menu.classList.remove('show');
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