import React, { useEffect, useState } from "react";

const NotFound = () => {
  const [banners, setBanner] = useState([]);
  useEffect(() => {
    fetch("https://boiling-lake-81029.herokuapp.com/banner")
      .then((res) => res.json())
      .then((data) => setBanner(data));
  }, []);
  return (
    <div className="container">
      {banners.map((banner) => (
        <div key={banner._id}>
          <img
            height="1200px"
            src={banner.img4}
            alt=""
            srcset=""
          />
        </div>
      ))}
    </div>
  );
};

export default NotFound;
