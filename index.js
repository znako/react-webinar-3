import {createElement} from "./utils.js";

const list = [
  {code: 1, title: 'Название элемента'},
  {code: 2, title: 'Некий объект'},
  {code: 3, title: 'Заголовок'},
  {code: 4, title: 'Очень длинное название элемента из семи слов'},
  {code: 5, title: 'Запись', selected: true},
  {code: 6, title: 'Шестая запись'},
  {code: 7, title: 'Седьмая запись'},
]

const app = App({list});

document.body.append(app);
