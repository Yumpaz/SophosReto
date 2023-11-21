import React from "react";
import Layout from "./Layout";
import HeroesPage from "./pages/HeroesPage";
import VillanosPage from "./pages/VillanosPage";
import BatallasPage from "./pages/BatallasPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HeroesPage />} />
          <Route path="/Villanos" element={<VillanosPage />} />
          <Route path="/Batallas" element={<BatallasPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
