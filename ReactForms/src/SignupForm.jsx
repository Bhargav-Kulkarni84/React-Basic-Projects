import {useState} from 'react';

export default function SignUpForm(){

const[username,setUsername] = useState("Bhargav")
const[password,setPassword] = useState("Secret");

    function validateUser(){
        if(username === "Bhargav" && password==="Secret"){
            console.log("Valid User");
        }
        else{
            console.log("Invalid Credentials");
        }
    }

    function changeUsername(evt){
        const newUsername = evt.target.value;
        setUsername(newUsername);
    }
    
    function changePassword(evt){
        const newPassword = evt.target.value;
        setPassword(newPassword);
    }

    return(
        <div>

        <label htmlFor="username"></label>
        <input  type="text" 
                id="username" 
                placeholder="Enter Username"
                onChange={changeUsername}
        />

        <label htmlFor="password"></label>
        <input type="password"
               id="password"
               placeholder="Enter Password"
               onChange={changePassword}
         />

        <button onClick={validateUser}>Submit Details</button>

        </div>

        
    )

}