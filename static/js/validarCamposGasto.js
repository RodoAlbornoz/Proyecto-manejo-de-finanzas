

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    const fecha = document.getElementById("fecha");
    const errorFecha = document.querySelector("span.error-fecha");

    const categoria = document.getElementById("categoria");
    const errorCategoria = document.querySelector("span.error-categoria");

    const monto = document.getElementById("monto");
    const errorMonto = document.querySelector("span.error-monto");

    const concepto = document.getElementById("concepto");
    const errorConcepto = document.querySelector("span.error-concepto");

    form.addEventListener("submit", (e) => {
        if (!fecha.value) {
            errorFecha.innerHTML = "La fecha es obligatoria";
            e.preventDefault();
        } 
        
        if (!categoria.value) {
            errorCategoria.innerHTML = "La categoria es obligatoria";
            e.preventDefault();
        } else if (categoria.value.length <= 3) {
            errorCategoria.innerHTML = "El nombre de la categoria es muy corta";
            e.preventDefault();
        }
        
        if (!monto.value) {
            errorMonto.innerHTML = "El monto es obligatorio";
            e.preventDefault();
        } else if (monto.value < 0) {
            errorMonto.innerHTML = "El monto no puede ser negativo";
            e.preventDefault();
        }
        
        if (!concepto.value) {
            errorConcepto.innerHTML = "El concepto es obligatorio";
            e.preventDefault();
        } else if (concepto.value.length <= 3) {
            errorConcepto.innerHTML = "El nombre del concepto es muy corto";
            e.preventDefault();
        }
    });
})