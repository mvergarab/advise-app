import { useField } from 'formik';
import {
  StyledTextInput,
  StyledLabel,
  DoubleButton,
  StyledFormButton,
  ErrorMsg
} from "./../components/Styles";

export const TextInput = ({...props}) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <StyledLabel htmlFor = {props.name}>
        {props.label}
      </StyledLabel>
      <StyledTextInput
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? (
          <ErrorMsg>{meta.error}</ErrorMsg>
      ): (
        <ErrorMsg style={{visibility: "hidden"}}>.</ErrorMsg>
      )}
    </div>
  );
}
