import {
  StyledTitle,
  StyledSubTitle,
  StyledButton,
  DoubleButton,
  StyledFormArea,
  colors
} from "./../components/Styles";

  const Dashboard = () => {
    return (
      <div>
         <StyledFormArea bg={colors.dark2}>
          <StyledTitle size={65}>
            Welcome to Advise
          </StyledTitle>
          <StyledSubTitle size={27}>
            Value your time
          </StyledSubTitle>
          <DoubleButton>
              <StyledButton to="#">Logout</StyledButton>
              <StyledButton to="/signup">Signup</StyledButton>
          </DoubleButton>
         </StyledFormArea>
      </div>
    );
  }

  export default Dashboard;
