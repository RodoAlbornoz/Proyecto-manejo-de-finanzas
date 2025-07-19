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

        const fecha = document.getElementById("fecha");
        const categoria = document.getElementById("categoria");
        const monto = document.getElementById("monto");
        const concepto = document.getElementById("concepto");

        document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
        document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

        if (!fecha.value) {
            mostrarError(fecha, "La fecha es obligatoria");
        } 

        if (!categoria.value) {
            mostrarError(categoria, "La categoria es obligatoria");
        } else if (categoria.value.length <= 3) {
            mostrarError(categoria, "El nombre de la categoria es muy corta");
        } 

        if (!monto.value) {
            mostrarError(monto, "El monto es obligatorio");
        } else if (monto.value < 0) {
            mostrarError(monto, "El monto no puede ser negativo");
        } 

        if (!concepto.value) {
            mostrarError(concepto, "El concepto es obligatorio");
        } else if (concepto.value.length <= 3) {
            mostrarError(concepto, "El nombre del concepto es muy corto");
        } 

        const errorInputs = document.querySelectorAll(".form-group .error");
        if (errorInputs.length > 0) return;

        form.submit();
    }

    form.addEventListener("submit", manejarDataFormulario);
})