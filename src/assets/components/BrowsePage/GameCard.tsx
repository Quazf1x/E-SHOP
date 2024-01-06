const GameCard = () => {
  return (
    <div className="gamecard">
      <img src="https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg" />
      <div className="gamecard-info-wrapper">
        <h4 className="gamecard-name">Assassins Creed: Vallhalla</h4>
        <div>
          <p className="gamecard-price">4.99$</p>
          <button className="gamecard-add-btn">Add</button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
