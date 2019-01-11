function canvas() {
  const element = document.createElement('div');
  element.setAttribute('id', 'content');
  element.style = "width: 400px; height: 400px;background: #cccccc; margin:0 auto;";
  const res = buildCanvas('canvas', '150px', '150px');
  element.innerHTML = res;
  return element;
}

function buildCanvas(id, w, h) {
  return `<canvas id="canvas" width="150" height="150"></canvas>`
}

export function renderCanvas(id) {
  const element = document.getElementById(id);
  console.log(element);
  const ctx = element.getContext('2x');
  
  ctx.fillStyle = 'rgb(200, 0 ,0)';
  ctx.fillRect(20, 20, 50, 50);

  ctx.fillStyle= 'rgba(0,0,200, 0.5)';
  ctx.fillRect(40, 40, 50, 50);
}

const Canvas = canvas();
export default Canvas;