import React,  {useContext} from 'react'
import { LoginContext } from '../../context/AuthContext';
import Login from './login/Login';
import Signup from './signup/Signup';

function Auth() {
    const { signup } = useContext(LoginContext);
  return (
      <div>
          {signup ? <Login /> : <Signup />}
    </div>
  )
}

export default Auth