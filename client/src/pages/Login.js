import {
  StyledTextInput, StyledFormArea,
  StyledFormButton, StyledLabel,
  StyledTitle, colors, DoubleButton
} from './../components/Styles';

import { Formik, Form } from 'formik';
import { TextInput } from './../components/FormLib';
import * as Yup from 'yup';

const Login = () => {
  return (
    <div>
       <StyledFormArea>
        <StyledTitle color = { colors.theme }
        size = {30}>
          Log in please
        </StyledTitle>
        <Formik
          initialValues = {{
            email: "",
            password: ""
          }}
          validationSchema = {
            Yup.object({
                email: Yup.string()
                  .email("Invalid email")
                  .required("Required"),
                password: Yup.string().min(8, "Password is too short")
                  .min(8, "Password is too short")
                  .max(30, "Password is too long")
                  .required("Required")
            })
          }
          onSubmit={(values, {setSubmitting}) => {
            console.log(values);
          }}
        >

          {() => (
            <Form>
                <TextInput
                  name = "email"
                  type = "text"
                  label = "Email Address"
                  placeholder = "oliver@example.com"
                />
                <TextInput
                  name = "password"
                  type = "password"
                  label = "Password"
                  placeholder = "**********"
                />
                <DoubleButton>
                  <StyledFormButton type = "submit"> Login</StyledFormButton>
                </DoubleButton>
            </Form>
          )}
        </Formik>
       </StyledFormArea>

    </div>
  )
};

export default Login;
