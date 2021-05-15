import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddService from "./components/AddServiceComponent/AddService";
import Footer from "./components/FooterComponent/Footer";
import ForgotPassword from "./components/ForgotPasswordComponent/ForgotPassword";
import Homepage from "./components/HomepageComponent/Homepage";
import Login from "./components/LoginComponent/Login";
import Profile from "./components/ProfileComponent/Profile";
import Signup from "./components/SignupComponent/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Account from "./components/ProfileComponent/Account";
import About from "./components/AboutUS/About";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <AuthProvider>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/about" component={About} />

              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/profile/account" component={Account} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/resetPassword" component={ForgotPassword} />
              <Route exact path="/signup" component={Signup} />
              <PrivateRoute exact path="/addService" component={AddService} />
            </Switch>
            <Footer />
          </AuthProvider>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
