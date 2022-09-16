import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import SearchEngine from "./FrontEnd/components/SearchEngine/SearchEngine";
import Contact from "./FrontEnd/components/Contact/Contact";
import Crud from "./FrontEnd/components/Crud/Crud";
import Footer from "./FrontEnd/Layouts/Footer/Footer";
import Header from "./FrontEnd/Layouts/Header/Header";
import Main from "./FrontEnd/Layouts/Main/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Header />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="SearchEngine" element={<SearchEngine />}></Route>
            <Route path="Contact" element={<Contact />}></Route>
            <Route path="Crud" element={<Crud />}></Route>

            <Route path="*" element={<Navigate replace to="/" />}></Route>
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
