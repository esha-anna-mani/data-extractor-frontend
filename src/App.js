import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Signup from './components/signup';
import Login from "./components/Login"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/"><Home/></Route>
      <Route path="/signup"><Signup /></Route>
      <Route path="/login"><Login /></Route>
    </BrowserRouter>

  );
}

export default App;
