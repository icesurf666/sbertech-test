import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// const selectEmployees = [
//     {
//         personNumber: 1,
//         surName: 'Kazantsev',
//         name: 'Pavel'
//     }
// ];
const tableHead = ['Имя', 'Фамилия'];

const useStyles = makeStyles({
    root: {
        width: '20%',
        overflowX: 'auto',
    },
    table: {
        cursor: 'pointer'
    }
});



export default function TableSelect (props) {
    const classes = useStyles();
    function renderTableHead() {
        return tableHead.map((tableItem) => {
            return (
                <TableCell key={tableItem} align="center">{tableItem}</TableCell>
            )
        })
    }
    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {renderTableHead()}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.listOfEmployees.map(employe => (
                        <TableRow
                            key={employe.personNumber}
                            onClick={() => {
                                props.handleClick(employe)
                            }}
                            >
                            <TableCell align="center">{employe.name}</TableCell>
                            <TableCell align="center">{employe.surName}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}


