const formularioContacto = document.querySelector(".formulario-contacto");
const estadoEnvio = document.getElementById("estado-envio");
const botonOtraSugerencia = document.getElementById("otra-sugerencia");
const botonEnvio = formularioContacto.querySelector('button[type="submit"]');

botonOtraSugerencia.addEventListener("click", () => {
    formularioContacto.reset();
    formularioContacto.hidden = false;
    botonEnvio.disabled = false;
    estadoEnvio.hidden = true;
    estadoEnvio.classList.remove("error", "exito");
    botonOtraSugerencia.hidden = true;
    formularioContacto.querySelector('input[name="nombre"]').focus();
});

formularioContacto.addEventListener("submit", async (evento) => {
    evento.preventDefault();

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
        estadoEnvio.classList.add("exito");
        formularioContacto.hidden = true;
        botonOtraSugerencia.hidden = false;
    } catch (error) {
        estadoEnvio.classList.add("error");
        estadoEnvio.textContent = "No se pudo enviar la respuesta. Intentá nuevamente.";
    } finally {
        estadoEnvio.hidden = false;
        if (formularioContacto.hidden) {
            botonOtraSugerencia.focus();
        }
        botonEnvio.disabled = false;
        botonEnvio.textContent = textoOriginal;
    }
});
