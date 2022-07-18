import {
  StyledTextInput, StyledFormArea,
  StyledFormButton, StyledLabel,
  StyledTitle, colors
} from './../components/Styles';

import { Formik, Form } from 'formik';

const Login = () => {
  return (
    <div>
       <StyledFormArea>
        <StyledTitle color = { colors.theme }
        size = {30}>
          Log in please
        </StyledTitle>
        <Formik>
          {() = > (
            <Form>

            </Form>
          )}
        </Formik>
       </StyledFormArea>

    </div>
  )
};

export default Login;
