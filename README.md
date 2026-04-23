# Do Good

Платформа для обмена товарами и добрых дел.

## Быстрый старт

Если у вас уже установлены Node.js и PostgreSQL:

```bash
# 1. Установите зависимости для сервера
cd server
npm install
cd ..

# 2. Установите зависимости для клиента
cd client
npm install
cd ..

# 3. Создайте базу данных dogood_db в PostgreSQL

# 4. Создайте файл server/.env с настройками БД (см. ниже)

# 5. Выполните миграции из папки server
cd server
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
cd ..

# 6. Запустите сервер (в первом терминале)
cd server
npm start

# 7. Запустите клиент (во втором терминале)
cd client
npm start
```

## Технологии

### Frontend
- React 17
- Redux (с Redux Saga и Redux Thunk)
- React Router v6
- Yandex Maps API
- Bootstrap 5 / Reactstrap
- Axios

### Backend
- Node.js
- Express
- PostgreSQL
- Sequelize ORM
- Express Session

## Требования

- Node.js (версия 14 или выше)
- PostgreSQL (версия 12 или выше)
- npm

## Подробная инструкция по установке

### 1. Клонирование репозитория

```bash
git clone <repository-url>
cd do-good
```

### 2. Установка зависимостей

**Важно:** Нужно установить зависимости отдельно для сервера и клиента.

```bash
# Установка зависимостей для сервера
cd server
npm install
cd ..

# Установка зависимостей для клиента
cd client
npm install
cd ..
```

### 3. Установка PostgreSQL (если не установлен)

#### Windows:

1. Скачайте PostgreSQL с официального сайта: https://www.postgresql.org/download/windows/
2. Запустите установщик и следуйте инструкциям
3. **Важно:** Запомните пароль для пользователя `postgres`
4. После установки PostgreSQL будет доступен через pgAdmin или командную строку

#### macOS:

```bash
brew install postgresql
brew services start postgresql
```

#### Linux (Ubuntu/Debian):

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

### 4. Создание базы данных

#### Способ 1: Через pgAdmin (рекомендуется для Windows)

1. Откройте pgAdmin (установлен вместе с PostgreSQL)
2. Подключитесь к серверу PostgreSQL (введите пароль)
3. Правой кнопкой на "Databases" → "Create" → "Database"
4. Введите имя: `dogood_db`
5. Нажмите "Save"

#### Способ 2: Через командную строку

**Windows:**
```powershell
# Найдите путь к psql.exe (обычно C:\Program Files\PostgreSQL\<version>\bin)
cd "C:\Program Files\PostgreSQL\15\bin"

# Подключитесь к PostgreSQL
.\psql -U postgres

# Введите пароль, затем выполните:
CREATE DATABASE dogood_db;
\q
```

**macOS/Linux:**
```bash
psql -U postgres
CREATE DATABASE dogood_db;
\q
```

### 5. Настройка переменных окружения

1. Создайте файл `.env` в папке `server`:

```bash
cd server
# Windows PowerShell:
New-Item .env -ItemType File

# macOS/Linux:
touch .env
```

2. Откройте файл `server/.env` в любом текстовом редакторе и добавьте:

```env
PORT=3001
DB_USER=postgres
DB_PASSWORD=ваш_пароль_от_postgres
DB_NAME=dogood_db
DB_HOST=localhost
DB_PORT=5432
COOKIE_SECRET=любая_случайная_строка_минимум_32_символа
COOKIE_NAME=dogood_session
```

**Важно:** 
- Замените `ваш_пароль_от_postgres` на пароль, который вы указали при установке PostgreSQL
- Для `COOKIE_SECRET` используйте любую длинную случайную строку

### 6. Выполнение миграций и заполнение БД

Из папки `server` выполните:

```bash
cd server
# Создание базы данных (если не создали через pgAdmin)
npx sequelize-cli db:create

# Выполнение миграций
npx sequelize-cli db:migrate

# Заполнение тестовыми данными
npx sequelize-cli db:seed:all
```

Это создаст таблицы в базе данных и заполнит их тестовыми данными.

### 7. Запуск проекта

**Вам нужно открыть ДВА терминала:**

#### Терминал 1 - Запуск сервера:

```bash
cd server
npm start
```

Сервер запустится на http://localhost:3001

#### Терминал 2 - Запуск клиента:

```bash
cd client
npm start
```

Клиент автоматически откроется в браузере на http://localhost:3000

## Структура проекта

```
do-good/
├── client/              # React приложение
│   ├── public/         # Статические файлы
│   ├── src/
│   │   ├── components/ # React компоненты
│   │   ├── pages/      # Страницы приложения
│   │   ├── redux/      # Redux store, actions, reducers, sagas
│   │   └── App.js      # Главный компонент
│   └── package.json
├── server/             # Express сервер
│   ├── config/        # Конфигурация БД
│   ├── db/
│   │   ├── migrations/ # Миграции БД
│   │   ├── models/     # Sequelize модели
│   │   └── seeders/    # Начальные данные
│   ├── routes/        # API роуты
│   ├── middlewares/   # Express middleware
│   ├── public/        # Загруженные файлы
│   ├── app.js         # Точка входа сервера
│   └── package.json
└── package.json       # Корневой package.json (для удобства)
```

## Возможные проблемы и решения

### Ошибка подключения к базе данных

**Проблема:** `ECONNREFUSED` или `password authentication failed`

**Решение:**
- Убедитесь, что PostgreSQL запущен
- Проверьте правильность пароля в файле `server/.env`
- Убедитесь, что база данных `dogood_db` создана
- Проверьте, что порт 5432 не занят

### Порт уже занят

**Проблема:** `Port 3000 is already in use` или `Port 3001 is already in use`

**Решение:**
- Закройте другие приложения, использующие эти порты
- Или измените порт в `server/.env` (для сервера)
- Для клиента можно запустить на другом порту: `PORT=3002 npm start`

### Ошибки при миграциях

**Проблема:** Ошибки при выполнении `npx sequelize-cli db:migrate`

**Решение:**
- Убедитесь, что вы находитесь в папке `server`
- Проверьте, что файл `.env` создан и заполнен правильно
- Убедитесь, что база данных создана

### Клиент не может подключиться к серверу

**Проблема:** Ошибки API запросов в браузере

**Решение:**
- Убедитесь, что сервер запущен (терминал 1)
- Проверьте, что в `client/package.json` указан правильный proxy:
  ```json
  "proxy": "http://localhost:3001"
  ```

## Полезные команды

```bash
# Сброс базы данных (откат всех миграций)
cd server
npx sequelize-cli db:migrate:undo:all

# Повторное выполнение миграций
npx sequelize-cli db:migrate

# Повторное заполнение данными
npx sequelize-cli db:seed:all

# Создание новой миграции
npx sequelize-cli migration:generate --name migration-name

# Создание новой модели
npx sequelize-cli model:generate --name ModelName --attributes field1:string,field2:integer
```

## Лицензия

ISC