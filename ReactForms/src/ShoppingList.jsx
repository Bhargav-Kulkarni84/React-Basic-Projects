import {useState} from 'react'
import ShoppingListForm from './ShoppingListForm';

export default function ShoppingList(){

    const [items,setItems] = useState([{product:"Apple", quantity:5},{product:"Banana", quantity:3}]);

    function updateItems(item){
    
        //Method-1
        // setItems((currItems)=>{
        //     const newItems = [... currItems];
        //     newItems.push(item);
        //     console.log(newItems);
        //     return newItems;
        // })

        //Method-2 
        // const newItems = [... items];
        //     newItems.push(item);
        //     setItems(newItems);
        setItems((currItem)=>{
            return [... currItem, item]
        })

    }

    return(

        <div>
            <tr>
               <td>product</td>
               <td>quantity</td>
            </tr>
        {
        items.map((item)=>(
            <>
            <tr> 
                <td>{item.product}</td>
                <td>{item.quantity}</td>
            </tr>
            </>
            ))
        }
        
        <ShoppingListForm updateItems={updateItems} />

        </div>
    )
}

