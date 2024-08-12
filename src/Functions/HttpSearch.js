import { useState, useEffect } from "react";

const FetchUsers = () => {
  const [hasError, setErrors] = useState(false);
  const [videos, setVideos] = useState({});

  async function fetchData() {
    const res = await fetch(
      "https://antares.ninja/videoFiles"
    );
    res
      .json()
      .then(res => setVideos(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return JSON.stringify(videos);
};

export default FetchUsers;
