import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export function NavBar() {
    return (
        <div sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" >
                Mi portafolio
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      );
}

