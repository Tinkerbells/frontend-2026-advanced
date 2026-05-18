# Step 1: Лендинг онлайн-магазина кроссовок

Базовая лендинг-страница для онлайн-магазина кроссовок. Это первый этап курса, где мы создаём адаптивную вёрстку на чистом HTML, CSS и JavaScript.

## Дизайн

Макет проекта в Figma:
- **Figma Design:** [Sneaker City — A concept for a foot wear store](https://www.figma.com/design/2WHjyjHaG8rscxBnR470PA/Sneaker-City--A-concept-for-a-foot-wear-store--Community-?node-id=0-1&t=mcAzFHdbIxo27mAf-1)

## Туториал по работе с Figma

Если вы впервые работаете с Figma, рекомендуем посмотреть туториал:
- **YouTube:** [Figma для фронтендера/верстальщика](https://www.youtube.com/watch?v=qyk7N40uiQw)

---

## Структура проекта

```
step-1/
├── index.html          # Главная страница (лендинг)
├── index.js            # JavaScript логика (интерактивность)
├── style.css           # Стили страницы
├── server.js           # Node.js сервер для разработки
├── watcher.js          # Watcher с авто-перезапуском сервера
├── package.json        # Зависимости и скрипты
└── README.md           # Этот файл
```

---

## Preview

![Landing Preview](../assets/preview.png)

---

## Упражнения по HTML и CSS

Перед началом работы рекомендуем пройти интерактивные упражнения для закрепления навыков вёрстки:

### Flexbox
- [Flexbox Froggy](https://flexboxfroggy.com/) — игра для изучения CSS Flexbox

### CSS Grid
- [Grid Garden](https://cssgridgarden.com/) — игра для изучения CSS Grid

### HTML
- [HTML Academy — Блог по HTML](https://htmlacademy.ru/blog/html)
- [HTML Academy — Коротко о главном в HTML](https://htmlacademy.ru/blog/html/short-4)

### CSS
- [HTML Academy — Блог по CSS](https://htmlacademy.ru/blog/css)

---

## Установка

Убедитесь, что у вас установлены **Node.js** и **npm**.

```bash
node -v   # проверить версию Node.js
npm -v    # проверить версию npm
```

Если не установлены — следуйте инструкциям в корневом `README.md` репозитория.

---

## Команды

Все команды выполняются из папки `step-1`:

```bash
cd step-1
```

### Запуск сервера

```bash
npm start
```

Сервер запустится на `http://localhost:3000`.

### Запуск сервера с отслеживанием изменений (watch)

```bash
npm run watch
```

Watcher следит за изменениями в файлах `index.html`, `index.js`, `style.css` и выводит уведомления в консоль. Сервер перезапускается автоматически.

---

## Технологии

- **HTML5** — семантическая вёрстка
- **CSS3** — адаптивные стили, Grid, Flexbox, анимации
- **JavaScript (ES6+)** — интерактивность без фреймворков
- **Node.js** — простой статический сервер для разработки

---

## Функциональность

- Адаптивная вёрстка (desktop + mobile)
- Плавная прокрутка к секциям
- Анимации карточек при скролле
- Интерактивная форма обратной связи
- CTA-кнопка с обработчиком событий

---

## Следующий этап

В `step-2` мы добавим:
- Страницу каталога товаров
- Страницу карточки товара
- Корзину покупок
- Работу с LocalStorage
- JS модули и шаблонизацию
