import { useState } from "react";

export default function SignUpForm2(){  

    const [change, setChange] = useState({firstname:"",lastname:"",password:""})

    // function onChange(evt){
        
    //     // const property = evt.target.name;
    //     const property = evt.target.placeholder;
    //     const value = evt.target.value;

    //     const newObj = {...change};

    //     newObj[property] = value;

    //     setChange(newObj);
    // }

    // function onChange(evt){

    //     const property = evt.target.name;
    //     const value = evt.target.value;

    //     setChange((currState)=>{
    //         currState[property] = value;
    //         return {... currState};
    //     }
    // )
    // }

    function onChange(evt){

        const property = evt.target.name;
        const value = evt.target.value;

        setChange((currData)=>{

            return {... currData, 
                [property]:value
            };
        })
    }

    return(
        <form action="">

        <label 
            htmlFor="firstname" 
            type="text"
            placeholder="firstname"
            id = "firstname"
        >    
        </label>
        <input 
            type="text"
            placeholder="firstname"
            id = "firstname"
            value = {change.firstname}
            onChange = {onChange}
            name = "firstname"
        >
        </input>

        <label 
            htmlFor="lastname" 
            type="text"
            placeholder="lastname"
            id = "lastname"
        >    
        </label>
        <input 
            type="text"
            placeholder="lastname"
            id = "lastname"
            value = {change.lastname}
            onChange = {onChange}
            name = "lastname"
        >
        </input>

        <label 
            htmlFor="passwords" 
            type="password"
            placeholder="passwordsd"
            id = "passwordsd"
        >    
        </label>
        <input 
            type="password"
            placeholder="passwordsd"
            id = "passwordsd"
            value = {change.password}
            onChange = {onChange}
            name = "password"
        >
        </input>
        
            <button >Submit Details</button>
        </form>
    )

}