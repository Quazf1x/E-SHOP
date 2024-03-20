const GameInfo = ({ gameDetails }) => {
  console.log(gameDetails);
  return (
    <div className="gamepage-infoblock">
      <p className="gamepage-description">{gameDetails.description_raw}</p>

      <div className="gamepage-details">
        <p>Released: {gameDetails.released.replaceAll("-", ".")}</p>
        <p>Developers: {gameDetails.developers[0].name}</p>
        <button className="gamepage-more-btn">More</button>
      </div>
    </div>
  );
};

export default GameInfo;
