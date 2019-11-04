import React from 'react';
import { AppBar, Toolbar, Container, CssBaseline } from '@material-ui/core';
import {Route, Switch} from 'react-router-dom';
import {TablesPage} from '../TablesPage';
import FormCont from '../../containers/Form';
import Options from '../../containers/Options';

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