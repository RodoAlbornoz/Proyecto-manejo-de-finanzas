

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nombrePresupuesto = document.getElementById("presupuesto");
    const errorPresupuesto = document.querySelector("span.error-presupuesto");

    form.addEventListener("submit", (e) => {
        if (!nombrePresupuesto.value) {
            errorPresupuesto.innerHTML = "El nombre del presupuesto es requerido";
            e.preventDefault();
        } else if (nombrePresupuesto.value.length <= 3) {
            errorPresupuesto.innerHTML = "El nombre del presupuesto es muy corto";
            e.preventDefault();
        }
    });
})