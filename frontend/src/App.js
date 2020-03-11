import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Employer from './Employer';
import Jobseeker from './Jobseeker';
import Nomatch from './Nomatch';
import Navigationbar from './components/Navigationbar';

function App() {
  return (
    <React.Fragment>
      <Navigationbar />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/employer" exact component={Employer} />
            <Route path="/jobseeker" component={Jobseeker} />
            {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
            <Route component={Nomatch} />
          </Switch>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
