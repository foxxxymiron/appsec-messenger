document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const usernameInput = document.getElementById('username');   // ссылка на элемент, а не значение
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirmPassword');
    const errorBox = document.getElementById('errorMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        errorBox.textContent = '';

        const username = usernameInput.value.trim();   // читаем ЗДЕСЬ
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirm = confirmInput.value;

        if (username.length < 3) {
            errorBox.textContent = 'Логин должен быть не менее 3 символов';
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            errorBox.textContent = 'Введите корректный email';
            return;
        }

        if (password.length < 6) {
            errorBox.textContent = 'Пароль должен быть не менее 6 символов';
            return;
        }

        if (password !== confirm) {
            errorBox.textContent = 'Пароли не совпадают';
            return;
        }

        localStorage.setItem('username', username);
        window.location.href = 'chat.html';
    });
});