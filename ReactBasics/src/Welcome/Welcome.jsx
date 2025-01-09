import "./Welcome.css"

export default function Welcome({name,textAlign,color}){
    return(
        <>
        <h1 style={{color:color,textAlign:textAlign}}>Welcome To React Page</h1> 
        <p>from: {name}</p>
        </>
        
    );
}