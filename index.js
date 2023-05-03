import {createElement} from './utils.js';
import App from './app.js';
import Store from './store.js';
import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

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

store.subscribe(() => {
  ReactDOM.render(React.createElement(App, {store}), document.body);
});

// Первый рендер приложения
ReactDOM.render(React.createElement(App, {store}), document.body);
