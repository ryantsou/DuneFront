import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';


function MenuBar() {
  return (
    <Stack direction="row" spacing={4}>

      <Link to='/'>
        <Typography>
          ACCUEIL
        </Typography>

      </Link>
      <Link to='/patient-list'>
        <Typography>
          LISTE DES PATIENTS
        </Typography>
      </Link>

      <Link to='/consultation-list'>
        <Typography>
          LISTE DES CONSULTATIONS
        </Typography>
      </Link>

    </Stack>
  )
}

export default MenuBar