import {useState} from 'react'
export default function ScoreKeeper(){

const[scores,setScores] = useState({P1_Score:0, P2_Score:0})

    function updateP1Score(){
        
      let newP1Score = {P1_Score:scores.P1_Score, P2_Score: scores.P2_Score};
      newP1Score.P1_Score = newP1Score.P1_Score + 1;
      setScores(newP1Score);

    }

    function updateP2Score(){
        
        let newP2Score = {P1_Score:scores.P1_Score, P2_Score: scores.P2_Score};
        newP2Score.P2_Score = newP2Score.P2_Score + 1;
        setScores(newP2Score);
    }

    // function increaseP2Score() {
    //     setScores((oldScores) => {
    //         return {...oldScores, P2_Score: oldScores.P2_Score + 1 };
    //     });
    // }
    

    function reset(){
        let newScores = {P1_Score:scores.P1_Score, P2_Score: scores.P2_Score};
        newScores.P1_Score = 0;
        newScores.P2_Score = 0;
        setScores(newScores);
    }

    return (
        <>
        
        <h1>P1 Score : {scores.P1_Score}</h1>
        <button onClick={updateP1Score}>Update P1 Score</button>

        <h1>P2 Score : {scores.P2_Score}</h1>
        <button onClick={updateP2Score}>Update P2 Score</button>
        
        <h1>Reset All Scores</h1>
        <button onClick={reset}>Click Here </button>
        
        </>
    )

}

// REACT DOES NOT RE RENDER WHEN STATE IS NOT CHANGING
// REACT ONLY RE RENDERS IF STATE IS CHANGING

// By default react considers states to be immutable
//  Hence if you will make changes to the existing object react 
// will ignore the changes and will not rerender the component again

//To resolve this we will take the initial object, copy its entries
//  make required changes and then pass the newly created object in the setState function

