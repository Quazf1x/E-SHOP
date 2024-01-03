const getRandNum = (max: number, min: number) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};

export default getRandNum;
