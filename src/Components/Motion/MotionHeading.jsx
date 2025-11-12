import React, { Children } from "react";
import * as motion from "motion/react-client";

const MotionHeading = ({ children }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="text-center text-3xl font-bold pt-5"
    >
      {children}
    </motion.h2>
  );
};

export default MotionHeading;
