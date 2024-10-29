import './App.css';
import Navigation from './components/navigation/Navigation';
import Footer from "./components/footer/Footer";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Shops from './pages/Shops/Shops';
import Restaurants from './pages/Restaurants/Restaurants';
import Mallmap from './pages/Mallmap/Mallmap';
import Positioninfo from './pages/Positioninfo/Positioninfo';

function App() {
  return (
    <>
    <Router>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/shops' element={<Shops/>}/>
          <Route path='/restaurants' element={<Restaurants/>}/>
          <Route path='/mallmap' element={<Mallmap/>}/>
          <Route path='/positioninfo/service/:id' element={<Positioninfo entityType="service" />} />
          <Route path='/positioninfo/shop/:id' element={<Positioninfo entityType="shop" />} />
          <Route path='/positioninfo/restaurant/:id' element={<Positioninfo entityType="restaurant" />} />
        </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
