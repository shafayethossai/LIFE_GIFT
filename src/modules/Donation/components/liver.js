import { Link } from "react-router-dom";

function Liver() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">🧡 Liver Donation — Requirements</h2>
      <ul>
        <li>Living or deceased donors accepted.</li>
        <li>Age between 18–60 years.</li>
        <li>Good liver function, no hepatitis or fatty liver.</li>
        <li>Blood type must match recipient.</li>
      </ul>
      <div className="mt-4">
        <Link to="/donation/form/liver" className="btn btn-warning">Fill Form</Link>
        <span> </span>
        <Link to="/donation" className="btn btn-secondary me-3">⬅ Back</Link>
      </div>
    </div>
  );
}

export default Liver;
