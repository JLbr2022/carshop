import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import SearchEngine from "../SearchEngine/SearchEngine";
import Contact from "../Contact/Contact";
import Crud from "../Crud/Crud";
import Main from "../../Layouts/Main/Main";
import CardataList from "../Crud/CardataList/CardataList"

import { AnimatePresence } from "framer-motion"; // "framer-motion/dist/framer-motion"

function AnimationRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main />}></Route>
        <Route path="SearchEngine" element={<SearchEngine />}></Route>
        <Route path="Contact" element={<Contact />}></Route>
        <Route path="Crud" element={<Crud />}></Route>
        <Route path="Crud/cardata" element={<CardataList />} />

        <Route path="*" element={<Navigate replace to="/" />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimationRoutes;
