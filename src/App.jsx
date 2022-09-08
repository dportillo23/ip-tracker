import { useState, useEffect } from "react";
import { Typography, CssBaseline } from "@mui/material";
import background from './images/pattern-bg.png'
import MyInput from "./components/MyInput";
import MyCard from "./components/MyCard";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useFetch from "./hooks/useFetch";
import MyMapComponent from "./components/MyMapComponent";


const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(0, 0%, 17%)'
    },
    secondary: {
      main: 'hsl(0, 0%, 59%)'
    },
  },
  typography: {
    fontFamily: ['Rubik', 'sans-serif'].join(', ')
  }
});

const headerStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  position: 'relative',
  height: '30vh',
  paddingTop: '1.5rem'
}

export default function App() {

  const [ipData, setIpData] = useState('')
  const [data, loading, error] = useFetch();
  const [ipAddress, setIpAddress] = useState();

  useEffect(() => {
    const locationData = data.data
    setIpData(locationData)
    
  }, [data])

  return (
    loading || !ipData ? <h1>Loading...</h1> : 
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <header style={headerStyle}>
        <Typography variant="h1" align="center" color='white' sx={{fontSize: 30}} gutterBottom >IP Address Tracker</Typography>
        <MyInput ipAddress={ipAddress} setIpAddress={setIpAddress} setIpData={setIpData} />
        <MyCard location={ipData.location} ip={ipData.ip} isp={ipData.isp}/>
      </header>
      <main style={{height: '70vh'}}>
    <MyMapComponent position={[ipData.location.lat, ipData.location.lng]} />
      </main>
    </ThemeProvider>
  );
};
