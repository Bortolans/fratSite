
/* ===========================================================

Projeto: Site para empresa de Catering Fraternité Crêpe
Nome do Arquivo: zoomMidia.js
Descrição: Galeria de fotos da pagina picsPage.html
Autor: Thiago Bortolan de Oliveira
Data Criação: 05/02/2026

=========================================================== */


function abrirZoom(index) {

    const overlay = document.getElementById("zoomOverlay");
    overlay.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.className = "midiaWrapper";
    overlay.appendChild(wrapper);
    overlay.classList.add("ativo");

    let currentIndex = index;

    function renderMidia(){
        wrapper.innerHTML = "";

        const item = midias[currentIndex];
        let midiaEl;

        if (item.tipo === "foto") {
            midiaEl = document.createElement("img");
            midiaEl.src = item.src;
            midiaEl.alt = item.alt;
        } else if (item.tipo === "video") {
            midiaEl = document.createElement("video");
            midiaEl.src = item.src;
            midiaEl.autoplay = true;
            midiaEl.controls = false;
            midiaEl.muted = false;
            midiaEl.playsInline = true;
            midiaEl.preload = "auto";
            midiaEl.loop = true;
            midiaEl.setAttribute("aria-label", item.label);
            midiaEl.disablePictureInPicture = true;
            midiaEl.controlsList = "nodownload noremoteplayback";
        }


        const btnPrev = document.createElement("span");
        btnPrev.className = "btnPrev";
        btnPrev.innerHTML = '<i class="bi bi-arrow-left-short"></i>'
        btnPrev.onclick = (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + midias.length) % midias.length;
            renderMidia();
        };

        const btnNext = document.createElement("span");
        btnNext.className = "btnNext";
        btnNext.innerHTML = '<i class="bi bi-arrow-right-short"></i>';
        btnNext.onclick = (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % midias.length;
            renderMidia();
        }

        const btnClose = document.createElement("span");
        btnClose.className = "btnClose";
        btnClose.innerHTML = '<i class="bi bi-x"></i>';
        btnClose.onclick = (e) => {
            e.stopPropagation();
            fechar();
        };
        
        wrapper.appendChild(midiaEl);
        wrapper.appendChild(btnPrev);
        wrapper.appendChild(btnNext);
        wrapper.appendChild(btnClose);
    }


    function fechar() {
            const v = wrapper.querySelector("video");
            if (v) {
                v.pause();
                v.currentTime = 0;
            }
            overlay.classList.remove("ativo");
            setTimeout(() => overlay.innerHTML = "", 300);
        }

        // Fecha clicando fora
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) fechar();
        });

        // Fecha com ESC
        document.addEventListener("keydown", function esc(e) {
            if (e.key === "Escape") {
                fechar();
                document.removeEventListener("keydown", esc);
            }
        });
    renderMidia();
}



