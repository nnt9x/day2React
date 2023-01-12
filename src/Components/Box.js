import "./Box.css";
import React, { useState } from 'react';

function Box(props){

    let arrColors = ["red","white","orange","yellow","pink","blue","green"];

    const [bgColor, changeColor] = useState(props.color);
    
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }

    function changeBgColor(){
        // random 0-> 6
        let index = getRndInteger(0, arrColors.length);
        // Lấy màu theo index
        let color = arrColors[index];

        changeColor(color);
    }

    return (
        <div onClick={changeBgColor} className="box" style={{backgroundColor:bgColor}}>
            
        </div>
    )
}

Box.defaultProps = {
    color:"red"
}

export default Box;