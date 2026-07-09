# Деплой сайта Юлии Собениной

Статический сайт на **Vite + React + TypeScript + Tailwind**. Весь код и медиа — в этой папке (`site/`). Это и есть то, что нужно залить в репозиторий.

## Что коммитить
Всё содержимое папки `site/`, КРОМЕ игнорируемого в `.gitignore` (`node_modules/`, `dist/`, `.impeccable/`, `.playwright-mcp/`). Медиа (фото, видео, отзывы) лежат в `public/media/` и **обязательно должны попасть в репозиторий** — они не игнорируются.

## Сборка
```bash
npm install
npm run build      # результат — статика в папке dist/
```
Сборка проверена, проходит без ошибок TypeScript. Итог ~115 КБ JS (gzip) + медиа.

## Варианты хостинга

### Вариант 1 — Vercel / Netlify (проще всего, авто-сборка из GitHub)
1. Залить `site/` в репозиторий GitHub.
2. В Vercel/Netlify → New Project → выбрать репозиторий.
3. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.
4. Deploy. Готово.

### Вариант 2 — свой VPS (nginx)
```bash
npm install && npm run build
# скопировать содержимое dist/ на сервер
```
nginx:
```
server {
  root /var/www/sobenina/dist;
  location / { try_files $uri /index.html; }
}
```

## После деплоя — заменить домен-заглушку
Сейчас в SEO стоит заглушка `sobenina-event.ru`. Когда будет реальный домен — заменить в:
- `index.html` (canonical, og:url, Schema.org)
- `public/sitemap.xml`
- `public/robots.txt`

## Контент
Все тексты/ссылки/контакты — в одном файле `src/content.ts`. Правится без изменения компонентов.
Реальные ссылки уже вставлены: Telegram @Sobenina_event, VK, Instagram. Город: Москва и область. Опыт: 10 лет.
Заявки/формы нет — клиенты пишут напрямую в Telegram.
