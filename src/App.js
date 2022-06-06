//import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout';
import Main from './main';
import Blogs from './Blogs';
import NoPage from './Nopage';
import Home from './Home';
import TransLab from './transLab';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Main />}/>
          <Route  path="home" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/transLab" element={<TransLab />} />
          
    </Routes>
    </BrowserRouter>

  );
}

export default App;
