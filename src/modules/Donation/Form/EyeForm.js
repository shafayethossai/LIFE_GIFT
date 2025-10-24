import React, { useState } from "react";
import { Link } from "react-router-dom";

function EyeForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    city: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("👁️ Eye Donation Form Submitted!\nThank you!");
  };

  const InputField = ({ label, name, value, onChange, type = "text" }) => (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input type={type} name={name} className="form-control" value={value} onChange={onChange} required />
    </div>
  );

  const SelectField = ({ label, name, value, onChange }) => (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select name={name} className="form-select" value={value} onChange={onChange} required>
        <option value="">-- Select Gender --</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-info">👁️ Eye/Cornea Donation Form</h2>
      <p>I’ve decided to donate my eye so that even after I’m gone, I can help someone live. Giving life is the greatest gift we can share.</p>
      <form onSubmit={handleSubmit}>
        <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} />
        <InputField label="Age" name="age" type="number" value={formData.age} onChange={handleChange} />
        <SelectField label="Gender" name="gender" value={formData.gender} onChange={handleChange} />
        <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
        <InputField label="City" name="city" value={formData.city} onChange={handleChange} />
        <div className="form-check mb-3">
          <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="form-check-input" required />
          <label className="form-check-label">I confirm my willingness to donate my eyes.</label>
        </div>
        <button type="submit" className="btn btn-info me-3">Submit</button>
        <Link to="/donation/eye" className="btn btn-secondary">⬅ Back</Link>
      </form>
    </div>
  );
}

export default EyeForm;