import {observer} from '../utils/observer';
function input() {
  const element = document.createElement('input');
  element.setAttribute("type", "text");
  element.placeholder = '输入文字';
  element.style = "color: red";

  element.oninput = function ($event) {
    const val = $event.target.value;
    observer.notifyObservers('INPUT_DATA', val);
  }

  element.notify = function(data) {
    console.log(data);
  }

  observer.registerObserver('INPUT_DATA', element);

  return element;
}

const Input = input()

export default Input;