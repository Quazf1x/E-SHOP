import { useSearchParams } from "react-router-dom";

const BrowseFooter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const val = (e.target as HTMLInputElement).textContent;
    setSearchParams((params) => {
      params.set("page", val);
      return params;
    });
  };

  return (
    <div className="browse-footer">
      <button onClick={onClick}>1</button>
      <button onClick={onClick}>2</button>
      <button onClick={onClick}>3</button>
      <button onClick={onClick}>4</button>
      <button onClick={onClick}>5</button>
    </div>
  );
};

export default BrowseFooter;
