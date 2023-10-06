import './App.css';
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainProduct from './Components/Product/MainProduct';
import MainCategory from './Components/Category/MainCategory';
import { Routes, Route } from 'react-router-dom';
import FilterProduct from './Components/Category/FilterProduct';
import ShowProduct from './Components/Product/ShowProduct';
import Gallery from './Components/Gallery/MainGallery';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<MainCategory />} />
        <Route path='/Category/:id' element={<FilterProduct/>} />
        <Route path='/ShowProduct/:id' element={<ShowProduct/>} />
      </Routes>
      
      {/*
      <Routes>
        <Route path='/' element={<MainProduct />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Gallery />} />
      </Routes>*/}

    </div>
  );
}

export default App;
