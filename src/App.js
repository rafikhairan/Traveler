import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/signin';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
