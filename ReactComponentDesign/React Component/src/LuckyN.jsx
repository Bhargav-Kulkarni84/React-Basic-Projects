import { useState } from "react";
import { randomDie } from "./utils";
import Dice  from "./Dice";

export default function LuckyN ({numDice,target}){
     
        let winner = false;

        const [rollResult, setResult] = useState(randomDie());

         function reRoll(idx,timesRender){

            // timesRender.map((element)=>(
            //     if(element.id===idx){
            //         setResult(randomDie());        
            //     }
            // ))

            console.log("Executed Change Result Function")
            
        }
       
        if(rollResult == target){
            winner = true;
        }

    return (
        <>
        {
            <>
            <Dice rollResult={rollResult} reRoll={reRoll} numDice={numDice} winner={winner}/>
            </>
        }
        </>
    )

}