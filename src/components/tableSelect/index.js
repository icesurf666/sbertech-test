import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux';
import {getEmployeeCode} from '../../redux/reducers/list/actions';

const tableHead = ['Имя', 'Фамилия'];

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        cursor: 'pointer'
    }
});


const mapStateToProps = ({list}) => {
    return {
        listOfEmployees: list.listOfEmployees,
        selectedEmployeeCode: list.selectedEmployeeCode
    }
};
function mapDispatchToProps (dispatch) {
    return {
        getEmployeeCode: (row) => dispatch(getEmployeeCode(row))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(function TableSelect (props) {
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
                    {props.listOfEmployees ? props.listOfEmployees.map(employe => (
                        <TableRow
                            key={employe.personNumber}
                            onClick={() => {
                                props.getEmployeeCode(employe)
                            }}
                            >
                            <TableCell align="center">{employe.name}</TableCell>
                            <TableCell align="center">{employe.surName}</TableCell>
                        </TableRow>
                    )) : null}
                </TableBody>
            </Table>
        </Paper>
    );
}
)


