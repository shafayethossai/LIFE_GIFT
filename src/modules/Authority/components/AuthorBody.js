import React from "react";
import Tamim from "../../../image/Tamim.jpg";
import Sifat from "../../../image/Sifat.jpg";
import Shafa from "../../../image/Shafa.jpg";
import Imran from "../../../image/Imran.jpg";

function Author() {
  const items = [
    {
      name: "MD Tamim Hossain",
      image: Tamim,
      description:
        "Competitive Programmer | Specialist at Codeforces | Build Collection, Authority and Login Pages",
    },
    {
      name: "Ahsan Ahmed Sifat",
      image: Sifat,
      description:
        "Competitive Programmer | Football Player | Build Heart, Lungs, Blood, etc Pages",
    },
    {
      name: "Shafayat Ullah",
      image: Shafa,
      description:
        "Competitive Programmer | Specialist at Codeforces | Build Home and Profile Pages | System Designer, Architect and route integrator",
    },
    {
      name: "Imran Islam",
      image: Imran,
      description: "Competitive Programmer | Build Donation and Features Pages",
    },
  ];

  return (
    <div className="collection-container text-center">
        <h2 className="collection-title">The Team</h2>
        <p className="collection-subtitle">
            The people who make this system work. Everyone is a volunteer and works
            for the community just because they love it. <br />
            If you want to join the team, contact us on our Facebook page.
        </p>

        <div className="container-fluid px-3">
            <div className="row justify-content-center gx-3">
            { items.map((item, index) => (
                <div key={ index } className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center" >
                    <div className="collection-box text-center">
                        <img src={ item.image } alt={ item.name} className="collection-icon" />
                        <div className="collection-info">
                            <h5>{ item.name }</h5>
                            <p>{ item.description }</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
}

export default Author;