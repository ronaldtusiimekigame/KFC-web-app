import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Buckets from "./pages/categories/Buckets";
import Pagenotfound from "./pages/Pagenotfound";
import Cart from "./pages/Cart";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="Cart" element={<Pagenotfound />} />
          <Route path="/menu/bucket" element={<Buckets />} />
          <Route path="/cart/:name" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
