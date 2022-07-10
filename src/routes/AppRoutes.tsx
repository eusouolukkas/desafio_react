import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contato } from "../pages/Contato";
import { Home } from "../pages/Home";
import { Sobre } from "../pages/Sobre";

export const AppRoutes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Sobre' element={<Sobre />} />
          <Route path='/Contato' element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
