import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Form(){
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      <TextField id="filled-basic" label="Password" variant="filled" />
      {/* <TextField id="standard-basic" label="" variant="standard" /> */}
    </Box>
  );
}
