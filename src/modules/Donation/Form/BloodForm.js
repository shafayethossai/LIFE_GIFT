import React, { useState } from "react";
import { Link } from "react-router-dom";

function BloodForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bloodGroup: "",
    contact: "",
    lastDonationDate: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🩸 Blood Donation Form Submitted!\nThank you for your generosity!");
  };

  const InputField = ({ label, name, value, onChange, type = "text" }) => (
    <div className="mb-3">
      <label className="form-label"> {label} </label>
      <input type={type} name={name} className="form-control" value={value} onChange={onChange} required />
    </div>
  );

  const SelectField = ({ label, name, value, onChange }) => (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select name={name} className="form-select" value={value} onChange={onChange} required>
        <option value="">-- Select Blood Group --</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
      </select>
    </div>
  );

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-danger">🩸 Blood Donation Form</h2>
      <p>I donate blood because someone, somewhere, needs it to live. A few minutes of my time can mean a lifetime for someone else.</p>
      <form onSubmit={handleSubmit}>
        <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} />
        <InputField label="Age" name="age" type="number" value={formData.age} onChange={handleChange} />
        <SelectField label="Blood Group" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} />
        <InputField label="Contact Number" name="contact" value={formData.contact} onChange={handleChange} />
        <InputField label="Last Donation Date" name="lastDonationDate" type="date" value={formData.lastDonationDate} onChange={handleChange} />
        <div className="form-check mb-3">
          <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="form-check-input" required />
          <label className="form-check-label">I confirm my willingness to donate blood.</label>
        </div>
        <button type="submit" className="btn btn-danger me-3">Submit</button>
        <Link to="/donation/blood" className="btn btn-secondary">⬅ Back</Link>
      </form>
    </div>
  );
}

export default BloodForm;