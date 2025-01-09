import Box from "./Box.jsx"
import {useState} from "react"

export default function BoxGrid({numBox=3}){

// const colorState = [{color:"White",id:1}];
const colorState = [];

for(let i=0; i<numBox; i++){
    
    colorState.push(
        {
        id : i+1,
        color : "white"
        }
    )
}

const [boxColor,setBoxColor] = useState(colorState);

function toggler(id){

    const updatedColor = [];

    for(let i=0; i<numBox; i++){
        updatedColor[i] = boxColor[i];
    }

    for(let i=0; i<numBox; i++){
        if(id === updatedColor[i].id){
            if(updatedColor[i].color==="white"){
                updatedColor[i].color = "coral";
            }
            else{
                updatedColor[i].color = "white";
            }
        }
    }
    setBoxColor(updatedColor);
}

function resetAll(){

    const updatedColor = [];

    for(let i=0; i<numBox; i++){
        updatedColor[i] = boxColor[i];
    }

    for(let i=0; i<numBox; i++){
        updatedColor[i].color = "white";
    }   
    setBoxColor(updatedColor);
}

return(

    <>
        {
            boxColor.map((box)=>(       
                <Box id={box.id} toggler={toggler} boxColor={box.color}/>
                
            ))
        }
        
        <button onClick={resetAll}> Reset All </button>

    </>
    
)

}