import { Grid, Typography } from '@mui/material';
import logo from './2.jpg';

export function Estudios() {
    return (
        <Grid 
            
            className='icon' 
            container direction="row" 
            justifyContent="space-evenly" 
            alignItems="center" 
            padding= '50px'
        >
            <Grid item xs='auto'>
            <img src={logo} width={300} />
            </Grid>
            <Grid item xs='auto' color='#82b1ff'>
                <Typography variant='h1'>
                    Estudios
                </Typography>
                <Typography variant='body1'>
                    Jardín y Escuela en Escuela N°7 "Juán Zorrilla de San Martín" (2005-2013)
                    <br />
                    Bachillerato de Ciencias Biológicas en Liceo Dr.Medúlio Perez Fontana (2014-2020)
                    <br />
                    Analista Programador en Instituto Tecnológico CTC Colonia (2021-Actualidad)
                </Typography>
                <br />
                <Typography variant='h4'>
                    Actividades Extracurriculares
                </Typography>
                <Typography variant='body1'>
                    Coro liceal (2016-2019)
                </Typography>
                <Typography variant='h4'>
                    Participaciones
                </Typography>
                <Typography variant='body1'>
                    Decimonoveno Modelo Internacional de UNESCO, Instituto José Hernández, Repúlica Argentina.
                </Typography>
            </Grid>
        </Grid>
    );
}
