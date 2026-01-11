import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./compoents/Home";

import NavBar from "./compoents/NavBar";

import About from "./compoents/About";

import Contact  from "./compoents/Contact";

import Proyectos from "./compoents/Proyectos"


function App() {
  return (
    <BrowserRouter>
    <main >
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/proyectos" element={<Proyectos />} />
        
      </Routes>
     </main>
    </BrowserRouter>
  );
}

export default App;
