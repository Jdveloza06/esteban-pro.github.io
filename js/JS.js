// ...existing code...
function mostrarMensaje() {
    alert("🚧 ¡Gracias por tu interés en Arreglo de vías online! 🚧\nNos pondremos en contacto contigo pronto.");
}

// Animación de entrada suave
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    obs.unobserve(entry.target); // opcional: una sola animación por sección
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(section => {
            section.classList.add("hidden");
            observer.observe(section);
        });
    } else {
        // Fallback: mostrar secciones si el navegador no soporta IntersectionObserver
        sections.forEach(section => section.classList.add("visible"));
    }

    // --- Manejo del formulario: mostrar datos en la consola ---
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // evita recargar la página
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log('Formulario enviado:', data);

            // mensaje opcional
            mostrarMensaje();


        });
    }
});