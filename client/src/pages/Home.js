import {StyledTitle, StyledSubTitle, StyledButton,
DoubleButton } from "./../components/Styles";

const Home = () => {
  return (
    <div>
       <div>

       </div>
       <StyledTitle size={65}>
         Welcome to Advise
       </StyledTitle>
       <StyledSubTitle size={27}>
         Value your time
       </StyledSubTitle>
       <DoubleButton>
          <StyledButton to="/login">Login</StyledButton>
          <StyledButton to="/signup">Signup</StyledButton>
       </DoubleButton>
    </div>
  );
}

export default Home;
