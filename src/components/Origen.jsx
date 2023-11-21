import { Container, Box, Typography, Divider } from '@mui/material'
import React from 'react'

const Origen = ({origen}) => {
  return (
    <Container sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <Box sx={{display: "flex", justifyContent: "center", background: "white"}}>
            <Typography variant="h8" sx={{ margin: "10px"}}>Historia de Origen</Typography>
        </Box>
        <Divider orientation="horizontal" flexItem />
        <Box sx={{display: "flex", justifyContent: "center", background: "white"}}>
            <Typography variant="h8" sx={{ margin: "10px"}}>{origen}</Typography>
        </Box>
    </Container>
  )
}

export default Origen