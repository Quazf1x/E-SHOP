const pageTransitionMotion = {
  //initial: { opacity: 0, x: -25 },
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
  //exit: { opacity: 0, x: -25 },
  exit: { opacity: 0, y: 25 },
};

export { pageTransitionMotion };
