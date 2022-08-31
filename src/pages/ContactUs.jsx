import React from "react";
import { pageAnimation } from "../../anime";
import { motion } from "framer-motion";
function ContactUs() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      ContactUs
    </motion.div>
  );
}

export default ContactUs;
