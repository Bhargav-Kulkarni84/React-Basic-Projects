import {useState} from "react";
export default function Userform (){

    const [username,setUsername] = useState("username");

    function updateUsername(evt){
        const updatedUsername = evt.target.value;
        setUsername(updatedUsername);
    }

    return(

        <form action="">
        
        <label htmlFor="name">Enter Name : </label>
        <input 
            type="text" 
            id="name" 
            value={username}
            onChange={updateUsername}
        />

        <button>Submit</button>
        
        </form>
       
    )

}