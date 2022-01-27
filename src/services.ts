export function getData() {
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
    .catch((err) => {
      console.warn("error", err);
    });
}

export function updateItem(param: any) {
  const requestOptions: RequestInit = {
    method: "POST",
    body: JSON.stringify(param),
  };

  return fetch(`http://localhost:5000/api/flags/post`, requestOptions)
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      getData();
    })
    .catch((err) => {
      console.warn("error", err);
    });
}
