# Букет Молдавии — сайт

Статическая адаптивная страница на HTML, CSS и JavaScript.

## Просмотр локально

Откройте `index.html` в браузере. Для локального HTTP-просмотра из этой папки можно выполнить:

```bash
python3 -m http.server 4173
```

Затем откройте `http://localhost:4173`.

## Публикация через GitHub и Cloudflare Pages

1. Создайте новый GitHub-репозиторий и загрузите в него содержимое этой папки. Корневой `index.html` должен находиться в корне репозитория.
2. В Cloudflare Dashboard откройте **Workers & Pages → Create application → Pages → Connect to Git**.
3. Подключите GitHub и выберите созданный репозиторий.
4. Для этой статической страницы оставьте команду сборки пустой, укажите каталог сборки `.` (корень репозитория) и не меняйте Root directory.
5. Нажмите **Save and Deploy**. Последующие изменения в выбранной production-ветке Cloudflare будет публиковать автоматически.

Репозиторий можно оставить приватным: публичный сайт будет размещаться на Cloudflare Pages.

Официальная инструкция: https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/
