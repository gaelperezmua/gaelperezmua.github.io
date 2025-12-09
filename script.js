/* ---- BOTÓN "IR ARRIBA" ---- */

// Crear botón automáticamente
const btnTop = document.createElement("button");
btnTop.id = "btnTop";
btnTop.innerHTML = "↑";
document.body.appendChild(btnTop);

// Mostrar botón cuando se baja
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
});

// Volver arriba
btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


/* ---- ANIMACIÓN DE APARICIÓN AL HACER SCROLL ---- */

const elementos = document.querySelectorAll(
    ".servicio-item, .extra-item, .galeria-grid img"
);

const mostrarElemento = () => {
    elementos.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", mostrarElemento);
window.addEventListener("load", mostrarElemento);


/* ---- NAVEGACIÓN SUAVE ---- */

document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener("click", function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute("href"));
        if (destino) {
            destino.scrollIntoView({ behavior: "smooth" });
        }
    });
});
