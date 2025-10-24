import { Link } from "react-router-dom";

function Lung() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">💙 Lung Donation — Requirements</h2>
      <ul>
        <li>Deceased or living lobe donation possible.</li>
        <li>No chronic lung diseases or infections.</li>
        <li>Age typically under 65 years.</li>
        <li>Blood type compatibility is required.</li>
      </ul>
      <div className="mt-4">
        <Link to="/donation/form/lung" className="btn btn-primary">Fill Form</Link>
        <span> </span>
        <Link to="/donation" className="btn btn-secondary me-3">⬅ Back</Link>
      </div>
    </div>
  );
}

export default Lung;
