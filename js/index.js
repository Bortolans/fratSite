
/* ===========================================================

Projeto: Site para empresa de Catering Fraternité Crêpe
Nome do Arquivo: index.js
Descrição: Slideshow automático
Autor: Thiago Bortolan de Oliveira
Data Criação: 29/11/2025

=========================================================== */


/* ============ SLIDESHOW AUTOMÁTICO ============ */
const imagens = [
    "img/index/slideFotos/slidePic2.webp",
    "img/index/slideFotos/slidePic3.webp",
    "img/index/slideFotos/slidePic4.webp",
    "img/index/slideFotos/slidePic6.webp",
    "img/index/slideFotos/slidePic8.webp",
    "img/index/slideFotos/slidePic10.webp",
    "img/index/slideFotos/slidePic11.webp",
    "img/index/slideFotos/slidePic17.webp",
    "img/index/slideFotos/slidePic14.webp",
    "img/index/slideFotos/slidePic16.webp"
];

let indexSlide = 0;
const fotoSlide = document.getElementById("fotoSlide");

if (fotoSlide) {
    setInterval(() => {
        indexSlide = (indexSlide + 1) % imagens.length;
        fotoSlide.src = imagens[indexSlide];
    }, 2500);
}