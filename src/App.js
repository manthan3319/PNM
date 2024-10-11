import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import EnvironmentServices from "./Components/EnvironmentServices/EnvironmentServices";
import Blogs from "./Components/Blogs/Blogs";
import Gallery from "./Components/Gallery/Gallery";
import ContactUs from "./Components/ContactUs/ContactUs";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service-details/:serviceName" element={<EnvironmentServices />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
