import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Categories from './component/categories';
import Navbar from './component/Navbar/NavBar';
import Books from './component/Books/Books';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<Books />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
