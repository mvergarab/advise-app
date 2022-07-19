import {StyledContainer} from './components/Styles';
import  Home  from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <StyledContainer>
        <Switch>
          <Route path="/signup">
            <Signup/>
          </Route>
        </Switch>
        <Dashboard/>
      </StyledContainer>
    </Router>
  );
}

export default App;
