function Eye() {
  const eyeGroups = [
    { group: "A+", donors: 5 },
    { group: "A−", donors: 3 },
    { group: "B+", donors: 8 },
    { group: "B−", donors: 2 },
    { group: "AB+", donors: 4 },
    { group: "AB−", donors: 1 },
    { group: "O+", donors: 6 },
    { group: "O−", donors: 2 },
  ];

  const handleClick = (group) => {
    alert(`Viewing ${group} eye donors`);
    // later: navigate(`/eye/${group}`);
  };

  return (
    <div>
      <div className="eye-container">
        <h1 className="eye-title">Available Eye Donors</h1>
        <p className="eye-subtitle">
          Select a blood group to view available eye donors
        </p>

        <div className="eye-grid">
          {eyeGroups.map((item, index) => (
            <div
              key={index}
              className="eye-card"
              onClick={() => handleClick(item.group)}
            >
              <h2 className="eye-group">{item.group}</h2>
              <p className="eye-donors">{item.donors} Donors Available</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Eye;