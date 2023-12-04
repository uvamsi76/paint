import { useEffect, useRef } from "react";

export function useOnDraw(onDraw:any) {


    type coordtype={x:number,y:number}
    
    
    const canvasRef =useRef<HTMLCanvasElement>();
    const isDrawingRef=useRef(false);
    const MouseMoveListenerRef=useRef<any>(null);
    const MouseDownListenerRef=useRef<any>(null);
    const MouseUpListenerRef=useRef<any>(null);
    const prevPointRef= useRef<coordtype>({
        x: 0,
        y:0
    })
    const initialPointRef= useRef<coordtype>({
        x: 0,
        y:0
    }) 
    const finalPointRef= useRef<coordtype>({
        x: 0,
        y:0
    }) 

    function initMouseMoveListener(){
        const mousemovelistener=(e:MouseEvent)=>{
            if(!canvasRef.current) return;
            if(isDrawingRef.current){
                
                const coord:coordtype=rectify(e.clientX,e.clientY)
                // console.log(onDraw)
                const ctx=canvasRef.current.getContext('2d')
                if(!prevPointRef.current) {console.log(prevPointRef.current);return;}
                if(onDraw) {
                    onDraw(ctx,coord,prevPointRef.current,initialPointRef.current,finalPointRef.current);
                    prevPointRef.current=coord;
                }
                console.log(coord,prevPointRef.current)
                // if(coord) return
                
                // console.log(coord)
            }
        }
        MouseMoveListenerRef.current=mousemovelistener;
        window.addEventListener("mousemove", mousemovelistener)
    }

    function initMouseDownListener(){
        if(!canvasRef.current) return;
        const listener=(e:MouseEvent)=>{
            const coord:coordtype=rectify(e.clientX,e.clientY)
            prevPointRef.current=coord
            initialPointRef.current=coord
            isDrawingRef.current=true;
            console.log('true')
        }
    MouseDownListenerRef.current=listener;
    canvasRef.current.addEventListener('mousedown',listener)
    }

    function initMouseUpListener(){
        if(!canvasRef.current) return;
        const listener=(e:MouseEvent)=>{
            const coord:coordtype=rectify(e.clientX,e.clientY)
            finalPointRef.current=coord
            isDrawingRef.current=false;
            console.log('false')
        }
    MouseUpListenerRef.current=listener;
    window.addEventListener('mouseup',listener)
    }

    function rectify(clientx:number,clienty:number):coordtype{
        if(!canvasRef.current) return {
            x: -1,
            y:-1
        };
        const rect=canvasRef.current.getBoundingClientRect();
        return {
            x: clientx-rect.left,
            y:clienty-rect.top
        }
    }

        
    function setCanvasRef(ref:any){
        if(!ref) {console.log(ref);return;}
        if(canvasRef.current && MouseDownListenerRef.current){
            canvasRef.current.removeEventListener('mousedown',MouseDownListenerRef.current);
        }
        canvasRef.current=ref;
        console.log(ref)
        initMouseDownListener()
        initMouseUpListener()
        initMouseMoveListener()
    }

    return setCanvasRef;
}