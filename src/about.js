
function bootstarp() {
  const element = document.getElementById('app');
  const title = '<h1 style="text-align: center">Web Components</h1>'
  element.innerHTML = title;

  const nodes = []
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