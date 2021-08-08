import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
