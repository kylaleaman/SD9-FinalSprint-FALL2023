import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Shop from './components/shop';
import Cart from './components/cart';
import Outfits from './components/outfits'
import './App.css'; 
import Header from './components/app/header';
import Footer from "./components/app/footer";

function App() {
    return (
        
        <Router>
            <div className={"app"}>
                <Header/>
            </div>
            <div>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/outfits" element={<Outfits />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
