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

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !mensaje) {
        alert("Por favor completa todos los campos.");
        return;
    }

    const numeroWhatsApp = "5582625110";

    const texto = 
        "Hola Yanet, mi nombre es " + nombre + 
        ". Mi correo es " + correo + 
        ".%0A%0A" +
        mensaje;

    const url = "https://wa.me/" + numeroWhatsApp + "?text=" + texto;

    window.open(url, "_blank");
}