import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hamburger from './components/Hamburger';
import Home from './pages/Home';
import Map from './pages/Map';
import About from './pages/About';
import Analyse from './pages/Analyse';
import Eindruecke from './pages/Eindruecke';
import Mitgestaltung from './pages/Mitgestaltung';
import Akteure from './pages/Akteure';
import Visionen from './pages/Visionen';
import { NavProvider } from './context/nav_context';

function App() {
    return (
        <Router>
            {/* <Hero /> */}
            <NavProvider>
                <Navbar />
                <Hamburger />
            </NavProvider>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/map'>
                    <Map />
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
            {/* <Footer /> */}
        </Router>
    );
}

export default App;
