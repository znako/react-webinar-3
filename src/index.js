import {createElement} from './utils.js';
import App from './app.js';
import Store from './store.js';
import React from 'react';
import {createRoot} from 'react-dom/client';

const store = new Store({
  list: [
    {code: 1, title: 'Название элемента'},
    {code: 2, title: 'Некий объект'},
    {code: 3, title: 'Заголовок'},
    {code: 4, title: 'Очень длинное название элемента из семи слов'},
    {code: 5, title: 'Запись'},
    {code: 6, title: 'Шестая запись'},
    {code: 7, title: 'Седьмая запись'},
  ]
});

const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
  root.render(React.createElement(App, {store}));
});

// Первый рендер приложения
root.render(React.createElement(App, {store}));
