import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/catalog.jsx';
import Home from './pages/home.jsx'
import About from './pages/About.jsx'
import Admin from './pages/Admin.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './pages/Contact.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import GlobalProvider from './state/GlobalProvider.jsx';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
    <div className="App">
      
      <Navbar></Navbar>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/catalog' element={<Catalog></Catalog>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
    </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
