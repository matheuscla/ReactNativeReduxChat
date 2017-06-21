import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormRegister from './components/FormRegister';

export default props => (
  <Router>
    <Scene key="formLogin" component={ FormLogin } title="Login" />
    <Scene key="formRegister" component={ FormRegister } title="Register" />
  </Router>
)
