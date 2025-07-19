document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    const mostrarError = (campo, textoError) => {
        campo.classList.add("error");
        const elementoError = document.createElement("small");
        elementoError.classList.add("error-text");
        elementoError.innerText = textoError;
        campo.closest(".form-group").appendChild(elementoError);
    }

    const manejarDataFormulario = (e) => {
        e.preventDefault();

        const nombrePresupuesto = document.getElementById("presupuesto"); 

        document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
        document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

        if (!nombrePresupuesto.value) {
            mostrarError(nombrePresupuesto, "El nombre del presupuesto es requerido");
        } else if (nombrePresupuesto.value.length <= 3) {
            mostrarError(nombrePresupuesto, "El nombre del presupuesto es muy corto");
        }

        const errorInputs = document.querySelectorAll(".form-group .error");
        if (errorInputs.length > 0) return;

        form.submit();
    }

    form.addEventListener("submit", manejarDataFormulario);
})