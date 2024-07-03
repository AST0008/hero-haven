import { useEffect,useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =>   {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Unexpected Error");
          }
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setData(data);
          setPending(false);
          setError(null);
        })
        .catch((err) => {
          // console.log(err);
          setPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);
  return {data,pending, error}
};


export default useFetch;
