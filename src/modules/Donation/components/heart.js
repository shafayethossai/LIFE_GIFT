import { Link } from "react-router-dom";

function Heart() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">❤️ Heart Donation — Requirements</h2>
      <ul>
        <li>Deceased donors only — living heart donation not possible.</li>
        <li>No systemic infection or active cancer.</li>
        <li>Consent from donor or family required.</li>
        <li>Heart must be healthy and functional.</li>
      </ul>
      <div className="mt-4">
        <Link to="/donation/form/heart" className="btn btn-danger">Fill Form</Link>
        <span> </span>
        <Link to="/donation" className="btn btn-secondary me-3">⬅ Back</Link>
      </div>
    </div>
  );
}

export default Heart;
