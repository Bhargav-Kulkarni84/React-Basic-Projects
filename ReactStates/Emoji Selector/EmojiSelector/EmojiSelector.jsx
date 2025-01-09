import {v4 as uuid} from 'uuid';
import {useState} from 'react';

export default function EmojiClicker(){

    const [emojis,setEmojis] = useState([{id:uuid(),emoji:":("}]);

const addEmoji = () =>{
    // setEmojis([...emojis,"C"]);
    // const [emojis,setEmojis] = useState([{id:uuid(),emoji:"E"}]);
    // setEmojis((oldEmojis)=>[...oldEmojis,{id:uuid(),emoji:":)"}]);
    // setEmojis((oldEmojis)=>[...oldEmojis]);
    const newEmoji = [...emojis];
    newEmoji.push({id:uuid(),emoji:":)"});
    setEmojis(newEmoji);
}

const deleteEmoji = (id)=>{

    // const newArray = emojis.filter((e)=>e.id!==id);
    // setEmojis(newArray);

    setEmojis((prevEmojis)=>{
        return (prevEmojis.filter((e)=>(e.id!==id)));
    })
}

const makeSame = ()=>{

    setEmojis((prevEmojis) => {
        return prevEmojis.map(e=>{
            return {...e, emoji:":D"};
        })
    })

}


    return(
        <div>
            {
                emojis.map((e)=>(
                    <span onClick = {()=>deleteEmoji(e.id)}   key={e.id} style={{fontSize:"4rem"}}>{e.emoji}</span>
                ))

            }
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={makeSame}>Make Them Same</button>
        </div>
    )

}
