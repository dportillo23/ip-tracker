import { Input, Button, Box } from "@mui/material"
import {ArrowForwardIos} from '@mui/icons-material'
import {useState} from 'react'
import API from "../service/APIservice"



const InputStyle = {
    backgroundColor: 'white',
    px: 2,
    py: 1,
    borderRadius: '10px 0 0 10px',
    width: '75%',
    maxWidth: 480
}

const buttonStyle = {
    backgroundColor: 'primary.main',
    color: 'white',
    borderRadius: '0 10px 10px 0',

}

const re = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

export default function MyInput({ipAddress, setIpAddress, setIpData}) {
    const [inputValue, setInputValue] = useState('');

    const handleClick = e => {
        e.preventDefault()
        re.test(inputValue) ? fetchAndSet(inputValue) : alert('IP Address format error or blank input, please check the IP Address and try again');
        setInputValue('');

    }

    const fetchAndSet = async (ip) => {
        const data = await API.getIPLocation(ip)
        console.log(data.data);
        setIpData(data.data)
    }

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            handleClick(e)
        }

    }

    return (
    <Box 
    display="flex"
    justifyContent="center" sx={{px: 2}}>
    <Input value={inputValue} placeholder='Search for any IP address or domain' sx={InputStyle} onChange={e => setInputValue(e.target.value)} onKeyDown={handleKeyDown} />
    <Button sx={buttonStyle} onClick={handleClick}><ArrowForwardIos/></Button>
    </Box>)
}