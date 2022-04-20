import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/register' element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
