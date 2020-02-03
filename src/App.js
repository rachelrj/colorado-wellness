import React from 'react';
import './App.css';
import Homepage from './Homepage';
import Blog from './Blog';
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
            <Route path='/blog' component={Blog}/>
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