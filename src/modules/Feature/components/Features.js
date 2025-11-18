import React from "react";
import {
  FaUserShield,
  FaHandHoldingHeart,
  FaEnvelopeOpenText,
  FaProjectDiagram,
  FaUserCog,
  FaBell,
} from "react-icons/fa";

function Features() {
  const keyFeatures = [
    {
      icon: <FaUserShield />,
      title: "User Authentication",
      desc: "Secure login and registration for donors and recipients.",
      gradient: "linear-gradient(135deg, #ff5f6d, #ffc371)",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Donor Registration",
      desc: "Easily register as a blood or organ donor.",
      gradient: "linear-gradient(135deg, #56ab2f, #a8e063)",
    },
    {
      icon: <FaEnvelopeOpenText />,
      title: "Recipient Requests",
      desc: "Recipients can request blood or organs quickly.",
      gradient: "linear-gradient(135deg, #2193b0, #6dd5ed)",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Smart Matching",
      desc: "Automatically match donors with suitable recipients.",
      gradient: "linear-gradient(135deg, #f7971e, #ffd200)",
    },
    {
      icon: <FaUserCog />,
      title: "Admin Management",
      desc: "Admins can manage donors, recipients, and data.",
      gradient: "linear-gradient(135deg, #8E2DE2, #4A00E0)",
    },
    {
      icon: <FaBell />,
      title: "Notifications & Awareness",
      desc: "Instant alerts and awareness campaigns.",
      gradient: "linear-gradient(135deg, #e53935, #e35d5b)",
    },
  ];

  return (
    <div className="features-section py-5">
      <div className="container">
        <h2 className="text-center text-gradient fw-bold mb-5">
          Project Features
        </h2>
        <div className="features-container">
          {keyFeatures.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{ background: feature.gradient }}
            >
              <div
                className="icon-glow mb-4"
                style={{ background: feature.gradient }}
              >
                {React.cloneElement(feature.icon, { size: 32, color: "#fff" })}
              </div>
              <h5 className="fw-bold mb-3">{feature.title}</h5>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
