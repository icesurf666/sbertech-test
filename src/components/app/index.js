import React, {Component} from 'react';
import {Route, withRouter, Switch} from 'react-router-dom';
import Options from "../../containers/options";
import Tables from '../../containers/tables';
import Header from "../header";
import FormCont from '../../containers/form';

class App extends Component {
    render() {
        const routes = (
            <Switch>
                <Route path="/tables" component={Tables}/>
                <Route path="/" exact component={Tables}/>
                <Route path="/options" component={Options}/>
                <Route path="/add" exact component={FormCont}/>
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
