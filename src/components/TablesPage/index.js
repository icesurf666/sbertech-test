import React from 'react';
import TableSelect from '../tableSelect';
import TablePreview from '../tablePreview';
import {Paper, Grid} from '@material-ui/core';

export const TablesPage = () => {
    return (
        <Grid container direction="row" spacing={3} style={{marginTop: '20px'}}>
            <Grid item md={2} >
                <Paper>
                    <TableSelect /> 
                </Paper>
            </Grid>
            <Grid item md={10}>
                <Paper>
                    <TablePreview />
                </Paper>
            </Grid>
        </Grid>
    )
}