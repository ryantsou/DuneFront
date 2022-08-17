import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';


function Consultation() {

  const [lists, setLists] = useState([]);

  useEffect(() => {
    getLists();
  }, []);

  const getLists = () => {
    axios.get('http://127.0.0.1:8000/api/consultation-list/').then(function (response) {
      console.log(response.data);
      setLists(response.data);
    })
  }

  return (
    <React.Fragment>
      <Typography
        sx={{
          fontSize: "xx-large",
        }}
      >
        Liste des consultations
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Consultation No</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Heure</TableCell>
              <TableCell align="left">Nom</TableCell>
              <TableCell align="left">Prénoms</TableCell>
              <TableCell align="left">Médecin traitant</TableCell>
              <TableCell align="left">Service d'accueil</TableCell>
              <TableCell align="left">Frais de consultation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lists.map((list, key) =>
              <TableRow key={key}>
                <TableCell align="center" component="th" scope="row">{list.id}</TableCell>
                <TableCell align="left">{list.date}</TableCell>
                <TableCell align="left">{list.heure}</TableCell>
                <TableCell align="left">{list.nom}</TableCell>
                <TableCell align="left">{list.prenom}</TableCell>
                <TableCell align="left">{list.medecin_traitant}</TableCell>
                <TableCell align="left">{list.service}</TableCell>
                <TableCell align="left">{list.frais}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment >
  )
}

export default Consultation