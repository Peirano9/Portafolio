import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export function Footer() {
    return (
        <div sx={{ flexGrow: 1 }}>
          <AppBar position="auto">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Contáctame vía redes sociales
                </Typography>
                <Button color="inherit" href='https://mail.google.com/mail/u/0/?q=wallet#inbox?compose=CllgCJTKWKrLqbQqlkMJDRpPbsxVqQbXmzKSDcVzzjGNMbffsstQhClRKqrDztSbblGjqCTTbBB' target='_blank'>Gmail</Button>
                <Button color="inherit" href='https://www.instagram.com/agustin.peirano9/' target='_blank'>Instagram</Button>
                <Button color="inherit" href='https://www.linkedin.com/in/agust%C3%ADn-peirano-374842236/' target='_blank'>Linkedin</Button>
                <Button color="inherit" href='https://github.com/Peirano9' target='_blank'>GitHub</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
}