import List from  "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import CircleIcon from '@mui/icons-material/Circle';
import ListItemText from '@mui/material/ListItemText'
import Divider from "@mui/material/Divider"
import ListSubheader from "@mui/material/ListSubheader"
import Box from "@mui/material/Box";

export default function Todolist(){

    return(
        <>
        <ul>
            This Is Ul
            <li>I am 1st li</li>
            <li>I am 2nd li</li>
            <button>Button</button>
        </ul>

        <List>
            This Is List
            {/* <ListItem>I am 1st List Item</ListItem> */}
                <ListSubheader> I am 1st List Item </ListSubheader>
                <Divider/>
            <ListItem>I am 2nd List Item</ListItem>
            {/* <ListItemButton style={{border:"1px solid black"}}>Button</ListItemButton> */}
            {/* <ListItemButton href= "www.google.com" sx={{border:"1px solid black",width:"80px", textAlign:"center"}}> */}
            <ListItemButton>
                <ListItemIcon> 
                    <CircleIcon/> 
                </ListItemIcon>
                    {/* <ListItemText>
                        Button
                    </ListItemText> */}
                    <Box sx={{background:"Orange", width:"40px", height:"40px"}}>
                        Button
                    </Box>
            </ListItemButton>
        </List> 
            
        </>
    )

}