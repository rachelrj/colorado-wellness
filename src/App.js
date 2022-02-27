import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import Blog from './pages/Blog';
import FitnessServices from './pages/FitnessServices';
import UnderConstruction from './pages/UnderConstruction';
import ServiceProvider from './pages/Provider';
import JoinCollective from './pages/JoinCollective';
import {Provider} from "react-redux";
import store from "./redux/store";

import {
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    const App = () => (

      <div className="App">
        <Provider store = {store}>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/blog/:blogTitle' component={Blog}/>
            <Route exact path='/colorado-fitness' component={FitnessServices}/>
            <Route exact path='/under-construction' component={UnderConstruction}/>
            <Route path='/colorado-fitness/:providerId' component={ServiceProvider}/>
            <Route path='/join-collective' component={JoinCollective}/>
          </Switch>
        </Provider>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;