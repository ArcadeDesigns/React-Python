import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NoPage from './pages/NoPage'
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import './style/style.css';
import './style/app.css';
import { HelmetProvider } from 'react-helmet-async';



export default function App() {
  return (
    <div>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/services" element={<Service />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}