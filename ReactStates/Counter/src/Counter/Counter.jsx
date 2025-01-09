import {useState} from "react";

export default function Counter(){

const [count, setCount] = useState(0);

    function increaseCountby1(){
        setCount(count+1);
        console.log(`Count = ${count}`);
    }

    // function increaseCountby3(){
    //     setCount(count+1);
    //     setCount(count+1);
    //     setCount(count+1);
    //     console.log(`Count = ${count}`);
    // }

    function increaseCountby3(){
        
        function updateCount(newCount){
            newCount= newCount+3;
            return newCount;
        }

        setCount(updateCount);

        console.log(`Count = ${count}`);
    }

    
    return(
        <>
            <h1>Count : {count}</h1>
            <button onClick={increaseCountby1}>+1</button>
            <button onClick={increaseCountby3}>+3</button>
        </>
    )
}