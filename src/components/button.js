import {renderCanvas} from './canvas';

function button(){
  const element = document.createElement('button');
  element.setAttribute("type", "button");
  element.innerText = '输入信息';
  element.style = "background: #78a5f1";

  element.onclick = function ($event) {
    renderCanvas('html-canvas');
  }
  
  return element;
}

const Button = button();

export default Button;