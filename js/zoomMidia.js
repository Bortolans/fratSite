
/* ===========================================================

Projeto: Site para empresa de Catering Fraternité Crêpe
Nome do Arquivo: zoomMidia.js
Descrição: Galeria de fotos da pagina picsPage.html
Autor: Thiago Bortolan de Oliveira
Data Criação: 05/02/2026

=========================================================== */


function abrirZoom(elemento) {

    const overlay = document.getElementById("zoomOverlay");
    overlay.innerHTML = "";

    const img = document.createElement("img");
    img.src = elemento.src;
    img.alt = elemento.alt;

    overlay.appendChild(img);
    overlay.classList.add("ativo");

    fecharZoomSetup(overlay, img);
}


function abrirZoomVideo(src, label) {

    const overlay = document.getElementById("zoomOverlay");
    overlay.innerHTML = "";

    const video = document.createElement("video");
    video.src = src;
    video.autoplay = true;
    video.controls = false;
    video.muted = false;
    video.playsInline = true;
    video.preload = "auto";
    video.loop = true;
    video.setAttribute("aria-label", label);
    video.disablePictureInPicture = true;
    video.controlsList = "nodownload noremoteplayback";

    overlay.appendChild(video);
    overlay.classList.add("ativo");

    fecharZoomSetup(overlay, video);
}


function fecharZoomSetup(overlay, midia) {

    midia.addEventListener("click", e => e.stopPropagation());

    function fechar() {
        if (midia.tagName === "VIDEO") {
            midia.pause();
            midia.currentTime = 0;
        }
        overlay.classList.remove("ativo");
        setTimeout(() => overlay.innerHTML = "", 300);
    }

    overlay.onclick = fechar;

    document.addEventListener("keydown", function esc(e) {
        if (e.key === "Escape") {
            fechar();
            document.removeEventListener("keydown", esc);
        }
    });
}


