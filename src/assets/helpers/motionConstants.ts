const pageTransitionMotion = {
  //initial: { opacity: 0, x: -25 },
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
  //exit: { opacity: 0, x: -25 },
  exit: { opacity: 0, y: 25 },
};

const gamesGridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const gameCardVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export { pageTransitionMotion, gamesGridVariants, gameCardVariants };
