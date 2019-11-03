import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux';
import {format, parseISO} from 'date-fns';

const tableHead = ['Фамилия', 'Имя', 'Отчество', 'Дата рождения',
'Табельный номер', 'Должность', 'Подразделение'];

const useStyles = makeStyles({
    root: {
        width: '100',
        overflowX: 'auto',
    }
});


const mapStateToProps = ({list}) => {
    return {
        listOfEmployees: list.listOfEmployees,
        selectedEmployeeCode: list.selectedEmployeeCode
    }
};

export default connect(mapStateToProps, null)(function TablePreview ({selectedEmployeeCode}) {
        console.log(selectedEmployeeCode);
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
                        { selectedEmployeeCode ?
                            <TableRow
                                key={selectedEmployeeCode.personNumber}
                            >
                                <TableCell align="center">{selectedEmployeeCode.name}</TableCell>
                                <TableCell align="center">{selectedEmployeeCode.surName}</TableCell>
                                <TableCell align="center">{selectedEmployeeCode.patronymic}</TableCell>
                                <TableCell align="center">{format(parseISO(selectedEmployeeCode.dateOfBirth), 'yyyy-MM-dd')}</TableCell>
                                <TableCell align="center">{selectedEmployeeCode.personNumber}</TableCell>
                                <TableCell align="center">{selectedEmployeeCode.position}</TableCell>
                                <TableCell align="center">{selectedEmployeeCode.subdivision}</TableCell>
                            </TableRow>
                            : null }
                    </TableBody>
                </Table>
            </Paper>
        );
    }
)
