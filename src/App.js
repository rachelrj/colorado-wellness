import React from 'react';
import './App.css';
import Homepage from './Homepage';
import Blog from './Blog';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    const App = () => (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/blog' component={Blog}/>
        </Switch>
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