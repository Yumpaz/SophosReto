import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { Box, Button, Modal } from "@mui/material";
import Origen from "../components/Origen";

function createData(nombre, edad, sexo, habilidades, debilidades, poder, origen) {
  return { nombre, edad, sexo, habilidades, debilidades, poder, origen };
}

const rows = [
  createData("Dr. Doom", 45, "Masculino", "Intelecto a nivel de genio", "Ego desmesurado", 950, "Nacido en una pequeña aldea de Latveria, Victor Von Doom se convirtió en un brillante científico con ansias de poder. Después de un fallido experimento para contactar con el inframundo, su rostro quedó desfigurado, impulsándolo hacia el camino de la tiranía."),
  createData("The Joker", 35, "Masculino", "Manipulación del caos", "Predictibilidad", 800, "Un comediante fracasado que, tras un trágico accidente químico, adoptó la identidad del Joker. Su origen es incierto, pero su risa maníaca y caos son su marca registrada, mostrando su retorcida visión del mundo."),
  createData("Harley Quinn", 28, "Femenino", "Acrobacias", "Amor por el Joker", 750, "Harleen Quinzel, una psiquiatra en el Asilo Arkham, cayó en el amor con el Joker y se convirtió en Harley Quinn. Su origen está entrelazado con su lealtad al Príncipe Payaso del Crimen."),
  createData("Loki", 1058, "Masculino", "Ilusiones", "Desconfianza", 920, "El dios de las mentiras de la mitología nórdica, Loki, busca constantemente el poder y la atención de su padre Odin. Sus travesuras y engaños son legendarios en Asgard y más allá."),
  createData("Venom", 32, "Masculino", "Poderes del simbionte", "Fuego", 880, "Eddie Brock, un periodista despedido, se fusionó con un simbionte alienígena llamado Venom. Ahora, comparten un vínculo simbiótico y buscan venganza contra Spider-Man."),
  createData("Cheetah", 37, "Femenino", "Fuerza sobrehumana", "Talón de Aquiles", 790, "La arqueóloga Barbara Ann Minerva buscaba una antigua reliquia, pero fue maldecida con la forma de Cheetah. Ahora, busca poder y venganza como la depredadora más rápida."),
  createData("Two-Face", 42, "Masculino", "Lanzamiento de moneda", "Obsesión con la dualidad", 770, "Antiguo fiscal del distrito Harvey Dent, cuya cara fue desfigurada en un enfrentamiento. Ahora, toma decisiones con una moneda de dos caras, representando su dualidad interna."),
  createData("The Penguin", 55, "Masculino", "Mente estratégica", "Baja estatura", 740, "Oswald Cobblepot, un hombre de negocios astuto y bajita estatura, se convirtió en el Pingüino. Su obsesión con las aves y su mente estratégica lo llevan a la delincuencia."),
  createData("Catwoman", 30, "Femenino", "Acrobacias", "Amor por Batman", 760, "Selina Kyle, ladrona ágil y astuta, opera en las sombras de Gotham. Su origen se vincula a la vida en las calles y su conexión ambivalente con Batman."),
  createData("Red Skull", 75, "Masculino", "Estratega genial", "Odio por el Capitán América", 900, "Johann Schmidt, un nazi obsesionado con la superioridad, se sometió a un experimento que lo transformó en el terrorífico Cráneo Rojo, enemigo acérrimo del Capitán América."),
  createData("Poison Ivy", 32, "Femenino", "Control sobre las plantas", "Falta de empatía emocional", 820, "Pamela Isley, una botánica, fue expuesta a productos químicos letales, dándole el poder de controlar plantas. Ahora, busca venganza contra aquellos que dañan la naturaleza."),
  createData("The Riddler", 40, "Masculino", "Adivinanzas y acertijos", "Necesidad compulsiva de validación", 870, "Edward Nygma, obsesionado con acertijos y enigmas, se convirtió en The Riddler. Su origen está marcado por una búsqueda constante de desafíos mentales y validación."),
  createData("Magneto", 60, "Masculino", "Magnetocinesis", "Objetos metálicos", 880, "Erik Lehnsher, un mutante con habilidades magnéticas, lucha por la supremacía mutante. Su historia está marcada por la discriminación y la búsqueda de un futuro para su especie."),
  createData("Venompool", 35, "Masculino", "Regeneración", "Adicción a las chimichangas", 950, "Una fusión cósmica de Deadpool y Venom, este ser caótico posee regeneración y habilidades simbióticas. Su origen es tan caótico como su personalidad."),
  createData("Mystique", 100, "Femenino", "Cambiar de forma", "Adaptación física limitada", 800, "Raven Darkholme, mutante metamorfa, ha vivido siglos adoptando diversas identidades. Su pasado está lleno de intriga y manipulación, reflejando su habilidad para cambiar de forma."),
  createData("Green Goblin", 48, "Masculino", "Mejoras con suero de duende", "Esquizofrenia", 890, "Norman Osborn, un brillante científico, se volvió loco tras un experimento fallido. Como el Duende Verde, siembra caos en la vida de Spider-Man y busca el control total.")
];

const VillanosPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };
  const [selectedRow, setSelectedRow] = useState("");
  const handleClose = () => setOpen(false);
  
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
                <TableCell align="center">{<Button onClick={() => handleOpen(row)}>Ver</Button>}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Origen origen={selectedRow.origen} />
        </Box>
      </Modal>
    </Container>
  );
};

export default VillanosPage;
