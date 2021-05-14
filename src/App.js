import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/FooterComponent/Footer";
import ForgotPassword from "./components/ForgotPasswordComponent/ForgotPassword";
import Homepage from "./components/HomepageComponent/Homepage";
import Login from "./components/LoginComponent/Login";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/ProfileComponent/Profile";
import Signup from "./components/SignupComponent/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/resetPassword" component={ForgotPassword} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </AuthProvider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
