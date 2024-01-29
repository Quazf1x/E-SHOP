import { Link } from "react-router-dom";

const BrowseFooter = () => {
  return (
    <div className="browse-footer">
      <Link to="/games/1">1</Link>
      <Link to="/games/2">2</Link>
      <Link to="/games/3">3</Link>
      <Link to="/games/4">4</Link>
      <Link to="/games/5">5</Link>
    </div>
  );
};

export default BrowseFooter;
