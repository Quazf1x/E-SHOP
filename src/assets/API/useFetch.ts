const URL = "https://api.rawg.io/api";
const KEY = "911a250b30c54e34a60dcbcf35aba8dd";

import { useEffect, useState } from "react";

type paramsType = {
  [key: string]: string | number | null;
};

const useFetch = <T>(
  category: string,
  params?: paramsType,
  dep?: any,
): [boolean, T, boolean] => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<object>({});
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async (category: string, params?: any) => {
      if (!isLoading) {
        setLoading(true);
        setError(false);
      }

      const searchParams = new URLSearchParams(params).toString();
      try {
        const response = await fetch(
          `${URL}/${category}?${searchParams}&key=${KEY}`,
        );
        if (!response.ok) throw new Error("something went wrong!");

        const data = await response.json();
        setData(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData(category, params);
  }, [params, dep]);

  return [isLoading, data, isError] as const;
};

export default useFetch;
