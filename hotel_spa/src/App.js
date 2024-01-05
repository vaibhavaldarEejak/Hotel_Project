import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './Pages/Home';
import Hotel from './Pages/Hotel';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import BookingPage from './Pages/BookingPage';
import LoginPage from './Pages/LoginPage';
import Footer from './components/Footer';


import './App.css';
import DeAlaraBaga from './Pages/HotelPage/DeAlaraBaga';
import DeAlaraCalangute from './Pages/HotelPage/DeAlaraCalangute';

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/hotels' element={<Hotel />} />
          <Route path='/dealara_Baga' element={<DeAlaraBaga />} />
          <Route path='/dealara_Calangute' element={<DeAlaraCalangute />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/booking_engine' element={<BookingPage />} />
        <Route path='/login' element={<LoginPage />} />

      </Routes>
      <Footer />

    </div>
  );
}

export default App;
