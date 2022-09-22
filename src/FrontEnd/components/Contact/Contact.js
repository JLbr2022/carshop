import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="Contact"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { durtion: 0.3 } }}
    >
      <h1>Contact</h1>
    </motion.div>
  );
}

export default Contact;
