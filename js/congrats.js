document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Останавливаем отправку формы

    let isValid = true;

    // Проверяем поле firstName
    const firstName = document.getElementById("firstName");
    const firstNameError = document.getElementById("firstName-error");
    if (!firstName.value.trim()) {
        isValid = false;
        firstNameError.classList.add("show");
    } else {
        firstNameError.classList.remove("show");
    }

    // Проверяем поле lastName
    const lastName = document.getElementById("lastName");
    const lastNameError = document.getElementById("lastName-error");
    if (!lastName.value.trim()) {
        isValid = false;
        lastNameError.classList.add("show");
    } else {
        lastNameError.classList.remove("show");
    }

    // Проверяем поле nationality
    const nationality = document.getElementById("nationality");
    const nationalityError = document.getElementById("nationality-error");
    if (!nationality.value.trim()) {
        isValid = false;
        nationalityError.classList.add("show");
    } else {
        nationalityError.classList.remove("show");
    }

    // Проверяем поле card-holder
    const cardHolder = document.getElementById("card-holder");
    const cardHolderError = document.getElementById("card-holder-error");
    if (!cardHolder.value.trim()) {
        isValid = false;
        cardHolderError.classList.add("show");
    } else {
        cardHolderError.classList.remove("show");
    }

    // Проверяем поле card-number
    const cardNumber = document.getElementById("card-number");
    const cardNumberError = document.getElementById("card-number-error");
    if (!cardNumber.value.trim() || cardNumber.value.length !== 16) {
        isValid = false;
        cardNumberError.classList.add("show");
    } else {
        cardNumberError.classList.remove("show");
    }

    // Проверяем поле exp-month и exp-year
    const expMonth = document.getElementById("exp-month");
    const expYear = document.getElementById("exp-year");
    const expDateError = document.getElementById("exp-date-error");
    if (!expMonth.value.trim() || !expYear.value.trim()) {
        isValid = false;
        expDateError.classList.add("show");
    } else {
        expDateError.classList.remove("show");
    }

    // Проверяем поле cvv
    const cvv = document.getElementById("cvv");
    const cvvError = document.getElementById("cvv-error");
    if (!cvv.value.trim() || cvv.value.length !== 3) {
        isValid = false;
        cvvError.classList.add("show");
    } else {
        cvvError.classList.remove("show");
    }

    // Если форма валидна, показываем сообщение
    if (isValid) {
        alert("Ваша поездка забронирована!");
        // Дополнительно можно сбросить форму, если нужно
        document.getElementById("payment-form").reset();
    }
});
