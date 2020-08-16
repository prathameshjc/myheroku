import React from 'react';
import Hrlogin from './component/Hrlogin'
import {BrowserRouter as Router,Switch,  Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Hrlogin/> */}
      <Router>
      <Switch>
      <Route exact={true} path='/' component={Hrlogin}/>
      </Switch>
      </Router>

    </div>
  );
}
export default App;
