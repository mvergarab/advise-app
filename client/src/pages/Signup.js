import {
  StyledTextInput, StyledFormArea,
  StyledFormButton, StyledLabel,
  StyledTitle, colors, DoubleButton
} from './../components/Styles';

import { Formik, Form } from 'formik';
import { TextInput } from './../components/FormLib';
import * as Yup from 'yup';

const Signup = () => {
  return (
    <div>
       <StyledFormArea>
        <StyledTitle color = { colors.theme }
        size = {30}>
          Sign up
        </StyledTitle>
        <Formik
          initialValues = {{
            email: "",
            password: "",
            repeatPassword: "",
            dateOfBirth: "",
            name: ""
          }}
          validationSchema = {
            Yup.object({
                email: Yup.string()
                  .email("Invalid email")
                  .required("Required"),
                password: Yup.string().min(8, "Password is too short")
                  .min(8, "Password is too short")
                  .max(30, "Password is too long")
                  .required("Required"),
                name: Yup.string().required("Required"),
                dateOfBirth: Yup.date().required("Required"),
                repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Password must match")

            })
          }
          onSubmit={(values, {setSubmitting}) => {
            console.log(values);
          }}
        >

          {() => (
            <Form>
                <TextInput
                  name = "name"
                  type = "text"
                  label = "Your name"
                  placeholder = "Oliver Saton"
                />
                <TextInput
                  name = "dateOfBirth"
                  type = "date"
                  label = "birth date"
                />
                <TextInput
                  name = "password"
                  type = "password"
                  label = "Password"
                  placeholder = "**********"
                />
                <TextInput
                  name = "repeatPassword"
                  type = "password"
                  label = "Repeat Password"
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

export default Signup;
