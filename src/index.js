import './index.css';
import Button from './components/button';
import Input from './components/input';

function bootstarp() {
  const element = document.createElement('div');
  element.setAttribute("id", "app");
  element.innerHTML = "Web Components";
  element.appendChild(Input);
  element.appendChild(Button);
  return element;
}

document.body.appendChild(bootstarp());