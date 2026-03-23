document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const generalError = document.getElementById('generalError');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        emailError.style.display = 'none';
        passwordError.style.display = 'none';
        generalError.textContent = '';

        let isValid = true;

        if (!emailInput.value.trim()) {
            emailError.textContent = 'O campo de e-mail é obrigatório.';
            emailError.style.display = 'block';
            isValid = false;
        }

        if (!passwordInput.value.trim()) {
            passwordError.textContent = 'O campo de senha é obrigatório.';
            passwordError.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            window.location.href = 'index.html';
        } else {
            generalError.textContent = 'Por favor, corrija os erros antes de enviar.';
        }
    });

    emailInput.addEventListener('input', function() {
        emailError.style.display = 'none';
    });

    passwordInput.addEventListener('input', function() {
        passwordError.style.display = 'none';
    });
});