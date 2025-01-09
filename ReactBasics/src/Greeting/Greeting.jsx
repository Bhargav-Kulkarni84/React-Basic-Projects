export default function Greeting({name,message}){
    return(
        <div>
            <h1>Welcome to the Reacts Page</h1>
            <h3>Message: {message} </h3>
            <p>from: {name}</p>
        </div>
    )
}