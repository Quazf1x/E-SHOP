import { Link } from "react-router-dom";

const BrowseFooter = () => {
  return (
    <div className="browse-footer">
      <Link
        to={{
          search: "?page=1",
        }}
      >
        1
      </Link>
      <Link
        to={{
          search: "?page=2",
        }}
      >
        2
      </Link>
      <Link
        to={{
          search: "?page=3",
        }}
      >
        3
      </Link>
      <Link
        to={{
          search: "?page=4",
        }}
      >
        4
      </Link>
      <Link
        to={{
          search: "?page=5",
        }}
      >
        5
      </Link>
    </div>
  );
};

export default BrowseFooter;
