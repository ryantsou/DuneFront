import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import Edit from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Delete from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddTask from '@mui/icons-material/AddTask';
import PersonAdd from '@mui/icons-material/PersonAdd';
import TableContainer from '@mui/material/TableContainer';


function PatientList() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getPatients();
  }, []);

  const getPatients = () => {
    axios.get('http://127.0.0.1:8000/api/patient-list/').then(function (response) {
      setPatients(response.data);
    })
  }

  const deletePatients = (id) => {
    axios.delete('http://127.0.0.1:8000/api/patient-delete/' + id + '/').then(function (response) {
      getPatients();
    })
  }

  return (
    <React.Fragment>
      <Typography
        sx={{
          fontSize: "xx-large",
        }}
      >
        Liste des patients</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Nom</TableCell>
              <TableCell align="left">Prénoms</TableCell>
              <TableCell align="left">Sexe</TableCell>
              <TableCell align="left">Date de naissance</TableCell>
              <TableCell align="left">Lieu de naissance</TableCell>
              <TableCell align="left">Groupe sanguin</TableCell>
              <TableCell align="left">Médecin traitant</TableCell>
              <TableCell align="right"> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient, key) =>
              <TableRow key={key}>
                <TableCell component="th" scope="row">{patient.id}</TableCell>
                <TableCell align="left">{patient.nom}</TableCell>
                <TableCell align="left">{patient.prenom}</TableCell>
                <TableCell align="left">{patient.sexe}</TableCell>
                <TableCell align="left">{patient.date_de_naissance}</TableCell>
                <TableCell align="left">{patient.lieu_de_naissance}</TableCell>
                <TableCell align="center">{patient.groupe_sanguin}</TableCell>
                <TableCell align="left">{patient.medecin_traitant}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={1}>
                    <IconButton>
                      <AddTask />
                    </IconButton>
                    <IconButton>
                      <Edit />
                    </IconButton>
                    <IconButton>
                      <Delete onClick={handleOpen} />
                    </IconButton>
                  </Stack>
                  <Dialog
                    fullWidth
                    open={open}
                    maxWidth="xs"
                    onClose={handleClose}
                  >
                    <DialogTitle>
                      {"Suppression"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Voulez-vous vraiment supprimer?
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button color="primary" onClick={handleClose}>
                        Annuler
                      </Button>
                      <Button color="primary" onClick={deletePatients(patient.id)}>
                        Ok
                      </Button>
                    </DialogActions>
                  </Dialog>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to='/add-patient'>
        <Button
          variant="outlined"
          startIcon={<PersonAdd />}
          sx={{
            margin: "1.5% 0",
          }}
        >
          Nouveau patient
        </Button>
      </Link>
    </React.Fragment>
  )
}

export default PatientList