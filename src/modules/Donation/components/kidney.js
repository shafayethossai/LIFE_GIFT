import { Link } from "react-router-dom";

function Kidney() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">💚 Kidney Donation — Requirements</h2>
      <ul>
        <li>Can be from living or deceased donor.</li>
        <li>Donor must be in good health.</li>
        <li>No diabetes or high blood pressure.</li>
        <li>Compatible tissue and blood match.</li>
      </ul>
      <div className="mt-4">
        <Link to="/donation/form/kidney" className="btn btn-success">Fill Form</Link>
        <span> </span>
        <Link to="/donation" className="btn btn-secondary me-3">⬅ Back</Link>
      </div>
    </div>
  );
}

export default Kidney;
