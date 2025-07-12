

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nombrePresupuesto = document.getElementById("nombre-presupuesto");
    const errorNombrePresupuesto = document.querySelector("span.error");

    form.addEventListener("submit", (e) => {
        if (!nombrePresupuesto.value) {
            errorNombrePresupuesto.innerHTML = "El nombre del presupuesto es requerido";
            e.preventDefault();
        } else if (nombrePresupuesto.value.length <= 3) {
            errorNombrePresupuesto.innerHTML = "El nombre del presupuesto es muy corto";
            e.preventDefault();
        }
    });
})