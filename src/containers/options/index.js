import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {Paper, Grid} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import EmployeeOptions from '../../components/employeeOptions';
import TableSelect from '../../components/tableSelect';
import {getEmployeeCode} from '../../redux/reducers/list/actions';


class Options extends Component {
    handleClick = (row) => {
        this.props.getEmployeeCode(row);
    };
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
        getEmployeeCode: (row) => dispatch(getEmployeeCode(row))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);
