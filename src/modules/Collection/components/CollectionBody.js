// src/components/Collection/Collection.js
import React from "react";
import { Link } from "react-router-dom";
import Lung from "../../../image/Lung.png";
import Kidney from "../../../image/Kidney.png";
import Heart from "../../../image/Heart.png";
import Blood from "../../../image/Blood.png";
import Liver from "../../../image/Liver.png";
import Eye from "../../../image/Eye.png";

const items = [
  { name: "Lung", image: Lung },
  { name: "Kidney", image: Kidney },
  { name: "Heart", image: Heart },
  { name: "Blood", image: Blood },
  { name: "Liver", image: Liver },
  { name: "Eye", image: Eye },
];

function Collection() {
  return (
    <div className="collection-section container-fluid py-4">
      <h2 className="collection-section-title text-center mb-3">
        Organ Collection
      </h2>
      <p className="collection-subtitle text-center mb-4">
        Explore the essential organs of the human body. Each icon represents a
        vital organ. <br />
        Click on any organ to learn more about it.
      </p>
      <div className="row justify-content-center gx-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center"
          >
            <div className="collection-item-box text-center">
              <Link to={`/form/${item.name.toLowerCase()}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="collection-item-icon mb-2"
                />
                <h5>{item.name}</h5>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
