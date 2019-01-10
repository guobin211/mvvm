function input() {
  const element = document.createElement('input');
  element.setAttribute("type", "text");
  element.placeholder = '输入文字';
  element.style = "color: red";
  element.oninput = function ($event) {
    console.log($event);
  }
  return element;
}

const Input = input()

export default Input;