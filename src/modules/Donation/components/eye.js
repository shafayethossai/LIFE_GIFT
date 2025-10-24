import { Link } from "react-router-dom";

function Eye() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">👁️ Eye / Cornea Donation — Requirements</h2>
      <ul>
        <li>Donated after death (within 6 hours).</li>
        <li>No infections like HIV or hepatitis.</li>
        <li>Eyes should be healthy and clear.</li>
        <li>All ages can be donors.</li>
      </ul>
      <div className="mt-4">
        <Link to="/donation/form/eye" className="btn btn-info">Fill Form</Link>
        <span> </span>
        <Link to="/donation" className="btn btn-secondary me-3">⬅ Back</Link>
      </div>
    </div>
  );
}

export default Eye;
