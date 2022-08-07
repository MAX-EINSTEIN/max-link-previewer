import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Preview from './pages/Preview';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview/" element={<Preview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

