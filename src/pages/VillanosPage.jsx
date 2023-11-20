import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";

function createData(nombre, edad, sexo, habilidades, debilidades, poder) {
  return { nombre, edad, sexo, habilidades, debilidades, poder };
}

const rows = [
  createData("Ariene McCoy", 45, "Femenino", "Superfueza", "Galletas", 990),
  createData("Cody Fisher", 37, "Masculino", "Lanzafuego", "Hielo", 866),
  createData("Esther Howard", 15, "Femenino", "Clones", "Espejos", 756),
  createData("Rochal Richards", 20, "Masculino", "Gigante", "Perros", 245),
  createData("Albert Flores", 32, "Masculino", "Invisible", "Linternas", 555),
  createData("Marvin McKinney", 31, "Otros", "Za wardo", "Sol", 656),
  createData("Floyd Miles", 14, "Masculino", "Inmortal", "Mata de platano", 890),
  createData("Courtney Henry", 24, "Masculino", "Regeneración", "Vick Vaporub", 1000),
  createData("Guy Hawkins", 21, "Otros", "Supervelocidad", "Bocinas", 778),
  createData("Ralph Edwards", 27, "Masculino", "Controlar Plantas", "Linternas", 567),
  createData("Albert Flores", 32, "Masculino", "Invisible", "Linternas", 647),
  createData("Albert Flores", 32, "Masculino", "Invisible", "Linternas", 886),
  createData("Albert Flores", 32, "Masculino", "Invisible", "Linternas", 423),
  createData("Albert Flores", 32, "Masculino", "Invisible", "Linternas", 134),
  createData("Albert Flores", 32, "Masculino", "Invisible", "Linternas", 543),
];

const VillanosPage = () => {
  return (
    <Container sx={{ paddingTop: 15 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{background: "#EBEBEB"}}>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="center">Edad</TableCell>
              <TableCell align="center">Sexo</TableCell>
              <TableCell align="center">Habilidades</TableCell>
              <TableCell align="center">Debilidades</TableCell>
              <TableCell align="center">Poder</TableCell>
              <TableCell align="center">Origen</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.nombre}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nombre}
                </TableCell>
                <TableCell align="center">{row.edad}</TableCell>
                <TableCell align="center">{row.sexo}</TableCell>
                <TableCell align="center">{row.habilidades}</TableCell>
                <TableCell align="center">{row.debilidades}</TableCell>
                <TableCell align="center">{row.poder}</TableCell>
                <TableCell align="center">{<Button>Ver</Button>}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default VillanosPage;
