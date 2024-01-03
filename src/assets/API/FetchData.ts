const URL = "https://api.rawg.io/api";
const KEY = "911a250b30c54e34a60dcbcf35aba8dd";

const fetchData = async (pageNum: number) => {
  const response = await fetch(`${URL}/games?page=${pageNum}&key=${KEY}`, {
    mode: "cors",
  });
  if (!response.ok) throw new Error("something went wrong!");

  const data = await response.json();

  return data;
};

export default fetchData;
