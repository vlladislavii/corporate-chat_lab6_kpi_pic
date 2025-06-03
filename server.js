const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public')); // Віддає index.html

// дані
const fuelStats = {
  '395454021343': {
    name: 'Іван Петренко',
    result: 'Перевитрата: 12.4 л. Штраф: 744 грн.'
  },
  '284920137652': {
    name: 'Олег Коваленко',
    result: 'Економія: 6.2 л. Молодець!'
  },
  '509283746198': {
    name: 'Марина Дяченко',
    result: 'Перевитрата: 9.1 л. Штраф: 546 грн.'
  },
  '143829405671': {
    name: 'Андрій Шевчук',
    result: 'Економія: 3.7 л. Добра робота!'
  },
  '837261594028': {
    name: 'Юрій Мельник',
    result: 'Перевитрата: 14.0 л. Штраф: 840 грн.'
  },
  '720193847560': {
    name: 'Сергій Бондар',
    result: 'Економія: 1.8 л. В межах норми.'
  },
  '690127485390': {
    name: 'Тетяна Іванова',
    result: 'Перевитрата: 5.6 л. Штраф: 336 грн.'
  },
  '319847206598': {
    name: 'Павло Гончар',
    result: 'Економія: 7.4 л. Відмінно!'
  },
  '491028374561': {
    name: 'Людмила Савчук',
    result: 'Перевитрата: 11.2 л. Штраф: 672 грн.'
  },
  '258390174602': {
    name: 'Олена Марченко',
    result: 'Економія: 4.5 л. Норма не перевищена.'
  }
};

// Обробка WebSocket-з’єднання
io.on('connection', (socket) => {
  console.log('Клієнт підключився');

  socket.on('driver ipn', (ipn) => {
    const data = fuelStats[ipn];
    if (data) {
      const message = `👤 ${data.name}\n📊 ${data.result}`;
      socket.emit('fuel result', message);
    } else {
      socket.emit('fuel result', 'Невідомий ІПН. Дані не знайдені.');
    }
  });
});

server.listen(3000, () => {
  console.log('Сервер працює на http://localhost:3000');
});
