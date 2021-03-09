import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Login from '../components/login/Login';
import Menu from '../components/menu/Menu';
import misc from '../utils/misc'

const ProtectedRoute = ({ component: Component, isAuth ,  ...rest }) => (
  <Route {...rest} render={(props) => (
    (misc.verifyAuth() === true)
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
  )} />
);

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        {/* <Route exact path="/menu" component={Menu}/> */}
        <ProtectedRoute exact path="/menu" component={Menu}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;