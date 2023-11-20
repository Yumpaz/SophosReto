import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

const Relaciones = ({relaciones}) => {
  return (
    <Container sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: "#EBEBEB" }}>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="center">Relación</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {relaciones.map((relacion) => (
              <TableRow
                key={relacion.nombre}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {relacion.nombre}
                </TableCell>
                <TableCell align="center">{relacion.relacion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Relaciones;
