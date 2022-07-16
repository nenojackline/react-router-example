import "./styles.css";

import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

//other
const navStyle = {
  borderBottom: "2px solid black",
  display: "flex",
  flexDirection: "row",
  padding: "1rem"
};

function Navbar() {
  return (
    <div className="navbar" style={navStyle}>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

const page1 = {
  width: "100%",
  height: "90vh",
  background: "yellow",
  fontSize: "2rem"
};

const page2 = {
  width: "100%",
  height: "90vh",
  background: "grey",
  fontSize: "2rem"
};

const page3 = {
  width: "100%",
  height: "90vh",
  background: "orange",
  fontSize: "2rem"
};

function Home() {
  return <div style={page1}>Home page</div>;
}

function About() {
  return <div style={page2}>About page</div>;
}

function Contact() {
  return <div style={page3}>Contact us page</div>;
}

export default App;
