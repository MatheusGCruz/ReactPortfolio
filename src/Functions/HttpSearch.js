import { useState, useEffect } from "react";

const FetchUsers = () => {
  const [hasError, setErrors] = useState(false);
  const [users, setUsers] = useState({});

  async function fetchData() {
    const res = await fetch(
      "http://antares.ninja:3005/files"
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
