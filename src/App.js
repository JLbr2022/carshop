// import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { Container, Nav, Navbar } from "react-boostrap";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import SearchEngine from "./FrontEnd/components/SearchEngine/SearchEngine";
import Contact from "./FrontEnd/components/Contact/Contact";
import Crud from "./FrontEnd/components/Crud/Crud";
import NavbarMain from "./FrontEnd/Layouts/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarMain />}></Route>
          <Route path="SearchEngine" element={<SearchEngine />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
          <Route path="Crud" element={<Crud />}></Route>

          <Route path="*" element={<Navigate replace to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
