document.addEventListener('DOMContentLoaded', () => {
    // Вкладки
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Удаление аккаунта
    const deleteAccountBtn = document.querySelector('.delete-account-btn');
    if (deleteAccountBtn) {
        deleteAccountBtn.addEventListener('click', () => {
            if (confirm('Are you sure? This action cannot be undone!')) {
                console.log('Account Deleted');
                alert('Your account has been deleted');
                window.location.href = 'index.html';
            }
        });
    }

    // Валидация данных карты
    const paymentForm = document.querySelector('.payment-form');

    if (paymentForm) {
        const cardNumberInput = document.getElementById('card-number');
        const cardExpiryInput = document.getElementById('card-expiry');
        const cvvInput = document.getElementById('cvv');
        const cardNumberError = document.getElementById('card-number-error');
        const cvvError = document.getElementById('cvc-error');
        const expiryDateError = document.getElementById('expiry-date-error');

        // Форматирование номера карты
        cardNumberInput.addEventListener('input', () => {
            let input = cardNumberInput.value.replace(/\D/g, ''); // Убираем все нецифровые символы
            const formattedInput = input.match(/.{1,4}/g)?.join(' ') || ''; // Форматируем по 4 цифры
            cardNumberInput.value = formattedInput; // Обновляем поле ввода
        });

        // Валидация при отправке формы
        paymentForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const cardNumber = cardNumberInput.value.replace(/\s/g, ''); // Убираем пробелы
            const cardExpiry = cardExpiryInput.value;
            const cardCVV = cvvInput.value.replace(/\s/g, ''); // Убираем пробелы

            let valid = true;

            // Проверка номера карты
            if (cardNumber.length !== 16 || !/^\d{16}$/.test(cardNumber)) {
                cardNumberError.textContent = "Card number must be 16 digits and contain only digits.";
                cardNumberError.style.display = "block";
                cardNumberInput.classList.add('invalid');
                valid = false;
            } else {
                cardNumberError.style.display = "none";
                cardNumberInput.classList.remove('invalid');
            }

            // Проверка CVV
            if (cardCVV.length !== 3 || !/^\d{3}$/.test(cardCVV)) {
                cvvError.textContent = "Card CVV must be 3 digits.";
                cvvError.style.display = "block";
                cvvInput.classList.add('invalid');
                valid = false;
            } else {
                cvvError.style.display = "none";
                cvvInput.classList.remove('invalid');
            }

            // Проверка срока действия карты
            if (!cardExpiry) {
                expiryDateError.textContent = "Expiry date is required.";
                expiryDateError.style.display = "block";
                cardExpiryInput.classList.add('invalid');
                valid = false;
            } else {
                expiryDateError.style.display = "none";
                cardExpiryInput.classList.remove('invalid');
            }

            // Если все поля корректны, выводим информацию
            if (valid) {
                console.log('Information:', { cardNumber, cardExpiry, cardCVV });
                alert('Card details saved successfully!');
                paymentForm.reset(); // Сбрасываем форму
            } else {
                alert('Please correct the errors in the form');
            }
        });
    }
});
