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
import EmbeddedLab from './embeddedLab';
import FlowLab from './flowLab';
import MachineLab from './machineLab';
import ControlLab from './controlLab';
import ProcessLab from './processLab';
import AutomationLab from './automationLab';
import IiLab from './iiLab';
import ElectronicsLab from './electronicsLab';
import Indoor from './Indoor';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Main />}/>
          <Route  path="home" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/transLab" element={<TransLab />} />
          <Route path="/flowLab" element={<FlowLab />} />
          <Route path="/machineLab" element={<MachineLab />} />
          <Route path="/controlLab" element={<ControlLab />} />
          <Route path="/processLab" element={<ProcessLab />} />
          <Route path="/automationLab" element={<AutomationLab />} />
          <Route path="/embeddedLab" element={<EmbeddedLab/>} />
          <Route path="/iiLab" element={<IiLab />} />
          <Route path="/electronicsLab" element={<ElectronicsLab/>} />
          <Route path="/indoor" element={<Indoor/>} />



          
    </Routes>
    </BrowserRouter>

  );
}

export default App;
