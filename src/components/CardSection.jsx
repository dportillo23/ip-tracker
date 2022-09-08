import React from 'react'

import { Typography, Grid } from '@mui/material'

const CardSection = ({title, body}) => {

    const titleStyle = {
        textTransform: 'uppercase',
        fontSize: 12,
        color: 'secondary.main'
    }

    const bodyStyle = {
        fontWeight: 700,
    }
    
    const gridStyle = {
        p: 2,
    }
  return (
    <Grid item xs={12} sm={6} md={3} lg={3} sx={gridStyle}>
        <Typography variant='body2' sx={titleStyle} gutterBottom >{title}</Typography>
        <Typography variant='h5' sx={bodyStyle}>{body}</Typography>
    </Grid>
  )
}

export default CardSection