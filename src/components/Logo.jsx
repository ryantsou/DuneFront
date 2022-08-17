import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SickOutlined from '@mui/icons-material/SickOutlined';

function Logo() {
    return (
        <Box
            sx={{
                display: "flex",
                flexFlow: "row wrap",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <SickOutlined sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                LOGO
            </Typography>
        </Box>
    )
}

export default Logo