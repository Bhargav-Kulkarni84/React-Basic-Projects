import "./Box.css"

export default function Box({id,boxColor,toggler}){

    return(
        <>

        <div onClick={()=>toggler(id)} className="Box" style={{backgroundColor:boxColor}}>

        </div>

        </>
    )

}