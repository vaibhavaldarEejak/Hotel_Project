import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import BookingPage from './Pages/BookingPage';
import LoginPage from './Pages/LoginPage';
import Footer from './components/Footer';


import './App.css';

function App() {
  return (
    <div className="App">
    
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/booking_engine' element={<BookingPage />} />
          <Route path='/login' element={<LoginPage />} />

        </Routes>
      <Footer />
    
    </div>
  );
}

export default App;
