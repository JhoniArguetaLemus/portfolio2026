import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./compoents/Home";

import NavBar from "./compoents/NavBar";

import About from "./compoents/About";

import Contact  from "./compoents/Contact";

function App() {
  return (
    <BrowserRouter>
    <main >
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
     </main>
    </BrowserRouter>
  );
}

export default App;
