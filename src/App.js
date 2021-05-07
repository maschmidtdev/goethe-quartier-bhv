import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Analyse from './pages/Analyse';
import Eindruecke from './pages/Eindruecke';
import Mitgestaltung from './pages/Mitgestaltung';
import Akteure from './pages/Akteure';
import Visionen from './pages/Visionen';

function App() {
  return (
    <Router>
      <Hero />
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/analyse'>
          <Analyse />
        </Route>
        <Route exact path='/eindruecke'>
          <Eindruecke />
        </Route>
        <Route exact path='/mitgestaltung'>
          <Mitgestaltung />
        </Route>
        <Route exact path='/akteure'>
          <Akteure />
        </Route>
        <Route exact path='/visionen'>
          <Visionen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
