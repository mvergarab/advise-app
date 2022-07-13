import {StyledContainer} from './components/Styles';
import  Home  from './pages/Home';

import {
  BrowserRouter as Router,
  Swtch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <StyledContainer>
        <Home/>
      </StyledContainer>
    </Router>
  );
}

export default App;
