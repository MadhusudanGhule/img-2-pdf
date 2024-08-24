import React from 'react'
import './App.css';
import NavHeader from './components/NavHeader/NavHeader'
import ImageUploader from './components/ImageUploader/ImageUploader'
import SocialFooter from './components/NavHeader/SocialFooter'
import About from './components/About/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DeveloperContact from './components/DeveloperContact/DeveloperContact';
import Services from './components/Services/Services';
import CreateReport from './components/InventoryReport/CreateReport'
import Start from './components/InventoryReport/Start';
import ReportSteps from './components/InventoryReport/ReportSteps';
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavHeader />
          <Routes>
            <Route path="/" element={<ImageUploader />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<DeveloperContact />} />
            <Route path="/services" element={<Services />} />
            <Route path='/report' element={<CreateReport />} />
            <Route path='/report/start' element={<Start />} />
            <Route path='/report/start/edit' element={<ReportSteps />} />
          </Routes>
          <SocialFooter />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
