import React from "react";
import { Link } from "react-router-dom";
import Lung from "../../../image/Lung.png";
import Kidney from "../../../image/Kidney.png";
import Heart from "../../../image/Heart.png";
import Blood from "../../../image/Blood.png";
import Liver from "../../../image/Liver.png";
import Eye from "../../../image/Eye.png";

function Collection() {
  const items = [
    { name: "Lung", image: Lung },
    { name: "Kidney", image: Kidney },
    { name: "Heart", image: Heart },
    { name: "Blood", image: Blood },
    { name: "Liver", image: Liver },
    { name: "Eye", image: Eye },
  ];

  return (
    <div className="collection-section">
      <h2 className="collection-section-title">Organ Collection</h2>
      <p className="collection-subtitle">
        Explore the essential organs of the human body. Each icon represents a vital organ, helping you understand its function and importance. 
        <br />
        Click on any organ to learn more about it.
      </p>
      <div className="container-fluid px-3">
        <div className="row justify-content-center gx-3">
          { items.map((item, index) => {
              const path = `/form/${item.name.toLowerCase()}`; // e.g. /form/heart
              
              return (
                <div key={ index } className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
                  <div className="collection-item-box">
                    <Link to={ path }>
                      <img src={ item.image } alt={ item.name } className="collection-item-icon" />
                    </Link>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Collection;