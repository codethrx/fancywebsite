//animations objects.
const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 250,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.4,
      when: "beforeChildren",
    },
  },
};
const titleAnimation = {
  hidden: { y: 200 },
  show: { y: 0, transition: { duration: 0.24, ease: "easeOut" } },
};
const fadeAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.24, ease: "easeOut" } },
};
const scaleAnimation = {
  hidden: { scale: 1.5 },
  show: { scale: 1, transition: { duration: 1, ease: "easeOut", delay: 0 } },
};
const lineAnimation = {
  hidden: { width: `0%` },
  show: { width: "100%", transition: { duration: 0.24, ease: "easeOut" } },
};
//exporing
export {
  pageAnimation,
  titleAnimation,
  fadeAnimation,
  scaleAnimation,
  lineAnimation,
};
