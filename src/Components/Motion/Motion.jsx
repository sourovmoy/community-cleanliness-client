import React from "react";
import * as motion from "motion/react-client";

const Motion = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
