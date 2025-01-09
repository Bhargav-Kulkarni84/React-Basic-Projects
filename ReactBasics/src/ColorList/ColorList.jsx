import "./ColorList.css"
export default function ColorList({colors}){

    // const mappedColors = colors.map((color=><li className = "ColorList" >{color}</li>));
    
    return ( 
        <ul>
            {
            colors.map((c) => (
                <li style={{color:c}}>{c}</li>
            ))
            }
        </ul>
    ) 
    }