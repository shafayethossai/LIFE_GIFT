import React from "react";

function Profile({ profile = {} }) {
  return (
    <div className="col-lg-6">
      <div className="card shadow profile-preview-card">
        <div className="card-header bg-primary text-white">
          <h4>Profile Preview</h4>
          <small>Check how your profile looks</small>
        </div>

        <div className="card-body text-center">
          {profile.picture ? (
            <img src={profile.picture} alt="Profile" className="profile-image mb-3" />
          ) : (
            <div className="profile-placeholder mb-3">
              <i className="fas fa-user fa-3x"></i>
            </div>
          )}

          <div className="profile-info">
            <h5 className="fw-bold mb-2">{profile.name || "Full Name"}</h5>
            <div className="profile-detail"><span className="label"> Age: </span><span className="value">{profile.age || "-"}</span></div>
            <div className="profile-detail"><span className="label"> Gender: </span><span className="value">{profile.gender || "-"}</span></div>
            <div className="profile-detail"><span className="label"> Blood Group: </span><span className="value">{profile.bloodGroup || "-"}</span></div>
            <div className="profile-detail"><span className="label"> Contact: </span><span className="value">{profile.contact || "-"}</span></div>
            <div className="profile-detail"><span className="label"> Height: </span><span className="value">{profile.height || "-"}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
