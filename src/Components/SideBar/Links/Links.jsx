import { motion } from "framer-motion";
import React from "react";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

function Links() {
  const items = ["HomePage", "Services", "Portfolio", "Contact", "About"];

  return (
    <div className="links">
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.2}} whileTap={{scale:0.8}}>
          {item}
        </motion.a>
      ))}
    </div>
  );
}

export default Links;
