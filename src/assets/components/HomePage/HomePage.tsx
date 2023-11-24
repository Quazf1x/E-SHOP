import placeholderImg from "../../../placeholder.jpg";

function HomePage() {
  const bgImg = `linear-gradient(#000000c0, #000000b6),
  url(${placeholderImg}) 30% 30%`;
  //the img is just a placeholder, will change this later

  return (
    <section style={{ background: bgImg }} className="home-banner">
      <div>
        <h1>Game name</h1>
        <div>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
