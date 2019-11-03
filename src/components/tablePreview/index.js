import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {format, parseISO} from 'date-fns';

const tableHead = ['Фамилия', 'Имя', 'Отчество', 'Дата рождения',
'Табельный номер', 'Должность', 'Подразделение'];

const useStyles = makeStyles({
    root: {
        width: '75%',
        overflowX: 'auto',
    },
    table: {
        cursor: 'pointer'
    }
});



export default function TablePreview ({selectedCode}) {
    console.log(selectedCode);
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
                        <TableRow
                            key={selectedCode.personNumber}
                        >
                            <TableCell align="center">{selectedCode.name}</TableCell>
                            <TableCell align="center">{selectedCode.surName}</TableCell>
                            <TableCell align="center">{selectedCode.patronymic}</TableCell>
                            <TableCell align="center">{format(parseISO(selectedCode.dateOfBirth), 'yyyy-MM-dd')}</TableCell>
                            <TableCell align="center">{selectedCode.personNumber}</TableCell>
                            <TableCell align="center">{selectedCode.position}</TableCell>
                            <TableCell align="center">{selectedCode.subdivision}</TableCell>
                        </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );
}

