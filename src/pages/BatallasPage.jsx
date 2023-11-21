import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

function createData(heroe, villano, resultado) {
  return { heroe, villano, resultado };
}

const rows = [
    createData("Ariene McCoy", "Dr. Doom", "Gana Héroe"),
    createData("Cody Fisher", "The Joker", "Gana Villano"),
    createData("Esther Howard", "Harley Quinn", "Gana Héroe"),
    createData("Rochal Richards", "Loki", "Gana Villano"),
    createData("Albert Flores", "Venom", "Gana Villano"),
    createData("Marvin McKinney", "Cheetah", "Gana Héroe"),
    createData("Floyd Miles", "Two-Face", "Gana Villano"),
    createData("Courtney Henry", "The Penguin", "Gana Héroe"),
    createData("Guy Hawkins", "Catwoman", "Gana Héroe"),
    createData("Ralph Edwards", "Red Skull", "Gana Villano"),
    createData("Mark Greyson", "Poison Ivy", "Gana Héroe"),
    createData("Alex Johnson", "The Riddler", "Gana Villano"),
    createData("Emily Rodriguez", "Magneto", "Gana Villano"),
    createData("George Thompson", "Venompool", "Gana Villano"),
    createData("Sarah Miller", "Mystique", "Gana Héroe"),
    createData("Ryan Davis", "Green Goblin", "Gana Villano"),
    createData("Ariene McCoy", "Cheetah", "Gana Villano"),
    createData("Cody Fisher", "Poison Ivy", "Gana Héroe"),
    createData("Esther Howard", "Two-Face", "Gana Villano"),
    createData("Rochal Richards", "The Riddler", "Gana Héroe"),
    createData("Albert Flores", "Harley Quinn", "Gana Villano"),
    createData("Marvin McKinney", "Red Skull", "Gana Villano"),
    createData("Floyd Miles", "Venompool", "Gana Villano"),
    createData("Courtney Henry", "Loki", "Gana Villano"),
    createData("Guy Hawkins", "Dr. Doom", "Gana Villano"),
    createData("Ralph Edwards", "Mystique", "Gana Héroe"),
    createData("Mark Greyson", "Green Goblin", "Gana Héroe"),
    createData("Alex Johnson", "Venom", "Gana Villano"),
    createData("Emily Rodriguez", "The Joker", "Gana Villano"),
    createData("George Thompson", "Catwoman", "Gana Héroe"),
    createData("Sarah Miller", "Magneto", "Gana Héroe"),
    createData("Ryan Davis", "The Penguin", "Gana Héroe")
];

const BatallasPage = () => {
  return (
    <Container sx={{ paddingTop: 15 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{background: "#EBEBEB"}}>
            <TableRow>
              <TableCell align="center">Heroe</TableCell>
              <TableCell align="center">Villano</TableCell>
              <TableCell align="center">Resultado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.heroe}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.heroe}</TableCell>
                <TableCell align="center">{row.villano}</TableCell>
                <TableCell align="center">{row.resultado}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default BatallasPage;