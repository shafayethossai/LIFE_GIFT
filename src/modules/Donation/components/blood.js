import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Blood() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">🩸 Blood Donation — Requirements</h2>
      <ul>
        <li>Age 18–65 years.</li>
        <li>Minimum weight 50 kg.</li>
        <li>Good overall health, no infections.</li>
        <li>Can donate every 3–4 months.</li>
      </ul>
      <div className="mt-4">
        <Link to="/donation/form/blood" className="btn btn-danger">Fill Form</Link>
        <span> </span>
        <Link to="/donation" className="btn btn-secondary me-3">⬅ Back</Link>
      </div>
    </div>
  );
}

// change

export default Blood;
