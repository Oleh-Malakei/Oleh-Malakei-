const password = prompt("Введите пароль:")
const ADMIN_PASSWORD = "jqueryismyjam"

if (password === null) {
    message = "Отменено пользователем!"
} else if (password === ADMIN_PASSWORD) {
    message = "Добро пожаловать!"
} else {
    message = "Доступ запрещен, неверный пароль!"
}

alert(message)