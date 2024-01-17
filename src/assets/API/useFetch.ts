const URL = "https://api.rawg.io/api";
const KEY = "911a250b30c54e34a60dcbcf35aba8dd";

import { useEffect, useState } from "react";

const useFetch = (category: string, params?: Record<string, string>) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (
      category: string,
      params?: Record<string, string>,
    ) => {
      if (!isLoading) {
        setLoading(true);
        setError(null);
      }

      const searchParams = new URLSearchParams(params).toString();
      try {
        const response = await fetch(
          `${URL}/${category}?${searchParams}&key=${KEY}`,
          {
            mode: "cors",
          },
        );
        if (!response.ok) throw new Error("something went wrong!");

        const data = await response.json();
        setData(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData(category, params);
  }, []);

  return [isLoading, data, error];
};

export default useFetch;
