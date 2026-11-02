# Букет Молдавии — Astro 2.0

Адаптивный сайт перенесён на Astro с сохранением дизайна и клиентской функциональности Foundation v2. Визуальный слой, тексты, изображения и интерактивное меню взяты из этой ветки без редизайна.

## Локальная разработка

Требуется Node.js 22.23.4 или новее.

```bash
npm install
npm run dev
```

Для production-сборки:

```bash
npm run build
npm run preview
```

Astro генерирует статический сайт в каталоге `dist/`. Серверный адаптер не требуется.

## Cloudflare Pages

Для отдельной Pages-публикации подключить репозиторий `CEOga/buket-moldavii-site`, production branch `CEOga-patch-1`, root directory `/`, build command `npm run build` и build output directory `dist`. Установить переменную окружения `NODE_VERSION=22.23.4`.

Сайт на основной ветке `main` и существующая Pages-публикация не затрагиваются.
