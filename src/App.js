import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Land from './Land';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Users from './components/Users';
import Contact from './components/Contact';
import Cakes from './components/Cakes';
import Clothes from './components/Clothes';
import Fruits from './components/Fruits';
import Flowers from './components/Flowers';
import Vegetables from './components/Vegetables';
import Drinks from './components/Drinks';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} /> {/* ✅ Matches Land nav */}
        <Route path="/users" element={<Users />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/clothes" element={<Clothes />} /> {/* ✅ Matches Land nav */}
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/drinks" element={<Drinks />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
