# Корпоративний чат: контроль витрат палива

## Опис

Це міні-проєкт для лабораторної роботи №6 з курсу "Проєктування інформаційних систем", у якому реалізовано **корпоративний чат** з використанням **WebSocket**-технологій (Socket.IO).

Водій вводить свій **ІПН**, і система у відповідь надсилає повідомлення про **економію або перевитрату палива** за місяць, з іменем водія.

---

## Технології

- Node.js  
- Express.js  
- Socket.IO  
- HTML5 + Bootstrap 5  

---

## Структура проєкту

```
corporate-chat/
├── public/
│   └── index.html              # Клієнтська частина
├── server.js                   # Сервер на Node.js з WebSocket (Socket.IO)
└── package.json                # Список залежностей
```

---

## Запуск проєкту

1. Встанови залежності:
   ```bash
   npm install
   ```

2. Запусти сервер:
   ```bash
   node server.js
   ```

3. Перейди в браузері:
   ```
   http://localhost:3000
   ```

---

## Сценарій використання

1. Водій відкриває веб-сторінку.
2. Вводить свій ІПН (12 цифр).
3. Отримує повідомлення:
   - Ім’я водія
   - Економія або перевитрата палива за місяць

---

## Приклади ІПН

| ІПН            | Ім’я               | Результат                            |
|----------------|--------------------|--------------------------------------|
| 395454021343   | Іван Петренко      | Перевитрата: 12.4 л. Штраф: 744 грн. |
| 284920137652   | Олег Коваленко     | Економія: 6.2 л. Молодець!           |
| 509283746198   | Марина Дяченко     | Перевитрата: 9.1 л. Штраф: 546 грн.  |
| 143829405671   | Андрій Шевчук      | Економія: 3.7 л. Добра робота!       |
| 837261594028   | Юрій Мельник       | Перевитрата: 14.0 л. Штраф: 840 грн. |
