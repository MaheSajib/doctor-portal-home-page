import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import { createContext, useState } from 'react';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddDoctor from './components/AddDoctor/AddDoctor';
import AllPatients from './components/AllPatients/AllPatients';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router >
        <Switch>
          <Route exact path ="/">
            <Home></Home>
          </Route>
          <Route exact path ="/allPatients">
            <AllPatients></AllPatients>
          </Route>
          <Route path ="/dashboard/appointment">
            <Dashboard></Dashboard>
          </Route>
          <Route path ="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
