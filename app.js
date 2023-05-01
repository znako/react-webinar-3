import {createElement} from "./utils";

function App({list}) {
  return (
    createElement('div', {className: 'App'},
      createElement('div', {className: 'App-head'},
        createElement('h1', {textContent: 'Приложение на чистом JS'})
      ),
      createElement('div', {className: 'App-controls'},
        createElement('button', {textContent: 'Добавить'}),
      ),
      createElement('div', {className: 'App-center'},
        createElement('div', {className: 'List'},
          ...list.map(item =>
            createElement('div', {className: 'List-item'},
              createElement('div', {className: 'Item' + (item.selected ? ' Item_selected' : '')},
                createElement('div', {className: 'Item-code', textContent: item.code}),
                createElement('div', {className: 'Item-title', textContent: item.title}),
                createElement('div', {className: 'Item-actions'},
                  createElement('button', {textContent: 'Удалить'})
                ),
              )
            )
          )
        )
      )
    )
  );
}
