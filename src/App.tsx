import React, { useEffect, useState } from "react";
import Flags from "./Flags/Flags";

// App component with two main fetch data functions:
// getData to fetch all data with GET method;
// updateItem to upsert data with params passed in.
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

  if (!data) return <div>LOADING</div>;
  return <Flags data={data} updateItem={updateItem} />;
};

export default App;
