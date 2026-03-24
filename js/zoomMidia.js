
/* ===========================================================

Projeto: Site para empresa de Catering Fraternité Crêpe
Nome do Arquivo: zoomMidia.js
Descrição: Galeria de fotos da pagina picsPage.html
Autor: Thiago Bortolan de Oliveira
Data Criação: 05/02/2026

=========================================================== */


function abrirZoomImg(elemento) {

    const overlay = document.getElementById("zoomOverlay");
    overlay.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.className = "midiaWrapper";

    const img = document.createElement("img");
    img.src = elemento.src;
    img.alt = elemento.alt;

    const btnClose = document.createElement("span");
    btnClose.className = "btnClose";
    btnClose.innerHTML = '<i class="bi bi-x-circle-fill"></i>';

    btnClose.onclick = () => overlay.classList.remove("ativo");

    wrapper.appendChild(img);
    wrapper.appendChild(btnClose);
    overlay.appendChild(wrapper);
    overlay.classList.add("ativo");

    fecharZoomSetup(overlay, img, btnClose);
}


function abrirZoomVideo(src, label) {

    const overlay = document.getElementById("zoomOverlay");
    overlay.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.className = "midiaWrapper";

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

    const btnClose = document.createElement("span");
    btnClose.className = "btnClose";
    btnClose.innerHTML = '<i class="bi bi-x-circle-fill"></i>';

    btnClose.onclick = () => overlay.classList.remove("ativo");

    wrapper.appendChild(video);
    wrapper.appendChild(btnClose);
    overlay.appendChild(wrapper);
    overlay.classList.add("ativo");

    fecharZoomSetup(overlay, video, btnClose);
}


function fecharZoomSetup(overlay, midia, btnClose) {

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
    btnClose.onclick = fechar;

    document.addEventListener("keydown", function esc(e) {
        if (e.key === "Escape") {
            fechar();
            document.removeEventListener("keydown", esc);
        }
    });
}


