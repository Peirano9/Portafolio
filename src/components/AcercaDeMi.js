import { Grid, Typography } from '@mui/material';
import logo from './1.jpeg';

export function AcrecaDeMi() {
    return (
        <Grid 
            backgroundColor='#82b1ff'
            className='container' 
            container direction="row" 
            justifyContent="space-evenly" 
            alignItems="center" 
            padding= '50px'
        >
            
            <Grid item xs='auto' color='white'>
                <Typography variant='h1'>
                    Agustín Peirano
                </Typography>
                <Typography variant='body1'>
                    Hola, soy Agustín Peirano. Tengo 20 años, nací el 09/01/2002 y actualmente vivo en Nueva Palmira. <br/>
                    Estudié en la escuela N°7 y en el Liceo Dr.Medulio Perez Fontana de la ciudad de Nueva Palmira.<br/>
                    Estudio la carrera de Analista Programador en "Enseñanza Técnica Profesional" (CTC) de la ciudad de <br/>
                    Colonia del Sacramento. <br/>
                    He trabajado en una panadería repartiendo, atendiendo y haciendo trabajo de elaboración; <br/>
                    En un taller mecánico de camiones haciendo trabajos de lija y pintura; <br/>
                    En un barco como parte del seguro de la mercadería; <br/>
                    Y actualmente soy delivery de medio turno en el restaurante 'El Viejo Tonn' de mi ciudad.
                </Typography>
            </Grid>
            <Grid item xs='auto'>
                <img src={logo} width={300} />
            </Grid>
        </Grid>
    );
}

