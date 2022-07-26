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

  const [emailReg, setEmailReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  const register = () => {
    Axios.post('http://localhost:3001/signup', {
      email: emailReg,
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
            setEmailReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange = {(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick = {register}> Register </button>
      </div>
    </>
  )
};

export default Signup;
