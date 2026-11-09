const formularioContacto = document.querySelector(".formulario-contacto");
const estadoEnvio = document.getElementById("estado-envio");

formularioContacto.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const botonEnvio = formularioContacto.querySelector('button[type="submit"]');
    const textoOriginal = botonEnvio.textContent;
    const endpoint = new URL(formularioContacto.action);
    endpoint.pathname = `/ajax${endpoint.pathname}`;

    botonEnvio.disabled = true;
    botonEnvio.textContent = "Enviando...";
    estadoEnvio.hidden = true;
    estadoEnvio.classList.remove("error");

    try {
        const respuesta = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(Object.fromEntries(new FormData(formularioContacto)))
        });
        const resultado = await respuesta.json();

        if (!respuesta.ok || (resultado.success !== true && resultado.success !== "true")) {
            throw new Error(resultado.message || "No se pudo enviar la respuesta.");
        }

        formularioContacto.reset();
        estadoEnvio.textContent = "Respuesta enviada.";
    } catch (error) {
        estadoEnvio.classList.add("error");
        estadoEnvio.textContent = "No se pudo enviar la respuesta. Intentá nuevamente.";
    } finally {
        estadoEnvio.hidden = false;
        botonEnvio.disabled = false;
        botonEnvio.textContent = textoOriginal;
    }
});
