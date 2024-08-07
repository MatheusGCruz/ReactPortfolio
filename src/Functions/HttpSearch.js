import { useState, useEffect } from "react";

const FetchUsers = () => {
  const [hasError, setErrors] = useState(false);
  const [users, setUsers] = useState({});

  async function fetchData() {
    const res = await fetch(
      "http://localhost:3005/files"
    );
    res
      .json()
      .then(res => setUsers(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return JSON.stringify(users);
};

export default FetchUsers;


  /*export default function searchHttp() {
    fetch('http://localhost:3005/files').then(function(response) {
        console.log("response");
       return response.json();
  }).then(function(data) {
    console.log(data + " - data");
  }).catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}*/