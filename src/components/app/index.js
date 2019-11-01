import React, {Component} from 'react';
import {Route, withRouter, Switch} from 'react-router-dom';
import TableSelect from "../tableSelect";
import Tables from '../tables';
import Header from "../header";

class App extends Component {

    onRowSelect = row => {
        console.log(row);
    };
    render() {
        const routes = (
            <Switch>
                <Route path="/tables" component={Tables}/>
                <Route path="/" exact component={TableSelect}/>
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
