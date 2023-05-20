//
import { useState, useEffect } from "react";

function StudentsLogo() {
  const url =
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"; //=> for Random-Natural Pic API
  // "https://dog.ceo/api/breeds/image/random";   //=> for Random-Dog API

  const [data, setData] = useState({});

  async function fetchInfo() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  if (!data.urls) return null;
  // if (!data) return null;

  return (
    <div>
      <img className="student-logo" src={data.urls.regular} />
      {/* <img className="student-logo" src={data.message} /> */}
    </div>
  );
}

export default StudentsLogo;
