import './App.css';
import MenuBar from './components/menuBar/MenuBar';
import MobileMenuModal from './components/menuBar/MobileMenuModal';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BlogList from './components/blog/BlogList';
import BlogPost from './components/blog/BlogPost';

function App() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <BrowserRouter>
      <MenuBar setIsMenuClicked={setIsMenuClicked} />

      <MobileMenuModal
        open={isMenuClicked}
        setIsMenuClicked={setIsMenuClicked}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
