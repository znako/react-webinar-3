import {createElement} from "./utils.js";

const app = createElement('div', {className: 'App'},
  createElement('div', {className: 'App-head'},
    createElement('h1', {textContent: 'Приложение на чистом JS'})
  ),
  createElement('div', {className: 'App-controls'},
    createElement('button', {textContent: 'Добавить'}),
  ),
  createElement('div', {className: 'App-center'},
    createElement('div', {className: 'List'},
      createElement('div', {className: 'List-item'},
        createElement('div', {className: 'Item'},
          createElement('div', {className: 'Item-code', textContent: '1'}),
          createElement('div', {className: 'Item-title', textContent: 'Название'}),
          createElement('div', {className: 'Item-actions'},
            createElement('button', {textContent: 'Удалить'})
          ),
        )
      )
    )
  )
);

document.body.append(app);
