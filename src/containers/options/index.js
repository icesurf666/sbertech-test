import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import Box from '@material-ui/core/Box';
import {withRouter} from 'react-router-dom'
import EmployeeOptions from '../../components/employeeOptions';
import TableSelect from '../../components/tableSelect';
import {getEmployeeCode} from '../../redux/reducers/list/actions';
import Container from '@material-ui/core/Container';

class Options extends Component {
    handleClick = (row) => {
        this.props.getEmployeeCode(row);
    };
    render() {
        const {listOfEmployees, selectedEmployeeCode} = this.props;
        return (
            <React.Fragment>
                <Container maxWidth="lg">
                    <Box display="flex" justifyContent="space-between" bgcolor="background.paper">
                        <TableSelect
                            selectedCode={selectedEmployeeCode}
                            listOfEmployees={listOfEmployees}
                            handleClick={this.handleClick}
                        />
                        { selectedEmployeeCode ?
                            <EmployeeOptions 
                                selectedCode={selectedEmployeeCode}
                            /> : null
                        }
                    </Box>
                </Container>
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
