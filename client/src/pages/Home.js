import {StyledTitle, StyledSubTitle, StyledButton } from "./../components/Styles";

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
       <StyledButton to="/login">Login</StyledButton>
       <StyledButton to="/signup">Signup</StyledButton>
    </div>
  );
}

export default Home;
