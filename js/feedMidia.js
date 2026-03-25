
/* ===========================================================

Projeto: Site para empresa de Catering Fraternité Crêpe
Nome do Arquivo: feedMidia.js
Descrição: Galeria de fotos da pagina picsPage.html
Autor: Thiago Bortolan de Oliveira
Data Criação: 05/02/2026

=========================================================== */

/* ===== FOTOS & VIDEOS ===== */
const midias = [
    { tipo: "foto", src: "img/pics_Page/fraterniteFoto42.jpg", alt: "" },
    { tipo: "video", src: "img/video_Page/fraterniteVideo9.mp4",  label: "" },
    { tipo: "foto", src: "img/pics_Page/fraterniteFoto43.jpg", alt: "" },
    { tipo: "video", src: "img/video_Page/fraterniteVideo3.mp4",  label: "" },

    { tipo: "foto", src: "img/pics_Page/fraterniteFoto7.jpg",  alt: "" },
    { tipo: "video", src: "img/video_Page/fraterniteVideo4.mp4",  label: "" },
    { tipo: "foto", src: "img/pics_Page/fraterniteFoto3.jpg",  alt: "" },
    { tipo: "foto", src: "img/pics_Page/fraterniteFoto37.jpg", alt: "" },
    { tipo: "foto", src: "img/pics_Page/fraterniteFoto26.jpg", alt: "" },
    { tipo: "video", src: "img/video_Page/fraterniteVideo10.mp4", label: "" },

    { tipo: "foto", src: "img/pics_Page/fraterniteFoto4.jpg",  alt: "" },
    { tipo: "video", src: "img/video_Page/fraterniteVideo1.mp4",  label: "" },
    { tipo: "foto", src: "img/pics_Page/fraterniteFoto40.jpg", alt: "" },
    { tipo: "foto", src: "img/pics_Page/fraterniteFoto41.jpg", alt: "" },
    { tipo: "video", src: "img/video_Page/fraterniteVideo5.mp4",  label: "" },
    { tipo: "foto", src: "img/pics_Page/fraterniteFoto6.jpg",  alt: "" },

    { tipo: "foto", src: "img/pics_Page/fraterniteFoto5.jpg",  alt: "" },
    { tipo: "video", src: "img/video_Page/fraterniteVideo11.mp4", label: "" },
    { tipo: "foto", src: "img/pics_Page/fraterniteFoto31.jpg", alt: "" },
    { tipo: "foto", src: "img/pics_Page/fraterniteFoto8.jpg",  alt: "" },
    { tipo: "video", src: "img/video_Page/fraterniteVideo7.mp4",  label: "" },
    { tipo: "foto", src: "img/pics_Page/fraterniteFoto36.jpg", alt: "" },

    { tipo: "foto", src: "img/pics_Page/fraterniteFoto11.jpg", alt: "" },
    { tipo: "video", src: "img/video_Page/fraterniteVideo12.mp4", label: "" },
    { tipo: "foto", src: "img/pics_Page/fraterniteFoto14.jpg", alt: "" },
    { tipo: "foto", src: "img/pics_Page/fraterniteFoto15.jpg", alt: "" },
    { tipo: "foto", src: "img/pics_Page/fraterniteFoto16.jpg", alt: "" },
    { tipo: "video", src: "img/video_Page/fraterniteVideo6.mp4",  label: "" },
    { tipo: "foto", src: "img/pics_Page/fraterniteFoto17.jpg", alt: "" },
    { tipo: "foto", src: "img/pics_Page/fraterniteFoto20.jpg", alt: "" },
    { tipo: "video", src: "img/video_Page/fraterniteVideo2.mp4",  label: "" },

    { tipo: "foto", src: "img/pics_Page/fraterniteFoto21.jpg", alt: "" },
    { tipo: "foto", src: "img/pics_Page/fraterniteFoto23.jpg", alt: "" },
    { tipo: "foto", src: "img/pics_Page/fraterniteFoto24.jpg", alt: "" },
    { tipo: "foto", src: "img/pics_Page/fraterniteFoto25.jpg", alt: "" },
    { tipo: "foto", src: "img/pics_Page/fraterniteFoto32.jpg", alt: "" }
];

midias.forEach((item, index) => {
    if (item.tipo === "foto" && !item.alt) {
        item.alt = `Foto do evento Fraternité Crêpe ${index + 1}`;
    }

    if (item.tipo === "video" && !item.label) {
        item.label = `Vídeo do evento Fraternité Crêpe ${index + 1}`;
    }
});


/* ==========================
   THUMB AUTOMÁTICA
========================== */
function gerarThumb(src, cb) {
    const v = document.createElement("video");
    v.src = src;
    v.muted = true;
    v.preload = "auto";
    v.playsInline = true;

    v.addEventListener("loadeddata", () => {
        v.currentTime = Math.min(2, v.duration - 0.5);
    });

    v.addEventListener("seeked", () => {
        const c = document.createElement("canvas");
        c.width = v.videoWidth;
        c.height = v.videoHeight;
        c.getContext("2d").drawImage(v, 0, 0);
        cb(c.toDataURL("image/jpeg", 0.8));
    });
}

/* ==========================
   RENDER
========================== */
const feed = document.getElementById("feedMidia");

midias.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "cardMidia";

    /* ---------- FOTO ---------- */
    if (item.tipo === "foto") {
        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.alt;
        img.loading = "lazy";

        card.appendChild(img);
        img.addEventListener("click", () => abrirZoom(index));
    }

    /* ---------- VÍDEO ---------- */
    if (item.tipo === "video") {
        const img = document.createElement("img");
        img.alt = item.label;
        img.loading = "lazy";

        gerarThumb(item.src, thumb => img.src = thumb);

        const play = document.createElement("span");
        play.className = "iconePlay";
        play.innerHTML = '<i class="bi bi-play-fill"></i>';

        card.appendChild(img);
        card.appendChild(play);

        card.addEventListener("click", () => abrirZoom(index));
    }

    feed.appendChild(card);
});

