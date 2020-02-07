import React from 'react';
import './App.css';
import Homepage from './Homepage';
import Blog from './Blog';
import AddictionServices from './AddictionServices';
import UnderConstruction from './UnderConstruction';
import {Provider} from "react-redux";
import store from "./redux/store";

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    const App = () => (

      <div className="App">
        <Provider store = {store}>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/blog/:blogId' component={Blog}/>
            <Route exact path='/drug-alcohol-treatment-rehabilitation-support-aftercare' component={AddictionServices}/>
            <Route exact path='/under-construction' component={UnderConstruction}/>
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