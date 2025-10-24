import React, { useState } from "react";
import { Link } from "react-router-dom";

function LiverForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    contact: "",
    address: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🧡 Liver Donation Form Submitted!\nThank you!");
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

  const TextAreaField = ({ label, name, value, onChange }) => (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <textarea name={name} className="form-control" rows="3" value={value} onChange={onChange}></textarea>
    </div>
  );

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-warning">🧡 Liver Donation Form</h2>
      <p>I’ve decided to donate my liver so that even after I’m gone, I can help someone live. Giving life is the greatest gift we can share.</p>
      <form onSubmit={handleSubmit}>
        <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} />
        <InputField label="Age" name="age" type="number" value={formData.age} onChange={handleChange} />
        <SelectField label="Gender" name="gender" value={formData.gender} onChange={handleChange} />
        <InputField label="Blood Group" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} />
        <InputField label="Contact Number" name="contact" value={formData.contact} onChange={handleChange} />
        <TextAreaField label="Address" name="address" value={formData.address} onChange={handleChange} />
        <div className="form-check mb-3">
          <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="form-check-input" required />
          <label className="form-check-label">I confirm my willingness to donate my liver.</label>
        </div>
        <button type="submit" className="btn btn-warning me-3">Submit</button>
        <Link to="/donation/liver" className="btn btn-secondary">⬅ Back</Link>
      </form>
    </div>
  );
}

export default LiverForm;