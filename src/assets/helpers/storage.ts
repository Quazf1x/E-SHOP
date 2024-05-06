const addToCart = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  gameName: string,
  price: number,
  list: any,
  setterFunction: React.Dispatch<React.SetStateAction<object[]>>,
  setterBtn: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  e.preventDefault();
  const newOrder = { name: gameName, price: price };
  console.log(list);
  const isInArray =
    list.find((order: any) => order.name == gameName) !== undefined;
  if (!isInArray) {
    setterFunction([...list, newOrder]);
    setterBtn(true);
  }
};

export { addToCart };
