import { useState, useEffect, useRef } from 'react';

// Path2D for a Heart SVG
const heartSVG = "M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"
const SVG_PATH = new Path2D(heartSVG);

// Scaling Constants for Canvas
const SCALE = 0.05;
const OFFSET = 80;
export const canvasWidth = window.innerWidth;
export const canvasHeight = window.innerHeight;

function isIntersect(point, el) {
    return Math.sqrt((point.x-el.x) ** .5 + (point.y - el.y) ** .5) < 10;
}

export function draw(ctx, location, coordinates, setClickedContract){
    if(location.type){
        let locationX = (canvasWidth * location.x) / 100;
        let locationY = (canvasHeight * location.y) / 100;
        ctx.fillStyle = location.type === 'contract' ? 'red': 'blue';
        ctx.shadowColor = 'blue';
        ctx.shadowBlur = 15;
        ctx.save();
        ctx.scale(SCALE, SCALE);
        ctx.translate(locationX / SCALE - OFFSET, locationY / SCALE - OFFSET);
        ctx.rotate(225 * Math.PI / 180);
        ctx.fill(SVG_PATH);

        ctx.canvas.addEventListener('click',(event)=> {
            let x = 100 / (canvasWidth / event.clientX);
            let y = 100 / (canvasHeight / event.clientY);

            let contract = coordinates.find((element) => {
                return element.type && isIntersect({ x, y }, element)
            });
            if(contract) setClickedContract(contract)
            else setClickedContract({})
        });
        ctx.restore();  
    }
};

export const drawMenu = (menu, location) =>{
    if(location){
        let locationX = (canvasWidth * location.x) / 100;
        let locationY = (canvasHeight * location.y) / 100;
        menu.style.left = `${locationX}px`;
        menu.style.top = `${locationY}px`;
    }
}

export function useCanvas(){
    const canvasRef = useRef(null);
    const menuRef = useRef(null);

    const [coordinates, setCoordinates] = useState([]);
    const [clickedContract, setClickedContract] = useState({});

    const [start, setStart] = useState(false);

    useEffect(()=>{
        const canvasObj = canvasRef.current;
        const ctx = canvasObj.getContext('2d');
        const menu = menuRef.current;
        const _corrdinate = coordinates[coordinates.length-1];
        // Draw Context Menu 
        if(!start)    
            drawMenu(menu, coordinates[coordinates.length-1]);
        // clear the canvas area before rendering the coordinates held in state
        ctx.clearRect( 0,0, canvasWidth, canvasHeight );
        // draw all coordinates held in state
        coordinates.forEach((coordinate)=>{
            if(coordinate.type !== 'recon'){
                draw(ctx, coordinate, coordinates, setClickedContract)
            }else if(coordinate.parentId === _corrdinate.id || coordinate.id === _corrdinate.id){
                draw(ctx, coordinate, coordinates, setClickedContract)
                console.log(coordinate)
            }
        });


    });


    return [ menuRef, coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight, setStart, clickedContract, setClickedContract ];
}
