import React, { useEffect, useState } from "react";
import Flags from "./Flags/Flags";

const App = () => {
  const [data, setData] = useState<any>(undefined);

  const getData = () => {
    const requestOptions: RequestInit = {
      method: "GET",
    };

    return fetch(`http://localhost:5000/api/flags`, requestOptions)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }

        return res.json();
      })
      .then((jsondata) => {
        setData(jsondata);
      })
      .catch((err) => {
        console.warn("error", err);
      });
  };

  const updateItem = (param: any) => {
    const requestOptions: RequestInit = {
      method: "POST",
      body: JSON.stringify(param),
    };

    return fetch(`http://localhost:5000/api/flags/post`, requestOptions)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((jsondata) => {
        setData(jsondata);
      })
      .catch((err) => {
        console.warn("error", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  // console.log("data", data);

  if (!data) return <div>LOADING</div>;
  return <Flags data={data} updateItem={updateItem} />;
};

export default App;
