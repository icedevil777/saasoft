# Тестовое задание для Vue Frontend Developer

Необходимо реализовать форму управления учетными записями.
Время на выполнение задания, максимум 2 дня.
Результатом выполнения работы, является ссылка на github/gitlab репозиторий с историей коммитов.
Макет представлен для примера, главное соблюдать тз, структуру и расположение полей, визуальное отображение можно сделать по своему предпочтению.

This template should help get you started developing with Vue 3 in Vite.
![alt text](public/forma.png)

Стек:
Vue.js 3 + Composition API (фреймворк)
TypeScript (язык)
Pinia (стейт менеджер)
Любой UI фреймворк на выбор.

Форма состоит из:
Заголовка и кнопки добавления учетной записи.
Подсказки для поля метка.
Списка учетных записей с лейблами полей.

Учетная запись состоит из:
Метка - Необязательное поле к заполнению. Максимум 50 символов. В поле вводятся текстовые метки, через знак ;
Тип записи - Выпадающий список. Допускаются выборы из заранее предопределенных вариантов:

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
