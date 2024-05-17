import { Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
import About from '../pages/AboutPage';
import Contact from '../pages/ContactPage';
import Nav from './Nav';
import Footer from './Footer';
import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';

export default function MainComponent() {
  return (
    <>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/product/:id" element={<ProductPage/>} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer />
    </>
  )
}
