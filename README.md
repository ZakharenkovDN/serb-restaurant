# Веб-приложение по доставке сербской кухни

## Описание проекта

Данное веб-приложение предоставляет пользователям возможность заказать блюда сербской кухни с доставкой на дом. Приложение ориентировано на людей, интересующихся балканской кухней и желающих попробовать уникальные блюда, характерные для Сербии. Мы предлагаем широкий ассортимент традиционных сербских блюд, которые можно заказать онлайн через удобный интерфейс приложения. 

## Цели и задачи

- Удобство заказа: Пользователи могут заказывать еду с доставкой на дом, минимизируя время на приготовление пищи.
- Разнообразие: Возможность попробовать уникальные блюда сербской кухни.
- Качество: Мы гарантируем высокое качество и аутентичность приготовленных блюд, используя только свежие ингредиенты и традиционные рецепты.

## Функциональные возможности

### Для пользователей:
- Регистрация и авторизация: Пользователи могут войти в систему для оформления заказов.
- Просмотр меню: Пользователи могут просматривать доступные блюда, читать описание и смотреть фотографии.
- Оформление заказа: Возможность добавить блюда в корзину, выбрать адрес доставки.

### Для администраторов:
- Управление меню: Добавление, редактирование и удаление блюд из меню.
- Управление пользователями: Возможность блокировки, удаления или редактирования данных пользователей.
- Аналитика: Просмотр статистики по заказам и популярным блюдам.

### Для курьеров:
- Просмотр заказов на доставку: Курьеры могут видеть адрес доставки и сумму к оплате.

## Структура базы данных

Приложение использует базу данных для хранения информации о пользователях и заказах. Основные таблицы базы данных:

- Пользователи (USERS): Содержит данные о пользователях: email, пароль, дату создания, дату входа.
- Заказы (ORDERS): Содержит информацию о заказах пользователей: id пользователя, дату заказа, адрес доставки, сумму заказа.
- Позиции заказа (ORDER_ITEMS): Содержит информацию о заказанных позициях из меню: id блюда из меню, id заказа.
- Меню (MENU): Содержит данные о блюдах из меню: название блюда, его описание и цену.

## Как запустить проект

1. Клонируйте репозиторий:
       git clone [https://github.com/username/repository-name.git](https://github.com/ZakharenkovDN/serb-restaurant.git)
    
2. Добавьте необходимые зависимости, так как отсутствует папка node_modules
          cd serb-restaurant
          npm install
   
3. Запустите приложение:
       npm run serve
    
4. Перейдите в браузер и откройте приложение по адресу: [http://localhost:8080]

## Стек технологий

- Frontend: Vue.js, Vue Router, Vuex
- Backend: Node.js
- База данных: Firebase

### Описание используемых технологий:

- Vue.js: Фреймворк для разработки динамичных интерфейсов.
- Vue Router: Библиотека для маршрутизации, позволяющая легко переходить между страницами.
- Vuex: Менеджер состояния для централизованного управления состоянием приложения.
- Node.js: Среда и фреймворк для разработки серверной части приложения.
- Firebase: облачная база данных в реальном времени для хранения данных о пользователях, заказах и других сущностях.

## User-flow макет:

1. Пользователь регистрируется на главной странице, если аккаунт отсутствует, или авторизуется в имеющемся аккаунте.
2. На странице меню пользователь выбирает блюда для заказа и добавляет их в корзину.
3. На странице корзины пользователь удаляет ненужные блюда и оформляет заказ.

## Структура проекта:
> src 
       >> assets
       >> components
              >>> AuthForm.vue
       >> router
              >>> index.js
       >> store
              >>> index.js 
       >> views
              >>> Cart.vue
              >>> Home.vue
              >>> Menu.vue
              >>> OrderConfirmation.vue
       >> App.vue
       >> firebase.js
       >> main.js