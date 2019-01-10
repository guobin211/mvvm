import {observer} from '../utils/observer';

function list() {
  const element = document.createElement('div');
  const defaultText = '接收消息: ';
  element.style = "text-align: center; font-size:24px";
  
  element.innerText = defaultText;

  observer.registerObserver('INPUT_DATA', element);

  element.notify = function(data) {
    element.innerText = defaultText + data;
  }

  return element;
}

const List = list()

export default List;