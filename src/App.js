import { useEffect, useState, useRef } from 'react';
import {Layer, Stage} from 'react-konva';
import {cover} from 'intrinsic-scale';

import { BackgroundImage } from './components/useBackgroundImage';
import { Contracts } from './components/useContracts';
import { Recons } from './components/useRecons';

import axios from 'axios';
import _ from 'lodash';

import warzone from './map-overview-bg.jpg';
import './App.css';

// get our fontawesome imports
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const { REACT_APP_API_URL } = process.env;

const api = axios.create({
  baseURL: REACT_APP_API_URL,
});




function App() {
  const menuRef = useRef(null);

  const [ coordinate, setCoordinate ] = useState([]);
  const [ coordinates, setCoordinates ] = useState([]);

  const [ contract, setContract ] = useState({});
  const [ recon, setRecon ] = useState({});

  const [ addRecon, setAddRecon ] = useState(true);

  const [ stageState, setStageState ] = useState({
    stageScale: 1,
    stageX: 0,
    stageY: 0
  });
  const [ canvasWidth, setCanvasWidth ] = useState( window.innerWidth);
  const [ canvasHeight, setCanvasHeight ] = useState( window.innerHeight);

  const { width, height, x, y } = cover(canvasWidth, canvasHeight, 1920, 1080);
  
  const handleWheel = e => {
    e.evt.preventDefault();
    const scaleBy = 1.02;
    const stage = e.target.getStage();
    const oldScale = stage.scaleX();
    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
    };

    let newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
    newScale = newScale < 1 ? 1 : newScale;

    setStageState({
      stageScale: newScale,
      stageX:
        -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
      stageY:
        -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
    });
  };

  // Event handler callback for zoom in 
  const handleZoomIn = () =>{ 
    
    // Fetching current height and width 
    const height = this.imgRef.current.clientHeight 
    const width = this.imgRef.current.clientWidth 
      
    // Increase dimension(Zooming) 
    setCanvasHeight(height + 10);
    setCanvasWidth(width + 10);
  } 
  
  // Event handler callback zoom out 
  const handleZoomOut = () =>{ 
    // Fetching current height and width 
    const height = this.imgRef.current.clientHeight 
    const width = this.imgRef.current.clientWidth 
    // Assigning original height and width 
    setCanvasHeight(height - 10);
    setCanvasWidth(width - 10);
  } 


  const drawMenu = (visibility, location) => {
    console.log(`Show Menu: ${ visibility }`);
    let locationX = ((canvasWidth * location.x) / 100) + 10;
    let locationY = ((canvasHeight * location.y) / 100) + 10;

    const menu = menuRef.current;
    menu.style.visibility = (visibility) ? "visible": "hidden";
    menu.style.left = `${locationX}px`;
    menu.style.top = `${locationY}px`;
  }

  const handleCanvasClick = (event) => {
    event = (event.evt) ? event.evt : event;
    let position = {
      x: (100 / (canvasWidth / event.clientX)),
      y: (100 / (canvasHeight / event.clientY))
    }
    console.log('clicking')
    drawMenu(true, position)
    setCoordinate(position);

  }

  const doCreateContract = () =>{
    coordinate.type = 'contract';
    api.post("",{ ...coordinate })
    .then(res => {
      setCoordinate(res.data)
      setContract(res.data)
      setCoordinates([...coordinates, res.data]);
    })
  }

  const doAddRecon = (event) =>{
    coordinate.parentId = contract.id;
    coordinate.type = 'recon';
    api.post("",{ ...coordinate })
    .then(res => {
      setCoordinate(res.data)
      setContract({})
      setCoordinates([...coordinates, res.data]);
    })
  };

  const doRemove = async () =>{
    const _coordinates = coordinates.filter((obj) => {
      return obj.x !== coordinate.x && obj.y !== coordinate.y
    });
    console.log(_coordinates)
    // await api.delete(`${_coordinates.id}`);
    // if(currentCoord.type === 'recon'){
    //   setReconCord(false);
    // }

    // setCoordinates([...coordinates]);
  }

  const removeAllCorrdinates = async () => {
    let iterations = coordinates.length;

    for (const coordinate of coordinates) {
      if(coordinate.id){
        await api.delete(`${coordinate.id}`);
      }

      if (!--iterations)
        setCoordinates([]);
    }
  }

  const doReset = () =>{
    setContract({})
    setCoordinate({})
    drawMenu(false, {})
  }

  useEffect(() =>{
    api.get()
      .then(res => {
        console.log(res.data)
        setCoordinates(res.data);
    });
  },[])
 
  return (
    <main id="container" className="App-main" >
        <Stage 
          width={canvasWidth} 
          height={canvasHeight}
          onClick={handleCanvasClick}
          onWheel={handleWheel}
          scaleX={stageState.stageScale}
          scaleY={stageState.stageScale}
          x={stageState.stageX}
          y={stageState.stageY}
          >
          <Layer>
          <BackgroundImage src={warzone} alt="logo" x={x} y={y} width={width} height={height} />
          {
            _.isEmpty(contract) ?
            <Contracts coordinates={coordinates.filter(x => x.type === 'contract')} setContract={setContract}/>
            :
            <Contracts coordinates={coordinates.filter(x => x.type === 'contract')} setContract={setContract}/>
          }
            <Recons coordinates={coordinates.filter(x => x.type === 'recon' && x.parentId === contract.id)}  setRecon={setRecon}/>
          </Layer>
        </Stage>

  
      <div ref={menuRef} id="contextMenu" >
          { 
            _.isEmpty(contract) &&
            <div className="contextMenu--contract" onClick={doCreateContract}>Create Contract</div>
          }
          { 
            !_.isEmpty(contract) &&
            <div className="contextMenu--recon" onClick={doAddRecon}>Add Recon</div>
          }
          {
            (!_.isEmpty(contract) || !_.isEmpty(recon)) &&
            <div className="contextMenu--remove" onClick={doRemove} >Remove</div>
          }
          {
            <div className="contextMenu--cancel" onClick={doReset} >Cancel</div>
          }

      </div>

      
      <div className="menu-items">
        <button onClick={removeAllCorrdinates}> Clear Map </button>
        <FontAwesomeIcon icon={faPlusSquare} onClick={handleZoomIn} />
        <FontAwesomeIcon icon={faMinusSquare} onClick={handleZoomIn} />
      </div> 
    </main>
  );

};

export default App;