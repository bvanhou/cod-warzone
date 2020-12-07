import React from 'react';
import { Circle } from 'react-konva';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

export class Recons extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isMouseInside: false };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    handleClick(coordinate) {
        this.props.setRecon(coordinate)
    }
    handleMouseEnter() {
        this.setState({ isMouseInside: true});
    }
    handleMouseLeave() {
        this.setState({ isMouseInside: false});
    }
    render() {
        return (
            <>
            {
                
                this.props.coordinates.map((coordinate,index)=>{
                    let locationX = (canvasWidth * coordinate.x) / 100;
                    let locationY = (canvasHeight * coordinate.y) / 100;
                   return (
                       <Circle
                            id={`recon-${index}`}
                            x={locationX} y={locationY} radius={5}
                            fill="blue" stroke="black"
                            strokeWidth={1}
                            onClick={()=>this.handleClick(coordinate)}
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                        />
                    )
                })
            }
                
            </>
        );
    }
}