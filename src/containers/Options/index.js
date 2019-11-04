import React, {Component} from 'react';
import {connect} from "react-redux";
import {Paper, Grid} from '@material-ui/core';
import EmployeeOptions from '../../components/EmployeeOptions';
import TableSelect from '../TableSelect';
import {getEmployeeCode, removeEmployee, editEmployee} from '../../redux/reducers/list/actions';


class Options extends Component {
    handleClick = (row) => {
        this.props.getEmployeeCode(row);
    };
    handleRemove = (id) => {
        this.props.removeEmployee(id);
    }
    handleEdit = (newData) => {
        this.props.editEmployee(newData);
    }
    render() {
        const {listOfEmployees, selectedEmployeeCode} = this.props;
        return (
            <React.Fragment>
                <Grid container direction="row" spacing={3} style={{marginTop: '20px'}}>
                    <Grid item md={3} >
                        <Paper>
                            <TableSelect
                                selectedCode={selectedEmployeeCode}
                                listOfEmployees={listOfEmployees}
                                handleClick={this.handleClick}
                            />
                        </Paper>
                    </Grid>
                    <Grid item md={8}>
                        <Paper>
                        { selectedEmployeeCode ?
                            <EmployeeOptions 
                                selectedCode={selectedEmployeeCode}
                                listOfEmployees={listOfEmployees}
                                handleRemove={this.handleRemove}
                                handleEdit={this.handleEdit}
                            /> : null
                        }
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}
const mapStateToProps = ({list}) => {
    return {
        listOfEmployees: list.listOfEmployees,
        dataEmployees: list.dataEmployees,
        selectedEmployeeCode: list.selectedEmployeeCode
    }
};
function mapDispatchToProps (dispatch) {
    return {
        getEmployeeCode: (row) => dispatch(getEmployeeCode(row)),
        removeEmployee: (id) => dispatch(removeEmployee(id)),
        editEmployee: (newData) => dispatch(editEmployee(newData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);
