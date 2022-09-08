import React from 'react'
import {CircularProgress, Box} from '@mui/material';

const boxStyle = {
    backgroundColor: 'rgb(0 0 0 / 0.1)', 
    width: '100vw', 
    height: '100vh', 
    p: 0
}


const Loading = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' sx={boxStyle}>
        <CircularProgress size={60} />
    </Box>
  )
}

export default Loading