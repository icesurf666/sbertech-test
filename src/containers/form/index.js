import React, {Component} from 'react';

import {connect} from "react-redux";

import FormAdd from '../../components/formAdd'
import {addEmployee} from '../../redux/reducers/create/actions';


class FormCont extends Component {
    handleSub = (data) => {
        this.props.addEmployee(data);
    };
    render() {
        const {arr} = this.props;
        return (
            <React.Fragment>
                <FormAdd arr={arr} handleSub={this.handleSub} />
            </React.Fragment>
        );
    }
}
const mapStateToProps = ({create}) => {
    return {
        arr: create.arr
    }
};
function mapDispatchToProps (dispatch) {
    return {
        addEmployee: (data) => dispatch(addEmployee(data))
    }
}

// export default compose(
//     withRouter,
//     connect(mapStateToProps)(Tables)
// );
export default connect(mapStateToProps, mapDispatchToProps)(FormCont);
