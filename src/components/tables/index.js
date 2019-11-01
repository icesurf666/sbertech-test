import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import Box from '@material-ui/core/Box';
import {withRouter} from 'react-router-dom'
import TablePreview from '../tablePreview';
import TableSelect from '../tableSelect';
import {getEmployeeCode, getDataEmployee} from '../../redux/reducers/list/actions';


class Tables extends Component {
    handleClick = (code) => {
        this.props.getEmployeeCode(code);
        this.props.getDataEmployee(code);
    };
    render() {
        const {listOfEmployees, selectedEmployeeCode, dataEmployee} = this.props;
        return (
            <React.Fragment>
                    <Box display="flex" justifyContent="space-between" bgcolor="background.paper">
                        <TableSelect
                            selectedCode={selectedEmployeeCode}
                            listOfEmployees={listOfEmployees}
                            handleClick={this.handleClick}
                        />
                        <TablePreview
                            dataEmployee={dataEmployee}
                            selectedCode={selectedEmployeeCode}
                        />
                    </Box>
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
        getDataEmployee: (code) => dispatch(getDataEmployee(code)),
        getEmployeeCode: (code) => dispatch(getEmployeeCode(code))
    }
}

// export default compose(
//     withRouter,
//     connect(mapStateToProps)(Tables)
// );
export default connect(mapStateToProps, mapDispatchToProps)(Tables);
