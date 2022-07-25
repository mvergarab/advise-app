import {
  StyledTextInput, StyledFormArea,
  StyledFormButton, StyledLabel,
  StyledTitle, colors, DoubleButton
} from './../components/Styles';

import { TextInput } from './../components/FormLib';
import * as Yup from 'yup';
import React, { useEffect, useState } from "react";
import Axios from 'axios'


const Signup = () => {

  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  const register = () => {
    Axios.post('https://localhost3001/signup', {
      username: usernameReg,
      password: passwordReg
    }).then((response) => {
      console.log(response);
    })
  };

  return (
    <>
      <div className="registration">
        <label>Email</label>
        <input
          type="text"
          onChange = {(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange = {(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Confirm Password</label>
        <input type="text"/>
        <button onClick = {register}> Register </button>
      </div>
    </>
  )
};

export default Signup;
