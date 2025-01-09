export function randomDie(){
    return Math.floor(Math.random()* 6 + 1);
}

export function fillArray(numDice,timesRender){
    for(let i=0; i<numDice; i++){
        timesRender[i] = randomDie();
    }
}

export function allSame(){
    
}
