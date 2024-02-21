// Подключаем модуль nodemailer
var nodemailer = require('nodemailer');

// Создаем транспортер nodemailer для отправки писем.
// В этом примере используется Gmail в качестве почтового сервиса.
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bekuzakovd@gmail.com', // ваш адрес электронной почты
        pass: 'тут без пароля для гита' // ваш пароль (внимание: в реальных приложениях используйте безопасное хранение паролей!)
    }
});

// Определяем параметры отправляемого письма
var mailOptions = {
    from: 'bekuzakovd@gmail.com', // адрес отправителя
    to: 'doctordentkaz@gmail.com', // адрес получателя
    subject: 'Sending Email using Node.js', // тема письма
    text: 'That was easy!' // текст письма
};

// Отправляем письмо с использованием транспортера.
// Обработчик асинхронно получает результат отправки.
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error); // В случае ошибки выводим информацию об ошибке
    } else {
        console.log('Email sent: ' + info.response); // В случае успеха выводим подтверждение
    }
});
