# Gemini — Tauri client

Это собранная версия приложения из `gemini_fixed_v20.html`, завернутая в Tauri 2.

## Что внутри

- Чёрный Gemini-подобный интерфейс с glow при генерации.
- История чатов в localStorage.
- Выбор модели и загрузка `/v1/models`.
- OpenAI-compatible API: `/v1/chat/completions`.
- Anthropic Messages API: `/v1/messages`.
- Base URL, API Key и ручной выбор модели.
- Markdown, fenced code blocks и копирование кода.
- Фото/файлы как вложения.
- Просмотр изображений в lightbox.
- Исправленная мобильная логика клавиатуры/скролла из последней версии.
- Tauri HTTP plugin — запросы к API идут через Rust/reqwest, а не через обычный WebView `fetch`.

## Запуск

```bash
npm install
npm run tauri dev
```

## Android

Нужны Rust, Android Studio/SDK и Java/JDK, после чего:

```bash
npm install
npm run tauri android init
npm run tauri android dev
```

Для APK:

```bash
npm run tauri android build
```

## Важно про API

В настройках приложения укажи Base URL без завершающего `/v1` (например, `https://example.com`). Клиент сам обращается к `/v1/models` и нужному endpoint.

HTTP plugin специально разрешает `http://**` и `https://**`, потому что пользователь может указать любой OpenAI-compatible или Anthropic-compatible провайдер. Если нужен более строгий вариант, scope можно сузить до конкретного домена.
