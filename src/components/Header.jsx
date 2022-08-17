import React from 'react';
import Logo from './Logo';
import MenuBar from './MenuBar';
import { AppBar, Toolbar, Container } from '@mui/material';


function Header() {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{
                        display: "flex",
                        flexFlow: "row wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Logo />
                    <MenuBar />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header