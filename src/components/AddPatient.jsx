import axios from 'axios';
import Form from './Form';
import Box from '@mui/material/Box';
import { React, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const blood = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
const doctor = ["Dr RAKOTOMAVO Tantely", "Dr NIRINA Sylvianne"]
const sexe = ["Féminin", "Masculin"]

function AddPatient() {

    const [values, setValues] = useState({
        nom: '',
        prenom: '',
        sexe: sexe[0],
        date_de_naissance: '',
        lieu_de_naissance: '',
        groupe_sanguin: null,
        medecin_traitant: null,
    });

    const handleInputChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleInputSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/patient-create/', values);
    }

    return (
        <Form onSubmit={handleInputSubmit}>
            <Box
                sx={{
                    display: "flex",
                    flexFlow: "column wrap",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <TextField
                    variant="outlined"
                    name="nom"
                    type="text"
                    label="Nom"
                    sx={{ margin: "5px", width: "300px" }}
                    value={values.nom}
                    onChange={handleInputChange('nom')}
                />
                <TextField
                    variant="outlined"
                    name="prenom"
                    type="text"
                    label="Prénom"
                    sx={{ margin: "5px", width: "300px" }}
                    value={values.prenom}
                    onChange={handleInputChange('prenom')}
                />
                <Autocomplete
                    value={values.sexe}
                    onChange={(event, newValue) => {
                        setValues({
                            sexe: newValue
                        })
                    }}
                    options={sexe}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            variant="outlined"
                            name="sexe"
                            type="text"
                            label="Sexe"
                            sx={{ margin: "5px", width: "300px" }}
                        />}
                />

                <TextField
                    variant="outlined"
                    name="date_de_naissance"
                    label="Date de naissance"
                    type="date"
                    sx={{ margin: "5px", width: "300px" }}
                    value={values.date_de_naissance}
                    onChange={handleInputChange('date_de_naissance')}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <TextField
                    variant="outlined"
                    name="lieu_de_naissance"
                    type="text"
                    label="Lieu de naissance"
                    sx={{ margin: "5px", width: "300px" }}
                    value={values.lieu_de_naissance}
                    onChange={handleInputChange('lieu_de_naissance')}
                />

                <Autocomplete
                    value={values.groupe_sanguin}
                    onChange={(event, newValue) => {
                        setValues({
                            groupe_sanguin: newValue
                        })
                    }}
                    options={blood}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            variant="outlined"
                            type="text"
                            label="Groupe sanguin"
                            sx={{ margin: "5px", width: "300px" }}
                        />}
                />
                <Autocomplete
                    value={values.medecin_traitant}
                    onChange={(event, newValue) => {
                        setValues({
                            groupe_sanguin: newValue
                        })
                    }}
                    options={doctor}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            variant="outlined"
                            type="text"
                            label="Médecin traitant"
                            sx={{ margin: "5px", width: "300px" }}
                        />}
                />
            </Box>
            <Button sx={{ margin: "5px 0", width: "300px" }} variant="contained" type="submit">
                Envoyer
            </Button>
        </Form>
    )
}

export default AddPatient