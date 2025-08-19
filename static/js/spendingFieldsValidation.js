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

        const date = document.getElementById("date");
        const category = document.getElementById("category");
        const amount = document.getElementById("amount");
        const concept = document.getElementById("concept");

        document.querySelectorAll(".form .error").forEach(field => field.classList.remove("error"));
        document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

        if (!date.value) {
            showError(date, "La fecha es obligatoria");
        } 

        if (!category.value) {
            showError(category, "La categoria es obligatoria");
        } else if (category.value.length <= 3) {
            showError(category, "El nombre de la categoria es muy corta");
        } 

        if (!amount.value) {
            showError(amount, "El monto es obligatorio");
        } else if (amount.value < 0) {
            showError(amount, "El monto no puede ser negativo");
        } 

        if (!concept.value) {
            showError(concept, "El concepto es obligatorio");
        } else if (concept.value.length <= 3) {
            showError(concept, "El nombre del concepto es muy corto");
        } 

        const errorInputs = document.querySelectorAll(".form .error");
        if (errorInputs.length > 0) return;

        form.submit();
    }

    form.addEventListener("submit", handleFormData);
})