import './App.css';
import BeerDetails from './Components/BeerDetails';
import Navbar from './Components/Navbar';
import Catalogue from './Pages/Catalogue';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route exact path="/catalogue/:beerName" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
