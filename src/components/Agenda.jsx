import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";

const Agenda = ({agenda}) => {
  return (
    <Container sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <Box sx={{display: "flex", justifyContent: "center", background: "white"}}>
            <Typography variant="h8">Horas libres</Typography>
        </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: "#EBEBEB" }}>
            <TableRow>
              <TableCell align="center">Lunes</TableCell>
              <TableCell align="center">Martes</TableCell>
              <TableCell align="center">Miercoles</TableCell>
              <TableCell align="center">Jueves</TableCell>
              <TableCell align="center">Viernes</TableCell>
              <TableCell align="center">Sabado</TableCell>
              <TableCell align="center">Domingo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {agenda.map((dia) => (
              <TableRow
                key={dia.lunes}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{dia.Lunes}</TableCell>
                <TableCell align="center">{dia.Martes}</TableCell>
                <TableCell align="center">{dia.Miercoles}</TableCell>
                <TableCell align="center">{dia.Jueves}</TableCell>
                <TableCell align="center">{dia.Viernes}</TableCell>
                <TableCell align="center">{dia.Sabado}</TableCell>
                <TableCell align="center">{dia.Domingo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Agenda;