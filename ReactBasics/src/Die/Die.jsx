export default function Die({numSides = 6}){

    let num = Math.floor((Math.random()*6))+1;

    if(num === 6){
        return (
            <h1>You Win!</h1>
        )
    }
}