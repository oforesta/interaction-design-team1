document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const nationality = document.getElementById('nationality').value;
    const gender = document.getElementById('gender').value;

    if (!firstName || !lastName || !nationality || !gender) {
        document.getElementById('error-message').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'none';

        alert("Booking submitted successfully!");

        // Перенаправление на страницу оплаты
        window.location.href = 'payment.html';
    }
});

function goBack() {
    const form = document.getElementById('bookingForm');
    if (form) {
        form.reset();
    }
    window.history.back();
}
