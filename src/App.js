
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router';
import Menu from './components/Menu';
import Help from './components/Help';
import HomePage from './components/HomePage'
import BigMealss from './categories/BBigMeals';
import Streetwise from './categories/Streetwise'
import SpecialSnacks from './categories/SpecialSnacks'
import Login from './components/Login';
import Cart from './components/Cart';


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/help" element={<Help />} />
        <Route path='/menu/bigMeals' element={<BigMealss />} />
        <Route path='/menu/streetwise' element={<Streetwise />} />
        <Route path='/menu/specialSnacks' element={<SpecialSnacks />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
