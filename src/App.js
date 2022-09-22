import "./App.css";
import { BrowserRouter } from "react-router-dom";

// import SearchEngine from "./FrontEnd/components/SearchEngine/SearchEngine";
// import Contact from "./FrontEnd/components/Contact/Contact";
// import Crud from "./FrontEnd/components/Crud/Crud";
// import Main from "./FrontEnd/Layouts/Main/Main";
import Footer from "./FrontEnd/Layouts/Footer/Footer";
import Header from "./FrontEnd/Layouts/Header/Header";

import AnimationRoutes from "./FrontEnd/components/AnimationRoutes/AnimationRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Header />
        </header>

        <main>
          <AnimationRoutes />
        </main>

        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
