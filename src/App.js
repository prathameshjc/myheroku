import React from 'react';
import Hrlogin from './component/Hrlogin'
import {BrowserRouter as Router,Switch,  Route} from 'react-router-dom'
import Datajc from './component/Datajc';
import Infojc from './component/Infojc';

function App() {
  return (
    <div className="App">
      {/* <Hrlogin/> */}
      <Router>
      <Switch>
      <Route exact={true} path='/' component={Login}/>
      <Route exact={true} path='/datajc' component={Datajc}/>
      <Route exact={true} path='/infojc' component={Infojc}/>
      </Switch>
      </Router>

    </div>
  );
}
export default App;
