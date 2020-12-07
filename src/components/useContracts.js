import React from 'react';
import { Circle } from 'react-konva';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

export class Contracts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isMouseInside: false
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    handleClick(coordinate) {
        this.props.setContract(coordinate)
    }
    handleMouseEnter() {
        this.setState({ isMouseInside: true});
    }
    handleMouseLeave() {
        this.setState({ isMouseInside: false});
    }
    render() {
        const { isMouseInside } = this.state
        const { coordinates } = this.props
            return (
                <>
                {
                    coordinates.map((coordinate,index)=>{
                        let locationX = (canvasWidth * coordinate.x) / 100;
                        let locationY = (canvasHeight * coordinate.y) / 100;
                        return <Circle
                                id={`contract-${index}`}
                                x={locationX} y={locationY} radius={5}
                                fill="yellow" stroke="black"
                                strokeWidth={1}
                                onClick={()=>this.handleClick(coordinate)}
                                onMouseEnter={this.handleMouseEnter}
                                onMouseLeave={this.handleMouseLeave}
                            />
                    })

                }
                </>
            );


    }
}