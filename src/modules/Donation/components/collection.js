import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Collection() {
  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">
        💖 <b>Donation</b>
      </h1>

      {/* Two Rows, 3 Columns Each */}
      <div className="row g-4 justify-content-center">
        {/* Row 1 */}
        <div className="col-6 col-md-4 col-lg-4">
          <Link
            to="/donation/heart"
            className="donation-box heart d-flex align-items-center justify-content-center"
          >
            ❤️ Heart
          </Link>
        </div>

        <div className="col-6 col-md-4 col-lg-4">
          <Link
            to="/donation/lung"
            className="donation-box lung d-flex align-items-center justify-content-center"
          >
            💙 Lung
          </Link>
        </div>

        <div className="col-6 col-md-4 col-lg-4">
          <Link
            to="/donation/liver"
            className="donation-box liver d-flex align-items-center justify-content-center"
          >
            🧡 Liver
          </Link>
        </div>

        {/* Row 2 */}
        <div className="col-6 col-md-4 col-lg-4">
          <Link
            to="/donation/kidney"
            className="donation-box kidney d-flex align-items-center justify-content-center"
          >
            💚 Kidney
          </Link>
        </div>

        <div className="col-6 col-md-4 col-lg-4">
          <Link
            to="/donation/eye"
            className="donation-box eye d-flex align-items-center justify-content-center"
          >
            👁️ Eye / Cornea
          </Link>
        </div>
        
        <div className="col-6 col-md-4 col-lg-4">
          <Link
            to="/donation/blood"
            className="donation-box blood d-flex align-items-center justify-content-center"
          >
            🩸 Blood
          </Link>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .donation-box {
          width: 75%;
          aspect-ratio: 1 / 1;
          font-size: 1.4rem;  /* smaller text */
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          color: black;
          border-radius: 20px;
          text-decoration: none;
          box-shadow: 0 5px 12px rgba(0,0,0,0.2);
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px; /* adds slight inner spacing */
        }

        .donation-box:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        .heart { background: linear-gradient(135deg, #ff5f6d, #ffc371); }
        .lung { background: linear-gradient(135deg, #2193b0, #6dd5ed); }
        .liver { background: linear-gradient(135deg, #f7971e, #ffd200); }
        .kidney { background: linear-gradient(135deg, #56ab2f, #a8e063); }
        .eye { background: linear-gradient(135deg, #00c6ff, #0072ff); }
        .blood { background: linear-gradient(135deg, #e53935, #e35d5b); }

        @media (max-width: 992px) {
          .donation-box {
            font-size: 1.2rem;
            border-radius: 15px;
          }
        }

        @media (max-width: 768px) {
          .donation-box {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Collection;
