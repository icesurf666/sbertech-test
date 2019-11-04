import React, {Component} from 'react';
import {connect} from "react-redux";
import Container from '@material-ui/core/Container';
import FormAdd from '../../components/FormAdd'
import {addEmployee} from '../../redux/reducers/list/actions';


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
