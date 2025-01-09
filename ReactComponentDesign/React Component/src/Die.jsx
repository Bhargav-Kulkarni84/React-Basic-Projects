export default function Die({rollResult,reRoll,winner}){

    return(
        <>
            <div>
                <h1>Rolled Num : {rollResult} </h1>
                {/* {winner?<h2>Winner</h2>:""} */}
                {winner && <h2>Winner</h2>}
            </div>

            {/* <button onClick={reRoll}>Roll Again </button> */}
        </>
    )
}