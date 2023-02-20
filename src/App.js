//Роутинг
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route path='/' element={<Main />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
