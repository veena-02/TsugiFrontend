import React from 'react'
import { Switch,Redirect, Route, BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'
import ContactUs from './ContactUs'
import UserProfile from './UserProfile'
import Calendar from './Calendar'
const App=()=>{
  return(
    <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/contact' component={ContactUs} />
      <Route exact path='/userprofile' component={UserProfile} />
      <Route exact path='/calendar' component={Calendar} />
      <Redirect to='/' />
    </Switch>
    </>
  );
}
export default App;

