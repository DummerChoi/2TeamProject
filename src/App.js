import React, {Component} from 'react';
import Every_React from './components/Every_React';
import { Route, Switch } from "react-router-dom";
import './App.css';

import 'bootstrap/dist/css/bootstrap.css'; 
import Home from './components/Home';
import About from './components/About';
import Room from './components/Room';
import Map from './components/Map';
import FAQ from './components/FAQ';
import FreeBoard from './components/FreeBoard';
import Sitemap from './components/Sitemap';
import Footer from './components/Footer';
import Login from './components/Login';


class App extends Component {
  render() {
    const fontStyle = {
      fontFamily: 'LeferiPoint-SpecialItalicA',
    };
    return (
      <div style={fontStyle}>
        <Every_React />
        <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/about" component={About} />
         <Route exact path="/room" component={Room} />
         <Route exact path="/map" component={Map} />
         <Route exact path="/faq" component={FAQ} />
         <Route exact path="/sitemap" component={Sitemap} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/freeboard" component={FreeBoard} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;