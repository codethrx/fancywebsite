import React, { useState } from "react";
import { motion } from "framer-motion";
function Testing() {
  const [dimensions, setDimesions] = useState(0);
  console.log(dimensions);
  return (
    <div style={{ padding: `10rem` }}>
      <motion.div
        className="div"
        whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
        // initial={{ transition: { duration: 0.5 } }}
      >
        hello
      </motion.div>
    </div>
  );
}

export default Testing;
