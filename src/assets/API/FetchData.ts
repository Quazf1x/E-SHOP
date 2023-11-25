const fetchData = async (pageNum: number) => {
  const response = await fetch(
    `https://api.rawg.io/api/games?page=${pageNum}&key=911a250b30c54e34a60dcbcf35aba8dd`,
    { mode: "cors" },
  );
  if (!response.ok) throw new Error("something went wrong!");

  const data = await response.json();

  return data;
};

export default fetchData;
