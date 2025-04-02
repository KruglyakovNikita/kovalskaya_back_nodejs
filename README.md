# Kovalskaya Back NodeJS

Простой проект на Node.js с использованием Express, Sequelize и PostgreSQL.

## Требования

- **Node.js** (рекомендуемая версия >= 14)
- **PostgreSQL** (установленный и запущенный)
- **NPM**

## Установка

1. Склонировать репозиторий

2. Установить зависимости:
   ```bash
   npm i

3. Создать .env:
   ```bash
   Пример .env
   DB_HOST = localhost
   DB_USER =postgres
   DB_PASS =1111
   DB_NAME =your_db_name
   DB_PORT =5432
   
   PORT=5000
   LOG_FORMAT=dev

4. и запустить проект
   ```bash  
   npm run dev 
   or
   или npm run start

4. Открыть второй терминал и запустить скрипт для создания 1к запросов
   ```bash
   npm run 1k:request
