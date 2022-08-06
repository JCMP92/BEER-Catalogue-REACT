import './App.css';
import Navbar from './Components/Navbar';
import Favorites from './Pages/Favorites';
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
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
