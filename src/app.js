import {createElement} from './utils.js';
import React from 'react';
import './styles.css';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;

  return (
    React.createElement('div', {className: 'App'},
      React.createElement('div', {className: 'App-head'},
        React.createElement('h1', {}, 'Приложение на чистом JS')
      ),
      React.createElement('div', {className: 'App-controls'},
        React.createElement('button', {onClick: () => store.addItem()}, 'Добавить'),
      ),
      React.createElement('div', {className: 'App-center'},
        React.createElement('div', {className: 'List'},
          ...list.map(item =>
            React.createElement('div', {className: 'List-item'},
              React.createElement('div', {
                  className: 'Item' + (item.selected ? ' Item_selected' : ''),
                  onClick: () => store.selectItem(item.code)
                },
                React.createElement('div', {className: 'Item-code'}, item.code),
                React.createElement('div', {className: 'Item-title'}, item.title),
                React.createElement('div', {className: 'Item-actions'},
                  React.createElement('button', {onClick: () => store.deleteItem(item.code)},
                    'Удалить'
                  )
                ),
              )
            )
          )
        )
      )
    )
  );
}

export default App;
