import React, { forwardRef } from "react"

type proptype={
    width:number,
    height:number
}
const Canvas = (({width , height}:proptype,ref:any) => {
  return (
    <div >
        <canvas ref={ref} width={width} height={height} style={{border: "1px solid black"}}/>
    </div>
  )
})

const forwardCanvasRef=forwardRef(Canvas)
export default forwardCanvasRef