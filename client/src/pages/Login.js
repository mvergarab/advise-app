import {
  StyledTextInput, StyledFormArea,
  StyledFormButton, StyledLabel,
  StyledTitle, colors
} from './../components/Styles';

import { Formik, Form } from 'formik';
import { TextInput } from './../components/FormLib';

const Login = () => {
  return (
    <div>
       <StyledFormArea>
        <StyledTitle color = { colors.theme }
        size = {30}>
          Log in please
        </StyledTitle>
        <Formik>
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
            </Form>
          )}
        </Formik>
       </StyledFormArea>

    </div>
  )
};

export default Login;
