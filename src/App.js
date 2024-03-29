import "./App.css";
import * as React from 'react';
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import NextTopLoader from "nextjs-toploader";

function App() {
  return (
    <div className="dark:bg-gray-900">
      <Router>
        <NextTopLoader
          color="green"
          easing="ease-in-out"
          height={5}
          shadow={false}
          showSpinner={false}
          crawl={false}
          speed={400}
        />
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </Container>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
