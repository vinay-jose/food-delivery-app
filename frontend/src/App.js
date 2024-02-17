import './App.css';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Products from './components/layout/Products';
import Recipes from './components/layout/Recipes';
import About from './components/layout/About';
import Auth from './components/layout/Auth';
import PageNotFound from './components/utils/PageNotFound';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>      
      <Router basename="/food-delivery-app">
        <div>
          <Header/>
          <Navbar/>
        </div>
        <Routes>
            <Route path ="/" element={<Products/>}/>
            <Route path ="/login" element={<Auth/>}/>
            <Route path ="/signup" element={<Auth/>}/>
            <Route path ="/restaurants" element={<Products/>}/>
            <Route path ="/dishes" element={<Products/>}/>
            <Route path ="/recipes" element={<Recipes/>}/>
            <Route path ="/about" element={<About/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
