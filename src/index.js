import './index.css';
import Button from './components/button';
import Input from './components/input';
import List from './components/list';

function bootstarp() {
  const element = document.createElement('div');
  const title = '<h1 style="text-align: center">Web Components</h1>'
  element.setAttribute("id", "app");
  element.innerHTML = title;

  const nodes = [Input, Button, List]
  render(nodes, element);

  return element;
}

function render(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    el.appendChild(element)
  }
}

document.body.appendChild(bootstarp());