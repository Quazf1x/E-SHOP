const addToCart = (
  e: any,
  gameName: string,
  price: number,
  list: object[],
  setterFunction: any,
  setterBtn: any,
) => {
  e.preventDefault();
  const newOrder = { name: gameName, price: price };
  const isInArray = list.find((order) => order.name == gameName) !== undefined;
  if (!isInArray) {
    setterFunction([...list, newOrder]);
    setterBtn(true);
  }
};

export { addToCart };
