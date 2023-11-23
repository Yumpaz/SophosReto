import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { Box, Button, Stack, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import Relaciones from "../components/Relaciones";
import Patrocinadores from "../components/Patrocinadores";
import Agenda from "../components/Agenda";

function createData(
  nombre,
  edad,
  sexo,
  habilidades,
  debilidades,
  relaciones,
  patrocinadores,
  agenda
) {
  return {
    nombre,
    edad,
    sexo,
    habilidades,
    debilidades,
    relaciones,
    patrocinadores,
    agenda,
  };
}

function createRelacion(nombre, relacion) {
  return { nombre, relacion };
}

function createPatrocinador(nombre, dinero, origendinero) {
  return { nombre, dinero, origendinero };
}

function createAgenda(
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
  Sabado,
  Domingo
) {
  return { Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo };
}

//#region Creación de datos
//#region relaciones
const r1 = [
  createRelacion("Cody Fisher", "Esposo"),
  createRelacion("Rochal Richards", "Amante"),
  createRelacion("Floyd Miles", "Hijo"),
];

const r2 = [createRelacion("Sonya Castro", "Esposa")];

const r3 = [
  createRelacion("Judyth Esther", "Esposa"),
  createRelacion("Maria Esther", "Hija"),
];

const r4 = [
  createRelacion("Rudolph Rolland", "Esposo"),
  createRelacion("Edison Rolland", "Hijo"),
];

const r5 = [createRelacion("Adolf Hitlar", "Esposo")];

const r6 = [
  createRelacion("Elena Rodriguez", "Esposa"),
  createRelacion("Carlos Rodriguez", "Hijo"),
  createRelacion("Alicia Rodriguez", "Hija"),
];

const r7 = [
  createRelacion("Samuel Turner", "Esposo"),
  createRelacion("Emma Turner", "Hija"),
  createRelacion("Oliver Turner", "Hijo"),
];

const r8 = [
  createRelacion("Isabella White", "Esposa"),
  createRelacion("Liam White", "Hijo"),
  createRelacion("Sophia White", "Hija"),
];

const r9 = [
  createRelacion("Daniel Mitchell", "Esposo"),
  createRelacion("Grace Mitchell", "Hija"),
  createRelacion("Jack Mitchell", "Hijo"),
];

const r10 = [
  createRelacion("Victoria Taylor", "Esposa"),
  createRelacion("Benjamin Taylor", "Hijo"),
];

const r11 = [
  createRelacion("Gabriel Lee", "Esposo"),
  createRelacion("Ava Lee", "Hija"),
  createRelacion("Noah Lee", "Hijo"),
];

const r12 = [
  createRelacion("Maria Perez", "Esposa"),
  createRelacion("Lucas Perez", "Hijo"),
];

const r13 = [
  createRelacion("Chuck Norris", "Esposo"),
  createRelacion("Xena Warrior Princess", "Esposa"),
  createRelacion("Hercules", "Hijo"),
];

const r14 = [
  createRelacion("Sherlock Holmes", "Hermano"),
  createRelacion("Nancy Drew", "Hermana"),
];

const r15 = [
  createRelacion("The Flash", "Esposo"),
  createRelacion("Wonder Woman", "Esposa"),
  createRelacion("Speedy Gonzalez", "Hijo"),
  createRelacion("Sonic the Hedgehog", "Hijo"),
];

const r16 = [
  createRelacion("Darth Vader", "Padre"),
  createRelacion("Princess Leia", "Hija"),
  createRelacion("Luke Skywalker", "Hijo"),
];
//#endregion relaciones
//#region patrocinadores
const p1 = [
  createPatrocinador("Goku", "$2304", "Salvar planetas"),
  createPatrocinador("Vegeta", "$1500", "Entrenamiento saiyan intensivo"),
  createPatrocinador("Bulma", "$3000", "Innovaciones de corporación capsula"),
];

const p2 = [
  createPatrocinador("Iron Man", "$5000", "Industrias Tony Stark"),
  createPatrocinador("Pepper Potts", "$2000", "Tráfico de armas"),
  createPatrocinador(
    "War Machine",
    "$3000",
    "Desarrollo de armamento avanzado"
  ),
];

const p3 = [
  createPatrocinador("Batman", "$10000", "Herencia de sus padres"),
  createPatrocinador("Alfred", "$5000", "Mantenimiento de la mansión"),
  createPatrocinador(
    "Lucius Fox",
    "$7000",
    "Investigación y desarrollo de tecnología en Gotham"
  ),
];

const p4 = [
  createPatrocinador("The Flash", "$2000", "Entregas veloces"),
  createPatrocinador("Cisco Ramon", "$1000", "Soporte tecnológico para Vibe"),
  createPatrocinador("Iris West", "$1500", "Periodismo en Central City"),
];

const p5 = [
  createPatrocinador(
    "Wonder Woman",
    "$3000",
    "Programa de alcance de Themyscira"
  ),
  createPatrocinador("Steve Trevor", "$2500", "Fondo de diplomacia mundial"),
  createPatrocinador(
    "Hippolyta",
    "$3500",
    "Entrenamiento en liderazgo amazona"
  ),
];

const p6 = [
  createPatrocinador(
    "Spider-Man",
    "$1800",
    "Patrullas amigables en el vecindario"
  ),
  createPatrocinador("Mary Jane", "$1200", "Apoyo a las artes"),
  createPatrocinador("J. Jonah Jameson", "$2200", "Drogas"),
];

const p7 = [
  createPatrocinador("Superman", "$4000", "Donaciones"),
  createPatrocinador("Lois Lane", "$3000", "Reportajes en Metrópolis"),
  createPatrocinador(
    "Lex Luthor",
    "$5000",
    "Investigación y desarrollo en LuthorCorp"
  ),
];

const p8 = [
  createPatrocinador(
    "Black Widow",
    "$2800",
    "Programa de entrenamiento en espionaje"
  ),
  createPatrocinador("Hawkeye", "$2000", "Clases de maestría en arquería"),
  createPatrocinador(
    "Nick Fury",
    "$3500",
    "Soporte operativo para S.H.I.E.L.D."
  ),
];

const p9 = [
  createPatrocinador("Aquaman", "$2500", "Conservación del océano atlante"),
  createPatrocinador("Mera", "$1800", "Diplomacia acuática"),
  createPatrocinador("Black Manta", "$3000", "Avances tecnológicos submarinos"),
];

const p10 = [
  createPatrocinador("Wolverine", "$2800", "Investigación de curación mutante"),
  createPatrocinador(
    "Professor X",
    "$3500",
    "Escuela Xavier para Jóvenes Talentosos"
  ),
  createPatrocinador("Magneto", "$3000", "Defensa de los derechos mutantes"),
];

const p11 = [
  createPatrocinador(
    "Storm",
    "$2500",
    "Investigación de manipulación del clima"
  ),
  createPatrocinador(
    "Jean Grey",
    "$3000",
    "Estudios de telepatía y telequinesis"
  ),
  createPatrocinador(
    "Cyclops",
    "$2200",
    "Investigación de seguridad de explosiones ópticas"
  ),
];

const p12 = [
  createPatrocinador(
    "Deadpool",
    "$2000",
    "Workshops de conciencia de la cuarta pared"
  ),
  createPatrocinador(
    "Colossus",
    "$1800",
    "Grupo de apoyo para mutantes metálicos"
  ),
  createPatrocinador(
    "Negasonic Teenage Warhead",
    "$1500",
    "Entrenamiento de poderes explosivos"
  ),
];

const p13 = [
  createPatrocinador(
    "Black Panther",
    "$3500",
    "Avances tecnológicos en Wakanda"
  ),
  createPatrocinador("Shuri", "$3000", "Iniciativas de educación STEM"),
  createPatrocinador("Killmonger", "$2500", "Distribución global de vibranium"),
];

const p14 = [
  createPatrocinador("Ant-Man", "$2000", "Investigación de partículas Pym"),
  createPatrocinador(
    "The Wasp",
    "$1800",
    "Proyecto de conservación de insectos"
  ),
  createPatrocinador(
    "Yellowjacket",
    "$2500",
    "Desarrollo de armamento miniaturizado"
  ),
];

const p15 = [
  createPatrocinador(
    "Hulk",
    "$4000",
    "Investigación de seguridad en radiación gamma"
  ),
  createPatrocinador(
    "Bruce Banner",
    "$3500",
    "Fondo de becas para científicos gamma"
  ),
  createPatrocinador(
    "Abomination",
    "$3000",
    "Medidas de contención contra Anti-Hulk"
  ),
];

const p16 = [
  createPatrocinador("Harley Quinn", "$2200", "Talleres de caos y travesuras"),
  createPatrocinador(
    "Poison Ivy",
    "$2500",
    "Sociedad de preservación botánica"
  ),
  createPatrocinador(
    "The Penguin",
    "$1800",
    "Programa de emprendimiento en el inframundo"
  ),
];
//#endregion patrocinadores
//#region agendas
const ag1 = [
  createAgenda(
    "10:30am - 4:30am",
    "1:00pm - 7:00pm",
    "9:15am - 3:15pm",
    "12:45pm - 6:45pm",
    "8:00am - 2:00pm",
    "11:00am - 5:00pm",
    "3:30pm - 9:30pm"
  ),
];

const ag2 = [
  createAgenda(
    "8:30am - 2:30am",
    "2:00pm - 8:00pm",
    "10:15am - 4:15pm",
    "1:45pm - 7:45pm",
    "9:00am - 3:00pm",
    "12:00pm - 6:00pm",
    "4:30pm - 10:30pm"
  ),
];

const ag3 = [
  createAgenda(
    "9:00am - 3:00am",
    "12:30pm - 6:30pm",
    "8:15am - 2:15pm",
    "11:45am - 5:45pm",
    "7:30am - 1:30pm",
    "10:30am - 4:30pm",
    "3:00pm - 9:00pm"
  ),
];

const ag4 = [
  createAgenda(
    "10:45am - 4:45am",
    "1:30pm - 7:30pm",
    "9:30am - 3:30pm",
    "1:00pm - 7:00pm",
    "8:15am - 2:15pm",
    "11:15am - 5:15pm",
    "3:45pm - 9:45pm"
  ),
];

const ag5 = [
  createAgenda(
    "8:00am - 2:00am",
    "1:30pm - 7:30pm",
    "9:00am - 3:00pm",
    "12:30pm - 6:30pm",
    "7:45am - 1:45pm",
    "10:45am - 4:45pm",
    "4:15pm - 10:15pm"
  ),
];

const ag6 = [
  createAgenda(
    "11:30am - 5:30am",
    "2:15pm - 8:15pm",
    "10:15am - 4:15pm",
    "1:45pm - 7:45pm",
    "9:00am - 3:00pm",
    "12:00pm - 6:00pm",
    "3:30pm - 9:30pm"
  ),
];

const ag7 = [
  createAgenda(
    "9:15am - 3:15am",
    "12:45pm - 6:45pm",
    "8:30am - 2:30pm",
    "12:00pm - 6:00pm",
    "7:15am - 1:15pm",
    "10:15am - 4:15pm",
    "3:45pm - 9:45pm"
  ),
];

const ag8 = [
  createAgenda(
    "10:00am - 4:00am",
    "1:45pm - 7:45pm",
    "9:45am - 3:45pm",
    "1:15pm - 7:15pm",
    "8:30am - 2:30pm",
    "11:30am - 5:30pm",
    "4:00pm - 10:00pm"
  ),
];

const ag9 = [
  createAgenda(
    "8:30am - 2:30am",
    "1:15pm - 7:15pm",
    "9:15am - 3:15pm",
    "12:45pm - 6:45pm",
    "7:00am - 1:00pm",
    "10:00am - 4:00pm",
    "3:30pm - 9:30pm"
  ),
];

const ag10 = [
  createAgenda(
    "11:00am - 5:00am",
    "2:45pm - 8:45pm",
    "10:45am - 4:45pm",
    "1:15pm - 7:15pm",
    "9:30am - 3:30pm",
    "12:30pm - 6:30pm",
    "4:00pm - 10:00pm"
  ),
];

const ag11 = [
  createAgenda(
    "9:45am - 3:45am",
    "1:30pm - 7:30pm",
    "9:30am - 3:30pm",
    "12:00pm - 6:00pm",
    "7:15am - 1:15pm",
    "10:15am - 4:15pm",
    "3:45pm - 9:45pm"
  ),
];

const ag12 = [
  createAgenda(
    "10:30am - 4:30am",
    "1:15pm - 7:15pm",
    "9:45am - 3:45pm",
    "1:15pm - 7:15pm",
    "8:30am - 2:30pm",
    "11:30am - 5:30pm",
    "4:00pm - 10:00pm"
  ),
];

const ag13 = [
  createAgenda(
    "8:15am - 2:15am",
    "1:00pm - 7:00pm",
    "9:00am - 3:00pm",
    "12:30pm - 6:30pm",
    "7:45am - 1:45pm",
    "10:45am - 4:45pm",
    "3:15pm - 9:15pm"
  ),
];

const ag14 = [
  createAgenda(
    "11:15am - 5:15am",
    "2:00pm - 8:00pm",
    "10:30am - 4:30pm",
    "1:00pm - 7:00pm",
    "9:15am - 3:15pm",
    "12:15pm - 6:15pm",
    "4:30pm - 10:30pm"
  ),
];

const ag15 = [
  createAgenda(
    "9:30am - 3:30am",
    "12:00pm - 6:00pm",
    "8:45am - 2:45pm",
    "12:15pm - 6:15pm",
    "7:30am - 1:30pm",
    "10:30am - 4:30pm",
    "3:00pm - 9:00pm"
  ),
];

const ag16 = [
  createAgenda(
    "10:15am - 4:15am",
    "1:45pm - 7:45pm",
    "9:30am - 3:30pm",
    "1:00pm - 7:00pm",
    "8:15am - 2:15pm",
    "11:15am - 5:15pm",
    "3:45pm - 9:45pm"
  ),
];
//#endregion agendas

const rows = [
  createData(
    "Ariene McCoy",
    45,
    "Femenino",
    "Superfueza",
    "Galletas",
    r1,
    p1,
    ag1
  ),
  createData(
    "Cody Fisher",
    37,
    "Masculino",
    "Lanzafuego",
    "Hielo",
    r2,
    p2,
    ag2
  ),
  createData("Esther Howard", 15, "Femenino", "Clones", "Espejos", r3, p3, ag3),
  createData(
    "Rochal Richards",
    20,
    "Masculino",
    "Gigante",
    "Perros",
    r4,
    p4,
    ag4
  ),
  createData(
    "Albert Flores",
    32,
    "Masculino",
    "Invisible",
    "Linternas",
    r5,
    p5,
    ag5
  ),
  createData("Marvin McKinney", 31, "Otros", "Za wardo", "Sol", r6, p6, ag6),
  createData(
    "Floyd Miles",
    14,
    "Masculino",
    "Inmortal",
    "Mata de platano",
    r7,
    p7,
    ag7
  ),
  createData(
    "Courtney Henry",
    24,
    "Masculino",
    "Regeneración",
    "Vick Vaporub",
    r8,
    p8,
    ag8
  ),
  createData(
    "Guy Hawkins",
    21,
    "Otros",
    "Supervelocidad",
    "Bocinas",
    r9,
    p9,
    ag9
  ),
  createData(
    "Ralph Edwards",
    27,
    "Masculino",
    "Controlar Plantas",
    "Linternas",
    r10,
    p10,
    ag10
  ),
  createData("Mark Greyson", 42, "Masculino", "Volar", "Tinta", r11, p11, ag11),
  createData(
    "Alex Johnson",
    32,
    "Masculino",
    "Hacer reír a cualquiera",
    "Alergia al silencio",
    r12,
    p12,
    ag12
  ),
  createData(
    "Emily Rodriguez",
    28,
    "Femenino",
    "Teletransportación",
    "Siempre olvida las llaves al teletransportarse",
    r13,
    p13,
    ag13
  ),
  createData(
    "George Thompson",
    45,
    "Masculino",
    "Devorar comida en segundos",
    "Intolerancia a la lactosa",
    r14,
    p14,
    ag14
  ),
  createData(
    "Sarah Miller",
    30,
    "No binario",
    "Habilidad de tomar siestas en cualquier lugar",
    "Sueños muy extraños",
    r15,
    p15,
    ag15
  ),
  createData(
    "Ryan Davis",
    22,
    "Femenino",
    "Telepatía para leer mentes... mañana",
    "Debilidad extrema ante gatos adorables",
    r16,
    p16,
    ag16
  ),
];

//#endregion Fin creación de datos

const HeroesPage = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [selectedRow, setSelectedRow] = useState("");
  const handleOpen = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };
  const handleOpen2 = (row) => {
    setSelectedRow(row);
    setOpen2(true);
  };
  const handleOpen3 = (row) => {
    setSelectedRow(row);
    setOpen3(true);
  };
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);
  const handleClose3 = () => setOpen3(false);
  const [searchNameQuery, setSearchNameQuery] = useState("");
  const [searchAbilityQuery, setSearchAbilityQuery] = useState("");
  const [searchRelationQuery, setSearchRelationQuery] = useState("");
  let filteredRows = rows.filter((row) => {
    const relacionesMatch = row.relaciones.some((relacion) =>
      relacion.nombre.toLowerCase().includes(searchRelationQuery.toLowerCase())
    );
    return (
      row.nombre.toLowerCase().includes(searchNameQuery.toLowerCase()) &&
      row.habilidades.toLowerCase().includes(searchAbilityQuery.toLowerCase()) &&
      relacionesMatch
    );
  });
  const [sortOrder, setSortOrder] = useState("asc");
  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    filteredRows.sort((a, b) => {
      const compareValue = sortOrder === "asc" ? a.edad - b.edad : b.edad - a.edad;
      return compareValue;
    });
  };

  return (
    <Container sx={{ paddingTop: 15 }}>
      <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
        <TextField
          label="Buscar por nombre"
          variant="outlined"
          value={searchNameQuery}
          onChange={(e) => setSearchNameQuery(e.target.value)}
        />
        <TextField
          label="Buscar por habilidad"
          variant="outlined"
          value={searchAbilityQuery}
          onChange={(e) => setSearchAbilityQuery(e.target.value)}
        />
        <TextField
          label="Buscar por relación"
          variant="outlined"
          value={searchRelationQuery}
          onChange={(e) => setSearchRelationQuery(e.target.value)}
        />
        <Button onClick={handleSort} variant="contained">
          Ordenar por Edad {sortOrder === "asc" ? "ascendente" : "descendente"}
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: "#EBEBEB" }}>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="center">Edad</TableCell>
              <TableCell align="center">Sexo</TableCell>
              <TableCell align="center">Habilidades</TableCell>
              <TableCell align="center">Debilidades</TableCell>
              <TableCell align="center">Relaciones</TableCell>
              <TableCell align="center">Patrocinadores</TableCell>
              <TableCell align="center">Agenda</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
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
                <TableCell align="center">
                  {<Button onClick={() => handleOpen(row)}>Ver</Button>}
                </TableCell>
                <TableCell align="center">
                  {<Button onClick={() => handleOpen2(row)}>Ver</Button>}
                </TableCell>
                <TableCell align="center">
                  {<Button onClick={() => handleOpen3(row)}>Ver</Button>}
                </TableCell>
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
            transform: "translate(-50%, -50%)"
          }}
        >
          <Relaciones relaciones={selectedRow.relaciones} />
        </Box>
      </Modal>
      <Modal open={open2} onClose={handleClose2}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Patrocinadores patrocinadores={selectedRow.patrocinadores} />
        </Box>
      </Modal>
      <Modal open={open3} onClose={handleClose3}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Agenda agenda={selectedRow.agenda} />
        </Box>
      </Modal>
    </Container>
  );
};

export default HeroesPage;
