import React, { useEffect, useState } from "react";

const BannerTwo = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("https://boiling-lake-81029.herokuapp.com/banner")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return (
    <div className="container">
      {offers.map((offer) => (
        <div key={offer._id}>
          <div className="row mt-5 mb-5">
            <div className="col-md-6 mt-5">
              <div className="mt-5">
                
                  <h1>{offer.title}</h1>
                  <h2>{offer.title1}</h2>
                  <p>{offer.des}</p>
                
              </div>
            </div>
            <div className="col-md-6">
              <img src={offer.img3} alt="" srcset="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerTwo;
