import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Projectdetails from './components/projects/Projectdetails';
import Signin from './components/authentication/Signin';
import Signup from './components/authentication/Signup';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={Projectdetails} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
