# Конкурс лучших брендов гастроиндустрии

Лендинг конкурса лучших брендов гастроиндустрии Санкт-Петербурга на React и Vite.

## Требования

- Node.js 18 или новее
- npm

## Установка

```bash
npm install
```

## Запуск в режиме разработки

```bash
npm run dev
```

После запуска приложение будет доступно по адресу, который выведет Vite в терминале, обычно `http://localhost:5173`.

## Production-сборка

```bash
npm run build
```

Собранные файлы будут помещены в каталог `dist`.

## Локальный просмотр production-сборки

Сначала выполните сборку, затем запустите preview-сервер:

```bash
npm run build
npm run preview
```

## Тесты

Запуск всех тестов один раз:

```bash
npm test
```

Тесты используют Vitest, jsdom и Testing Library. Сейчас проверяются хуки `useCountdown` и `useApplyModal`.

Для запуска Vitest в watch-режиме:

```bash
npx vitest
```

## Проверка кода

Запуск ESLint:

```bash
npm run lint
```

## Continuous Integration

GitHub Actions автоматически запускает установку зависимостей, ESLint, тесты и production-сборку для каждого push и pull request.
