import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import AddService from './components/AddServiceComponent/AddService';
import Footer from './components/FooterComponent/Footer';
import ForgotPassword from './components/ForgotPasswordComponent/ForgotPassword';
import Homepage from './components/HomepageComponent/Homepage';
import Login from './components/LoginComponent/Login';
import Profile from './components/ProfileComponent/Profile';
import Signup from './components/SignupComponent/Signup';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './PrivateRoute';
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/resetPassword" component={ForgotPassword} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/addService" component={AddService} />
        </Switch>
        </AuthProvider>
        </Router>  
        <Footer/>
    </>
  );
}

export default App;
