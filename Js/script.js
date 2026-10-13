function mostrarERP(tipo) {

    const imagen = document.getElementById("erp-image");
    const contenedor = document.getElementById("erp-image-container");

    if (tipo === "keyUser") {

        imagen.src = "Img/KeyUser.jpeg";
        imagen.alt = "Experiencia como Key User en Oracle Cloud";

    } else if (tipo === "agenteCambio") {

        imagen.src = "Img/AgenteCambio.jpeg";
        imagen.alt = "Experiencia como Agente de Cambio";

    }

    contenedor.style.display = "block";
}

function mostrarRecomendacion(empresa) {

    const recomendacion = document.getElementById(
        "recomendacion-" + empresa
    );

    const tarjeta = recomendacion.previousElementSibling;

    recomendacion.classList.toggle("active");
    tarjeta.classList.toggle("active");
}
function cerrarRecomendacion() {
    document.querySelectorAll('.recomendacion-container.active').forEach(function(carta) {
        carta.classList.remove('active');
    });
}

function enviarWhatsApp() {

    const formulario = document.getElementById("contactoForm");

    if (!formulario.reportValidity()) {
        return;
    }

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Reemplaza por tu número de WhatsApp con código de país.
    const telefono = "52TUNUMERO";

    let texto = `Hola, soy ${nombre}.\n\n`;

    if (correo) {
        texto += `Mi correo electrónico es: ${correo}\n\n`;
    }

    texto += `Mensaje: ${mensaje}`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank", "noopener,noreferrer");
}
