import './App.css';
import Calculator from './calculator/calculator';
import CurrencyConverter from './currencyconverter/currencyConverter';
import Navbar from './globalComponents/navbar';
import Todo from './todo/todo';
import { Routes, Route } from 'react-router-dom';
import Weather from './weather/weather';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/todo' element={<Todo />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/currencyconverter' element={<CurrencyConverter/>} />
        <Route path='/weather' element={<Weather/>} />
        <Route path='/' element={<Todo />} />
      </Routes>

    </div>
  );
}

export default App;
