import { useState } from 'react'
import { Card, Container, Grid } from "@mui/material";
import CardSection from "./CardSection";

const CardStyle = {
  backgroundColor: "white",
  p: 2,
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 10000,
  borderRadius: 2,
  transform: 'translateY(3.5vw)'
};

export default function MyCard({location, ip, isp}) {
  const checkAlignment = () => {
    return window.innerWidth < 600 ? 'center' : 'left';
  }
  const [alignment, setAlignment] = useState(checkAlignment())

  window.addEventListener('resize', () => {
    setAlignment(checkAlignment())
  })

  const testText = [
    { title: "IP Address", body: ip },
    { title: "Location", body: `${location.city}, ${location.region} ${location.postalCode}, ${location.country}` },
    { title: "Timezone", body: `UTC ${location.timezone}` },
    { title: "ISP", body: isp },
  ];

  return (
    <Container maxWidth='lg'>
      <Card sx={CardStyle}>
        <Grid container sx={{px: 2, width: '100%', textAlign: alignment}} >
          {testText.map(({ title, body }, index) => (
            
            <CardSection title={title} body={body} key={index} />
          ))}
        </Grid>
      </Card>
    </Container>
  );
}
