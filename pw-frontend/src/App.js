import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";
import Home from "./view/Home";
import Products from "./view/Products";
import Contact from "./view/Contact";
import Signin from "./view/Signin";
import Signup from "./view/Signup";
import Aboutus from "./view/Aboutus";
import AdminPanel from "./view/AdminPanel";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/aboutus" component={Aboutus} />
        <Route path="/contact" component={Contact} />
        <Route path="/adminpanel" component={AdminPanel} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
