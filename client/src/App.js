import {StyledContainer} from './components/Styles';
import  Home  from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import {
  BrowserRouter as Router,
  Swtch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <StyledContainer>
        <Login />
      </StyledContainer>
    </Router>
  );
}

export default App;
