import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Anasayfa from './components/Anasayfa';
import KitapDetay from './components/KitapDetay';
import CreateKitap from './components/CreateKitap';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Anasayfa} />
        <Route exact path="/detail/:id" component={KitapDetay} />
        <Route exact path="/create" component={CreateKitap} />
      </Router>

    );
  }
}

export default App;
