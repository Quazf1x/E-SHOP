const getRandNum = (max: number, min: number = 0) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};

export default getRandNum;
