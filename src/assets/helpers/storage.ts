const addToCart = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  gameName: string,
  price: number,
  list: object[],
  setterFunction: React.Dispatch<React.SetStateAction<object[]>>,
  setterBtn: React.Dispatch<React.SetStateAction<boolean>>,
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
