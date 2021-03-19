import logo from './logo.svg';
import './App.css';
import BlogsList from './components/BlogsList';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import Contact from './components/Contact'
import Nav from './components/Nav';
import BlogDetails from './components/BlogDetails';
import Counter from './components/Counter';
import NewsList from './components/newsApi/NewsList';
function App() {
  return (
    <div className="App">

      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contacts" exact>
          <Contact />
        </Route>
        <Route path="/blogs" exact>
          <BlogsList />
        </Route>
        <Route path="/blogs/:blog" exact>
          <BlogDetails />
        </Route>
        <Route path="/counter">
          <Counter myCounter='99' />
        </Route>
        <Route path="/news">
          <NewsList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
