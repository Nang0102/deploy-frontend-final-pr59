import { useState, useEffect } from "react";
const useFetch = (
  url = "http://127.0.0.1:5000/user/rooms",
  title,
  image = null
) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url, title, image)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url, title, image]);
  return { data };
};
export default useFetch;
