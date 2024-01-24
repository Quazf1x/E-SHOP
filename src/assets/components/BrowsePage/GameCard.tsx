type gameTypes = {
  bgImg: string;
  gameName: string;
};

const GameCard = ({ bgImg, gameName }: gameTypes) => {
  return (
    <div className="gamecard">
      <img src={bgImg} />
      <div className="gamecard-info-wrapper">
        <h4 className="gamecard-name">{gameName}</h4>
        <div>
          <p className="gamecard-price">4.99$</p>
          <button className="gamecard-add-btn">Add</button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
