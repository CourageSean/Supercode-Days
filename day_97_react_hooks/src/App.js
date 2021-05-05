import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from "react";
import './App.css';
import Contacts from "./components/Contacts";
import Counter from "./components/Counter";
import LogIn from "./components/LogIn";
import Navigation from "./components/Navigation";
import AppState from "./contexts/appState";
import Api from "./components/Api";

function App() {
  const [isLight, changeIsLight] = useState(true)
  return (
    <div className="App">
      <Router>
        <AppState>
          <div>
            <Navigation />

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/" exact>
                <Counter isLight={isLight} changeIsLight={changeIsLight} />
              </Route>
              <Route path="/contacts">
                <Contacts isLight={isLight} changeIsLight={changeIsLight} />
              </Route>
              <Route path="/login">
                <LogIn />
              </Route>
              <Route path="/api">
                <Api />
              </Route>
            </Switch>
          </div>
        </AppState>
      </Router>
    </div>
  );
}

export default App;
