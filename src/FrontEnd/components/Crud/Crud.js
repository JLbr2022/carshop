import React from "react";
import "./Crud.css";

import { motion } from "framer-motion";

function Crud() {
  return (
    <motion.div
      className="Crud"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <h1>Crud</h1>
    </motion.div>
  );
}

export default Crud;
