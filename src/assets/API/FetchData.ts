const URL = "https://api.rawg.io/api";
const KEY = "911a250b30c54e34a60dcbcf35aba8dd";

const fetchData = async (category: string, params?: Record<string, string>) => {
  const searchParams = new URLSearchParams(params).toString();

  const response = await fetch(
    `${URL}/${category}?${searchParams}&key=${KEY}`,
    {
      mode: "cors",
    },
  );
  if (!response.ok) throw new Error("something went wrong!");

  const data = await response.json();
  console.log(data);
  return data;
};

export default fetchData;
