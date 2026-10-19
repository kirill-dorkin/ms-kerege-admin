# Kerege Admin — адаптация shadcn-admin

Демонстрационный проект студии [MicroStudio](https://micro-studio.vercel.app/ru).

- Исходник: [satnaing/shadcn-admin](https://github.com/satnaing/shadcn-admin) — автор Sat Naing, лицензия MIT (см. `LICENSE`).
- Исходное демо: https://shadcn-admin.netlify.app
- Наше демо: https://ms-kerege-admin.vercel.app

## Что изменили
- Название «Kerege Admin», демо-пользователь вместо личных данных автора.
- Убрали из меню раздел Clerk (без ключа он показывает только инструкцию для разработчика) и «Help Center» (заглушка «Coming Soon»).
- `noindex`, rewrites для SPA на Vercel.

Интерфейс, компоненты, данные-примеры, темы и маршруты исходника не менялись.
