import React, { useState, useEffect } from "react";
import Profile from "./Profile-Preview";

function UserProfile() {
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        contact: "",
        nid: "",
        height: "",
        age: "",
        gender: "",
        bloodGroup: "",
        district: "",
        picture: null,
    });

    useEffect(() => {
        const saved = localStorage.getItem("userProfile");

        if (saved) {
            try {
                setProfile(JSON.parse(saved));
            } 
            catch (err) {
                console.error("Failed to parse saved profile:", err);
            }
        }
    }, []);

    const handleChange = (e) => {
        const name = e.target.name;

        if (name === "picture") {
            const file = e.target.files[0];

            if (file) {
                const reader = new FileReader();

                reader.onloadend = () => {
                    setProfile((prev) => ({ ...prev, picture: reader.result }));
                };
                reader.readAsDataURL(file);
            }
            return;
        }

        const value = e.target.value;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // require all specified fields before saving
        const required = [
            "name",
            "email",
            "contact",
            "nid",
            "age",
            "gender",
            "height",
            "bloodGroup",
            "district",
        ];

        for (let i=0; i<required.length; i++) {
            const key = required[i];

            if (!profile[key] || profile[key].toString().trim() === "") {
                alert("Please fill " + key);
                return;
            }
        }

        try {
            localStorage.setItem("userProfile", JSON.stringify(profile));
            alert("Profile saved locally.");
        } catch (err) {

            console.error("Failed to save profile:", err);
            alert("Failed to save profile locally.");
        }
    };

    return (
        <div className="user-profile-container container-fluid py-4">
            <div className="row gx-4">
                {/* Left Side: Profile Form */}
                <div className="col-lg-6">
                    <div className="card shadow profile-form-card">
                        <div className="card-header bg-primary text-white">
                            <h4>User Profile</h4>
                            <small>Manage your account details</small>
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label"> Full Name </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={profile.name}
                                        onChange={handleChange}
                                    />
                                </div>                    

                                <div className="row mb-3">
                                    <div className="col">
                                        <label className="form-label"> Contact Number </label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="contact"
                                            value={profile.contact}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col">
                                        <label className="form-label"> District </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="district"
                                            value={profile.district}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col">
                                        <label className="form-label"> Age </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="age"
                                            value={profile.age}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col">
                                        <label className="form-label"> Gender </label>
                                        <select
                                            className="form-select"
                                            name="gender"
                                            value={profile.gender}
                                            onChange={handleChange}
                                        >
                                            <option value=""> Select </option>
                                            <option value="Male"> Male </option>
                                            <option value="Female"> Female </option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col">
                                        <label className="form-label"> Height </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="height"
                                            value={profile.height}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col">
                                        <label className="form-label"> Blood Group </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="bloodGroup"
                                            value={profile.bloodGroup}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"> Email Address </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={profile.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"> NID Number </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nid"
                                        value={profile.nid}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Upload Picture</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        name="picture"
                                        accept="image/*"
                                        onChange={handleChange}
                                    />
                                </div>

                                <button className="btn btn-primary w-100" type="submit">
                                    Save Profile
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <Profile profile={profile} />{/* Right Side: Profile Preview */}
            </div>
        </div>
    );
}

export default UserProfile;