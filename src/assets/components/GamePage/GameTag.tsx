type GameTagTypes = {
  name: string;
};

const GameTag = ({ name }: GameTagTypes) => {
  return <div>{name}</div>;
};

export default GameTag;
