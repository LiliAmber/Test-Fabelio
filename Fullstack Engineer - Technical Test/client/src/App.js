import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <Navbar />
          <SearchPage />
        </Route>
        <Route path="/">
          <Navbar />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
