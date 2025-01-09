import Die from "./Die"
import { fillArray } from "./utils";

export default function Dice({rollResult,reRoll,numDice,winner}) {

    const timesRender = [];
    fillArray(numDice,timesRender);

    return (
        <>
            {
                timesRender.map((val,idx)=>(
                    <>
                    <Die key={idx} rollResult = {val} reRoll = {reRoll} winner={winner}/>
                    <button onClick={()=>reRoll(idx,timesRender)}>Roll Again </button>
                    </>
                ))

            }
        </>
    )
}