import React, {Component} from 'react';
import {Route, withRouter, Switch} from 'react-router-dom';
import TableSelect from "../tableSelect";
import Tables from '../../containers/tables';
import Header from "../header";
import FormAdd from '../formAdd';

class App extends Component {
    render() {
        const routes = (
            <Switch>
                <Route path="/tables" component={Tables}/>
                <Route path="/" exact component={Tables}/>
                <Route path="/formAdd" exact component={FormAdd}/>
            </Switch>
        );
        return (
            <div className="App">
                <Header/>
                {routes}
            </div>
        );
    }
}

export default withRouter(App);
