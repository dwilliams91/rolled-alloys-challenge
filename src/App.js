import './App.css';
import { ApplicationViews } from './ApplicationViews';
import { NavBar } from './nav/navBar';
import { Route, Redirect } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
     <ApplicationViews></ApplicationViews>
    </div>
  );
}

export default App;
