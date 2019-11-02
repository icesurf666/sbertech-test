import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import Box from '@material-ui/core/Box';
import {withRouter} from 'react-router-dom'
import TablePreview from '../../components/tablePreview';
import TableSelect from '../../components/tableSelect';
import {getEmployeeRow} from '../../redux/reducers/list/actions';


class Tables extends Component {
    handleClick = (row) => {
        this.props.getEmployeeRow(row);
    };
    render() {
        const {selectedEmployeeRow, employees} = this.props;

        console.log(selectedEmployeeRow, employees);
        return (
            <React.Fragment>
                    <Box display="flex" justifyContent="space-between" bgcolor="background.paper">
                        <TableSelect
                            selectedRow={selectedEmployeeRow}
                            employees={employees}
                            handleClick={this.handleClick}
                        />
                        { selectedEmployeeRow ?
                            <TablePreview
                                selectedRow={selectedEmployeeRow}
                            /> : null
                        }
                    </Box>
            </React.Fragment>
        );
    }
}
const mapStateToProps = ({list}) => {
    return {
        employees: list.employees,
        dataEmployees: list.dataEmployees,
        selectedEmployeeRow: list.selectedEmployeeRow
    }
};
function mapDispatchToProps (dispatch) {
    return {
        getEmployeeRow: (row) => dispatch(getEmployeeRow(row))
    }
}

// export default compose(
//     withRouter,
//     connect(mapStateToProps)(Tables)
// );
export default connect(mapStateToProps, mapDispatchToProps)(Tables);
