import React from 'react';
import './App.css';
import Homepage from './Homepage';
import Blog from './Blog';
import AddictionServices from './AddictionServices';
import UnderConstruction from './UnderConstruction';
import ServiceProvider from './Provider';
import JoinCollective from './JoinCollective';
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
            <Route path='/blog/:blogTitle' component={Blog}/>
            <Route exact path='/drug-alcohol-treatment-rehabilitation-support-aftercare' component={AddictionServices}/>
            <Route exact path='/under-construction' component={UnderConstruction}/>
            <Route path='/drug-alcohol-treatment-rehabilitation-support-aftercare/:providerId' component={ServiceProvider}/>
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