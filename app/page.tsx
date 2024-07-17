'use client'
import { useRef } from 'react';
import Canvas from './components/Canvas'
import { clearcanvas, drawLine, erase, pencil } from './components/Drawcomp';
import { useOnDraw } from './components/Hooks'
// import './App.css'
import { FaHeart, FaPencilAlt }from 'react-icons/fa';

export default function App() {
  const usedrawref=useRef(0)
  const onDraw=(ctx:CanvasRenderingContext2D,point:{x:number,y:number},prevpoint:{x:number,y:number},initialpoint:{x:number,y:number},finalpoint:{x:number,y:number})=>{
    if(usedrawref.current==0){
      pencil(ctx,point,prevpoint)
      
    }
    else if(usedrawref.current==1){
      drawLine(ctx,point,prevpoint,initialpoint,finalpoint)
    }
    else if(usedrawref.current==2){
      erase(ctx,point,prevpoint,initialpoint,finalpoint)
    }
    else if(usedrawref.current==3){
      // clearcanvas(ctx)
      ctx.clearRect(0,0,1800,700)
      // ctx.stroke()
    }

  }
  // const clear=clearcanvas(ctx)

  
  const setCanvasRef = useOnDraw(onDraw);
  return (
    <div className='container '>
       <div className="container ml-24 mt-20 ">
          <button onClick={()=>{usedrawref.current=3}} className='bg-white text-gray-800 py-2 px-4 border border-gray-150 m-2 mr-8'>clear</button>
          <button onClick={()=>{usedrawref.current=2}} className='bg-white text-gray-800 py-2 px-4 border border-gray-150 m-2 mr-8'>erase</button>
          <button onClick={()=>{usedrawref.current=1}} className='bg-white text-gray-800 py-2 px-4 border border-gray-150 m-2 mr-8'>Surprize me</button>
          <button onClick={()=>{usedrawref.current=0}} className='bg-white text-gray-800 py-3 px-4 border border-gray-150 m-2 mr-8'><FaPencilAlt/></button>
        {/* </div> */}
      </div>
      <div className='flex items-center ml-14'>
        <div >
          <Canvas width={1800} height={700} ref={setCanvasRef}/>
        </div>
      </div>
    </div>
  )
}
