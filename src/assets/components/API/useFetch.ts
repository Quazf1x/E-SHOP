import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(
      "https://api.rawg.io/api/games?page=1&key=911a250b30c54e34a60dcbcf35aba8dd",
      { mode: "cors" },
    ).then((response) => {
      if (response.status > 400) throw new Error("server did not respond.");
      return response
        .json()
        .then((response) => setData(response))
        .catch((error) => console.error(error));
    });
  }, []);

  return data;
};

export default useFetch;
