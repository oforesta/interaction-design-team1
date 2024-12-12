document.addEventListener('DOMContentLoaded', () => {
    const cardNumberInput = document.getElementById('card-number');
    const cardCVVInput = document.getElementById('cvv');
    const form = document.getElementById('payment-form');
    const cardNumberError = document.getElementById('card-number-error');
    const cardCVVError = document.getElementById('cvv-error');
    const confirmationModal = document.getElementById('confirmation-modal');
    const closeModalButton = document.getElementById('close-modal');

    cardNumberInput.addEventListener('input', () => {
        let input = cardNumberInput.value.replace(/\D/g, '');
        const formattedInput = input.match(/.{1,4}/g)?.join(' ') || '';
        cardNumberInput.value = formattedInput;
        clearError(cardNumberInput, cardNumberError);
    });

    cardCVVInput.addEventListener('input', () => {
        let input = cardCVVInput.value.replace(/\D/g, '');
        cardCVVInput.value = input;
        clearError(cardCVVInput, cardCVVError);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const cardNumber = cardNumberInput.value.replace(/\s/g, '');
        const cardCVV = cardCVVInput.value.replace(/\s/g, '');

        let isFormValid = true;

        if (cardNumber.length !== 16) {
            showError(cardNumberInput, cardNumberError, "Card number must be 16 digits.");
            isFormValid = false;
        } else if (!/^\d{16}$/.test(cardNumber)) {
            showError(cardNumberInput, cardNumberError, "Card number must contain only digits.");
            isFormValid = false;
        }

        if (cardCVV.length !== 3) {
            showError(cardCVVInput, cardCVVError, "Card CVV must be 3 digits.");
            isFormValid = false;
        } else if (!/^\d{3}$/.test(cardCVV)) {
            showError(cardCVVInput, cardCVVError, "Card CVV must contain only digits.");
            isFormValid = false;
        }

        if (isFormValid) {
            confirmationModal.style.display = "flex";
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        } else {
            console.log('Form is not valid');
            alert('Please fill all fields correctly');
        }
    });

    closeModalButton.addEventListener('click', () => {
        confirmationModal.style.display = "none";
        form.reset();
    });

    function showError(inputElement, errorElement, errorMessage) {
        errorElement.textContent = errorMessage;
        errorElement.style.display = "block";
        inputElement.classList.add('invalid');
    }

    function clearError(inputElement, errorElement) {
        errorElement.style.display = "none";
        inputElement.classList.remove('invalid');
    }

    
});
