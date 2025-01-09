import {useState} from 'react'

export default function ShoppingListForm({updateItems}){

    
    const [item,setItem] = useState({product:"",quantity:""});

    function handleChange(evt){
    
        const property = evt.target.name;
        const value = evt.target.value;

        setItem((currItem)=>{
            currItem[property] = value;
            return {... currItem};

        })
    }

    function handleSubmit(evt){
        evt.preventDefault()

        updateItems(item);

        console.log("Submitted Form");
        setItem({product:"",quantity:""})
    }

    return(
        
        <div>

        <h2>Add Product </h2>

        <form onSubmit={handleSubmit}>

            <label htmlFor="product"></label>
            <input 
            type="text" 
            id="product" 
            name="product" 
            placeholder='Product'
            value = {item.product}
            onChange = {handleChange}
            />
            <label htmlFor="quantity"></label>
            <input 
            type="number" 
            id="quantity" 
            name="quantity" 
            placeholder='Quantity'
            value = {item.quantity}
            onChange = {handleChange}
            />
    
        <button>Submit</button>

        </form>
    </div>
    )
}

