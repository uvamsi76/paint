'use client'
export function pencil(ctx:CanvasRenderingContext2D,point:{x:number,y:number},prevpoint:{x:number,y:number}){
    ctx.beginPath();
    ctx.moveTo(prevpoint.x,prevpoint.y);
    ctx.lineTo(point.x,point.y);
    ctx.stroke();
}

export function drawLine(ctx:CanvasRenderingContext2D,point:{x:number,y:number},prevpoint:{x:number,y:number},initialpoint:{x:number,y:number},finalpoint:{x:number,y:number}){
  ctx.beginPath()
  ctx.moveTo(initialpoint.x,initialpoint.y)
  ctx.lineTo(point.x,point.y)
  ctx.closePath()
  ctx.stroke()
}
export function erase(ctx:CanvasRenderingContext2D,point:{x:number,y:number},prevpoint:{x:number,y:number},initialpoint:{x:number,y:number},finalpoint:{x:number,y:number}) {
  ctx.strokeStyle = 'black';
  ctx.fillRect(point.x, point.y, 20, 20); 
  ctx.stroke()
  ctx.fillStyle = 'white';
  ctx.fillRect(point.x, point.y, 20, 20); 
}

export function clearcanvas(ctx:CanvasRenderingContext2D,) {

  ctx.clearRect(0,0,1800,700)
  ctx.stroke()
}