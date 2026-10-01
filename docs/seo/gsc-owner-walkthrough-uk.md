# GSC — зроби зараз (крок 1 з 3)

Сайт уже готовий для індексації: `robots.txt` і `sitemap.xml` віддають **200** (перевірка 2026-10-01). Тобі лишається інтерфейс Google.

## Якщо властність уже підтверджена (ти додавав сайт ~тиждень тому)

Пропусти кроки 1–2 нижче. Перейди одразу до **A** і **B**.

## A. Подати sitemap (2 хв)

1. [Google Search Console](https://search.google.com/search-console) → обери ресурс `https://family-wealth.pro`
2. Меню зліва: **Індексування** → **Файли Sitemap** (Indexing → Sitemaps)
3. У полі «Додати новий файл Sitemap» введи: `sitemap.xml`
4. Натисни **Надіслати**
5. Очікуваний результат: статус **Успішно**, кілька десятків URL (зараз ~23+)

Повний URL для довідки: `https://family-wealth.pro/sitemap.xml`

## B. URL Inspection — головна (5 хв)

1. У верхньому рядку GSC встав: `https://family-wealth.pro/uk`
2. Enter
3. Подивись:
   - чи **проіндексовано**
   - **причина індексації**, якщо ні
   - **канонічна URL** (оголошена vs обрана Google)
4. Якщо є **Запросити індексацію** — натисни (після останніх змін на сайті це доречно)
5. Повтори для `https://family-wealth.pro/`
6. Запиши результати в [`gsc-homepage-inspection.md`](./gsc-homepage-inspection.md) (таблиці внизу файлу)

Додатково корисно перевірити:

- `https://family-wealth.pro/uk/anton-cherepkov-financial-advisor`
- `https://family-wealth.pro/uk/knowledge/how-to-choose-financial-advisor`

## C. Bing (опційно, 5 хв)

1. [Bing Webmaster](https://www.bing.com/webmasters)
2. Імпорт з GSC або додай сайт вручну
3. Sitemap: `https://family-wealth.pro/sitemap.xml`

## D. Rich Results (опційно)

[Тест розширених результатів](https://search.google.com/test/rich-results) → URL `https://family-wealth.pro/uk` → має з’явитись Organization / Person без критичних помилок.

---

**Коли закінчиш A + B:** напиши в чаті коротко — «індексовано» / «не в індексі» + текст причини з GSC.

**Якщо `/uk` = «копія», канонічна `/`:** після деплою з `301` `/` → `/uk` зроби **Запросити індексацію** саме для `https://family-wealth.pro/uk` (див. `gsc-homepage-inspection.md`).


Якщо GSC просить HTML-тег верифікації — скопіюй рядок `meta name="google-site-verification"` сюди; додамо в `index.html` і задеплоїмо.
