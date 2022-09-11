import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import NavbarMain from "./FrontEnd/Layouts/Navbar/Navbar";
import Home from "./FrontEnd/components/Home/Home";
import SearchEngine from "./FrontEnd/components/SearchEngine/SearchEngine";
import Contact from "./FrontEnd/components/Contact/Contact";
import Crud from "./FrontEnd/components/Crud/Crud";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarMain />
        <Routes>
          <Route path="/" element={<Home />}></Route>
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
