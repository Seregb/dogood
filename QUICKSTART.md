# Быстрый старт Do Good

## Чеклист для запуска

- [ ] Node.js установлен (проверка: `node --version`)
- [ ] PostgreSQL установлен и запущен
- [ ] База данных `dogood_db` создана
- [ ] Зависимости сервера установлены (`cd server && npm install`)
- [ ] Зависимости клиента установлены (`cd client && npm install`)
- [ ] Файл `server/.env` создан и заполнен
- [ ] Миграции выполнены (`cd server && npx sequelize-cli db:migrate`)
- [ ] Сиды выполнены (`cd server && npx sequelize-cli db:seed:all`)
- [ ] Сервер запущен в первом терминале (`cd server && npm start`)
- [ ] Клиент запущен во втором терминале (`cd client && npm start`)

## Команды по порядку

```bash
# 1. Установка зависимостей
cd server
npm install
cd ../client
npm install
cd ..

# 2. Создание .env файла
cd server
# Windows:
New-Item .env -ItemType File
# macOS/Linux:
# touch .env

# 3. Заполните server/.env:
# PORT=3001
# DB_USER=postgres
# DB_PASSWORD=ваш_пароль
# DB_NAME=dogood_db
# DB_HOST=localhost
# DB_PORT=5432
# COOKIE_SECRET=случайная_строка_минимум_32_символа
# COOKIE_NAME=dogood_session

# 4. Создайте БД в PostgreSQL (через pgAdmin или psql):
# CREATE DATABASE dogood_db;

# 5. Миграции и сиды
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
cd ..

# 6. Запуск (два терминала)
# Терминал 1:
cd server
npm start

# Терминал 2:
cd client
npm start
```

## Результат

- Сервер: http://localhost:3001
- Клиент: http://localhost:3000

## Если что-то пошло не так

Смотрите подробные инструкции в [README.md](README.md)