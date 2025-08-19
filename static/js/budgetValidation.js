document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    const showError = (field, errorText) => {
        field.classList.add("error");
        const errorElement = document.createElement("small");
        errorElement.classList.add("error-text");
        errorElement.innerText = errorText;
        field.closest(".form").appendChild(errorElement);
    }

    const handleFormData = (e) => {
        e.preventDefault();

        const budgetName = document.getElementById("budget"); 

        document.querySelectorAll(".form .error").forEach(field => field.classList.remove("error"));
        document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

        if (!budgetName.value) {
            showError(budgetName, "El nombre del presupuesto es requerido");
        } else if (budgetName.value.length <= 3) {
            showError(budgetName, "El nombre del presupuesto es muy corto");
        }

        const errorInputs = document.querySelectorAll(".form .error");
        if (errorInputs.length > 0) return;

        form.submit();
    }

    form.addEventListener("submit", handleFormData);
})