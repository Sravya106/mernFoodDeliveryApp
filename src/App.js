
import './App.css';
import Home from './Source/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './Source/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './Source/Signup.js';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/createuser' element={<Signup/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
