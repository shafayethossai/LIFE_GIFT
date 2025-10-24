import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({
    name: "",
    father: "",
    mother: "",
    nationality: "",
    religion: "",
    presentAddress: "",
    permanentAddress: "",
    phone: "",
    email: "",
    password: "",
    bloodGroup: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save user data to localStorage
    localStorage.setItem('userProfile', JSON.stringify(formData));
    localStorage.setItem('isLoggedIn', 'true');
    
    alert(`Registration Successful!\nWelcome ${formData.name}`);
    
    // Redirect to home page
    navigate('/home');
  };

  const handleLoginRedirect = () => {
    // For demo purposes, we'll simulate a login with default data
    const defaultUser = {
      name: "Demo User",
      email: "demo@lifegift.com",
      phone: "0123456789",
      bloodGroup: "O+"
    };
    
    localStorage.setItem('userProfile', JSON.stringify(defaultUser));
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/home');
  };

  return (
    <div className="register-section d-flex align-items-center justify-content-center">
        <div className="card register-card shadow-lg p-4">
            <div className="text-center mb-4">
                <h1 className="register-title"> LifeGift </h1>

                <p className="register-subtitle">
                    Join our community and help save lives. Fill the form below to create your account.
                </p>
            </div>

            <form onSubmit={ handleSubmit }>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" 
                            name="name" 
                            className="form-control" 
                            placeholder="Full Name" 
                            value={ formData.name } 
                            onChange={ handleChange } 
                            required
                        />
                    </div>
                
                    <div className="col-md-6">
                        <input type="text" 
                            name="nationality" 
                            className="form-control" 
                            placeholder="Nationality" 
                            value={ formData.nationality } 
                            onChange={ handleChange } 
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <input type="tel" 
                            name="phone" 
                            className="form-control" 
                            placeholder="Phone Number" 
                            value={ formData.phone } 
                            onChange={ handleChange } 
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <select name="bloodGroup" className="form-control" value={ formData.bloodGroup } onChange={ handleChange } required>
                            <option value="">Select Blood Group</option>
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
                    
                    <div className="col-12">
                        <input type="text" 
                        name="presentAddress" 
                        className="form-control" 
                        placeholder="Address" 
                        value={ formData.presentAddress } 
                        onChange={ handleChange } 
                        required/>
                    </div>

                    <div className="col-md-12">
                        <input type="email" 
                        name="email" 
                        className="form-control" 
                        placeholder="Email Address" 
                        value={ formData.email } 
                        onChange={ handleChange } 
                        required/>
                    </div>

                    <div className="col-md-12">
                        <input type="password" name="password" className="form-control" placeholder="Password" value={ formData.password } onChange={ handleChange } required/>
                    </div>
                </div>

                <button type="submit" className="btn register-btn w-100 mt-4">Register & Login</button>
            </form>

            <p className="mt-3 text-center text-muted">
                Already have an account? 
                <button className="btn btn-link p-0" onClick={handleLoginRedirect}> Login here </button>
            </p>
        </div>
    </div>
  );
}

export default LoginPage;