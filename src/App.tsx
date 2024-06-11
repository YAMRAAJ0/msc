import './App.css';
import Home from './components/minePage/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Courses from './components/minePage/Courses';
import Results from './components/minePage/Results';
import Blog from './components/minePage/Blog';
import About from './components/minePage/About';
import Navbar from './components/minePage/Nav';
import Footer from './components/minePage/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/results" element={<Results />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
