import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {compose} from 'redux';
import Container from '@material-ui/core/Container';
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
                <Container maxWidth="sm">
                    <FormAdd arr={arr} handleSub={this.handleSub}  />
                </Container>
            </React.Fragment>
        );
    }
}
const mapStateToProps = ({list}) => {
    return {
        arr: list.arr
    }
};
function mapDispatchToProps (dispatch) {
    return {
        addEmployee: (data) => dispatch(addEmployee(data))
    }
}

// export default compose(
//     withRouter,
//     connect(mapStateToProps, mapDispatchToProps)(FormCont)
// );
export default connect(mapStateToProps, mapDispatchToProps)(FormCont);
