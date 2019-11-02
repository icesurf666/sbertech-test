import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import Box from '@material-ui/core/Box';
import {withRouter} from 'react-router-dom'
import TablePreview from '../../components/tablePreview';
import TableSelect from '../../components/tableSelect';
import {getEmployeeCode} from '../../redux/reducers/list/actions';


class Tables extends Component {
    handleClick = (row) => {
        this.props.getEmployeeCode(row);
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
                        { selectedEmployeeCode ?
                            <TablePreview
                                selectedCode={selectedEmployeeCode}
                            /> : null
                        }
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
        getEmployeeCode: (row) => dispatch(getEmployeeCode(row))
    }
}

// export default compose(
//     withRouter,
//     connect(mapStateToProps)(Tables)
// );
export default connect(mapStateToProps, mapDispatchToProps)(Tables);
