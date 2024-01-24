const prices: number[] = [0.99, 4.99, 9.99, 19.99, 34.99, 49.99, 59.99];

const getPrice = (gameId: number) => {
  return prices[gameId % prices.length];
};

export default getPrice;
