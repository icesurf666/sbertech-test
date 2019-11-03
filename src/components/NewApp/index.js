import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { AppBar, Toolbar } from '@material-ui/core';
import {Route, Switch} from 'react-router-dom';
import {TablesPage} from '../TablesPage';
import FormCont from '../../containers/form';
import Options from '../../containers/options';

import MenuApp from '../MenuApp';

export const App = () => {
    const routes = (
        <Switch>
            <Route path="/" exact component={TablesPage}/>
            <Route path="/add" component={FormCont}/>
            <Route path="/options" component={Options}/>
        </Switch>
    );
    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <MenuApp />
                </Toolbar>
            </AppBar>
          <CssBaseline />
          <Container maxWidth="lg">
            {routes}
          </Container>
        </React.Fragment>
      );
}